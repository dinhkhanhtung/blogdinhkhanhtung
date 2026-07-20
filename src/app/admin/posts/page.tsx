"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { Plus, Edit2, Trash2, ExternalLink, Loader2, Filter } from 'lucide-react';
import { Post } from '@/types/blog';
import { SAMPLE_POSTS } from '@/lib/data';

export default function AdminPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const firestorePosts: Post[] = [];
      querySnapshot.forEach((doc) => {
        firestorePosts.push({ id: doc.id, ...doc.data() } as Post);
      });

      // Gộp bài viết tĩnh và loại bỏ trùng lặp slug
      const allPosts = [...firestorePosts];
      
      for (const staticPost of SAMPLE_POSTS) {
        if (!allPosts.find(p => p.slug === staticPost.slug)) {
          allPosts.push(staticPost as any);
        }
      }

      // Sắp xếp lại nếu cần (hiện tại đã sắp xếp firestore, bài tĩnh xếp sau)
      setPosts(allPosts);
    } catch (error) {
      console.error("Lỗi lấy danh sách bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (id.startsWith('static-')) {
      alert("Không thể xóa bài viết tĩnh. Bạn chỉ có thể sửa nội dung thay thế.");
      setDeleteId(null);
      return;
    }

    try {
      await deleteDoc(doc(db, 'posts', id));
      setPosts(posts.filter(p => p.id !== id));
      setDeleteId(null);
    } catch (error) {
      console.error("Lỗi xóa bài viết:", error);
      alert("Có lỗi xảy ra khi xóa bài viết");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quản lý bài viết</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Tổng số: {posts.length} bài viết</p>
        </div>
        
        <Link
          href="/admin/posts/editor"
          className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Viết bài mới</span>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Bài viết</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Chuyên mục</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Trạng thái</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Ngày đăng</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white line-clamp-1">{post.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">{post.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {post.category || post.categoryName}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {post.isStatic ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                        Bài viết mẫu
                      </span>
                    ) : post.status === 'published' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Đã xuất bản
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                        Bản nháp
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-3">
                      <a
                        href={`/blog?post=${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        title="Xem thực tế"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <Link
                        href={`/admin/posts/editor?id=${post.id}`}
                        className="text-gray-400 hover:text-primary transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit2 className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => setDeleteId(post.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Xóa"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                    Chưa có bài viết nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-sm w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Xác nhận xóa</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Bạn có chắc chắn muốn xóa bài viết này? Hành động này không thể hoàn tác.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Xóa bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
