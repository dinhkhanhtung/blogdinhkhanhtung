"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft, Save, Image as ImageIcon, Loader2, Send } from 'lucide-react';
import { Post, APIKeysSettings } from '@/types/blog';
import { SAMPLE_POSTS } from '@/lib/data';
import { compressImage, uploadToImgBB } from '@/lib/imageCompression';
import { shareToFacebook } from '@/lib/facebookShare';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false }) as any;
import 'react-quill-new/dist/quill.snow.css';

export default function PostEditor() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');

  const [post, setPost] = useState<Partial<Post>>({
    title: '',
    slug: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Admin',
    excerpt: '',
    content: '',
    imageUrl: '',
    status: 'draft',
    autoShareFacebook: false,
    isStatic: false,
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [imgbbKey, setImgbbKey] = useState('');
  const [fbSettings, setFbSettings] = useState({ pageId: '', pageToken: '' });

  const quillRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const initialPostRef = useRef<string>('');

  useEffect(() => {
    fetchSettings();
    if (id) {
      fetchPost(id);
    } else {
      initialPostRef.current = JSON.stringify(post);
    }
  }, [id]);

  useEffect(() => {
    // Check for unsaved changes before leaving
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  // Check changes
  useEffect(() => {
    if (!loading) {
      const current = JSON.stringify({ ...post, updatedAt: null });
      const initial = initialPostRef.current;
      setHasUnsavedChanges(current !== initial);
    }
  }, [post, loading]);

  const fetchSettings = async () => {
    try {
      const docSnap = await getDoc(doc(db, 'settings', 'api_keys'));
      if (docSnap.exists()) {
        const data = docSnap.data() as APIKeysSettings;
        if (data.imgbbApiKey) setImgbbKey(data.imgbbApiKey);
        if (data.facebookPageId) setFbSettings(prev => ({ ...prev, pageId: data.facebookPageId as string }));
        if (data.facebookPageToken) setFbSettings(prev => ({ ...prev, pageToken: data.facebookPageToken as string }));
      }
    } catch (error) {
      console.error("Lỗi lấy cấu hình API:", error);
    }
  };

  const fetchPost = async (postId: string) => {
    setLoading(true);
    try {
      if (postId.startsWith('static-')) {
        const staticPost = SAMPLE_POSTS.find(p => p.id === postId);
        if (staticPost) {
          setPost(staticPost as any);
          initialPostRef.current = JSON.stringify({ ...staticPost, updatedAt: null });
        }
      } else {
        const docSnap = await getDoc(doc(db, 'posts', postId));
        if (docSnap.exists()) {
          const data = docSnap.data() as Post;
          setPost(data);
          initialPostRef.current = JSON.stringify({ ...data, updatedAt: null });
        }
      }
    } catch (error) {
      console.error("Lỗi lấy bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (text: string) => {
    return text.toString().toLowerCase()
      .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost(prev => {
      const newPost = { ...prev, [name]: value };
      if (name === 'title' && !id && !prev.isStatic) {
        newPost.slug = generateSlug(value);
      }
      return newPost;
    });
  };

  const handleContentChange = (content: string) => {
    setPost(prev => ({ ...prev, content }));
  };

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!imgbbKey) {
      alert("Vui lòng cấu hình ImgBB API Key trong phần Cài đặt trước khi upload ảnh.");
      return;
    }

    try {
      // Hiển thị loading (có thể set thêm state uploadingThumbnail)
      const compressed = await compressImage(file, { maxWidth: 800, maxHeight: 600, quality: 0.8 });
      const url = await uploadToImgBB(compressed, imgbbKey);
      setPost(prev => ({ ...prev, imageUrl: url }));
    } catch (error) {
      console.error("Lỗi upload thumbnail:", error);
      alert("Lỗi khi tải ảnh lên. Vui lòng thử lại.");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post.title || !post.slug) {
      alert("Vui lòng nhập Tiêu đề và Slug");
      return;
    }

    setSaving(true);
    try {
      const postData = {
        ...post,
        updatedAt: serverTimestamp(),
      };

      if (!id) {
        postData.createdAt = serverTimestamp();
      }

      // Xử lý bài tĩnh thành bài động khi lưu
      const saveId = id && !id.startsWith('static-') ? id : post.slug; 

      if (id && !id.startsWith('static-')) {
        await setDoc(doc(db, 'posts', id), postData, { merge: true });
      } else {
        await setDoc(doc(db, 'posts', saveId as string), postData);
      }

      setHasUnsavedChanges(false);
      initialPostRef.current = JSON.stringify({ ...postData, updatedAt: null });

      // Auto Share Facebook
      if (post.status === 'published' && post.autoShareFacebook && fbSettings.pageId && fbSettings.pageToken) {
        const link = `${window.location.origin}/blog?post=${post.slug}`;
        await shareToFacebook({
          pageId: fbSettings.pageId,
          pageToken: fbSettings.pageToken,
          message: post.excerpt || post.title || '',
          link,
        });
      }

      alert("Lưu bài viết thành công!");
      router.push('/admin/posts');
    } catch (error) {
      console.error("Lỗi lưu bài viết:", error);
      alert("Có lỗi xảy ra khi lưu bài viết.");
    } finally {
      setSaving(false);
    }
  };

  // Cấu hình Toolbar cho ReactQuill
  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  };

  function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file && imgbbKey) {
        try {
          const compressed = await compressImage(file, { maxWidth: 1200, maxHeight: 800, quality: 0.8 });
          const url = await uploadToImgBB(compressed, imgbbKey);
          
          if (quillRef.current) {
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, 'image', url);
            quill.setSelection(range.index + 1);
          }
        } catch (error) {
          console.error("Lỗi chèn ảnh vào bài:", error);
          alert("Lỗi khi chèn ảnh.");
        }
      } else if (!imgbbKey) {
        alert("Chưa cấu hình ImgBB API Key");
      }
    };
  }

  if (loading) {
    return (
      <div className="flex justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto pb-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {id ? 'Chỉnh sửa bài viết' : 'Viết bài mới'}
          </h1>
        </div>
        
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center space-x-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          <span>Lưu bài viết</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cột trái: Nội dung chính */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tiêu đề bài viết</label>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg font-semibold"
                placeholder="Nhập tiêu đề..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Đường dẫn (Slug)</label>
              <input
                type="text"
                name="slug"
                value={post.slug}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mô tả ngắn (Excerpt)</label>
              <textarea
                name="excerpt"
                value={post.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Tóm tắt ngắn gọn nội dung..."
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Nội dung bài viết</label>
            <div className="prose-editor text-gray-900 dark:text-white">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={post.content || ''}
                onChange={handleContentChange}
                modules={modules}
                className="h-[400px] pb-12"
              />
            </div>
          </div>
        </div>

        {/* Cột phải: Cài đặt bài viết */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Xuất bản</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Trạng thái</label>
              <select
                name="status"
                value={post.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="draft">Bản nháp</option>
                <option value="published">Đã xuất bản</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ngày đăng</label>
              <input
                type="date"
                name="date"
                value={post.date?.includes('/') 
                  ? post.date.split('/').reverse().join('-') 
                  : (post.date || new Date().toISOString().split('T')[0])}
                onChange={(e) => {
                  // Giữ nguyên format YYYY-MM-DD cho input date, UI client sẽ tự format
                  setPost(prev => ({ ...prev, date: e.target.value }));
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={post.autoShareFacebook}
                  onChange={(e) => setPost(prev => ({ ...prev, autoShareFacebook: e.target.checked }))}
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tự động Share lên Facebook khi đăng</span>
              </label>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Phân loại</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Chuyên mục</label>
              <input
                type="text"
                name="category"
                value={post.category || ''}
                onChange={handleChange}
                placeholder="Ví dụ: SEO, Thuốc Nam..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tác giả</label>
              <input
                type="text"
                name="author"
                value={post.author || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Ảnh đại diện</h3>
            
            {post.imageUrl ? (
              <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <img src={post.imageUrl} alt="Thumbnail" className="w-full h-40 object-cover" />
                <button
                  onClick={() => setPost(prev => ({ ...prev, imageUrl: '' }))}
                  className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  X
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center">Click để tải ảnh lên (Hỗ trợ nén Canvas)</span>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleThumbnailUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
