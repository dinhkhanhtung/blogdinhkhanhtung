"use client";

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Loader2, Save } from 'lucide-react';
import { APIKeysSettings } from '@/types/blog';

export default function AdminSettings() {
  const [settings, setSettings] = useState<APIKeysSettings>({
    imgbbApiKey: '',
    facebookPageId: '',
    facebookPageToken: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'api_keys');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSettings(docSnap.data() as APIKeysSettings);
        }
      } catch (error) {
        console.error("Lỗi lấy cấu hình:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      await setDoc(doc(db, 'settings', 'api_keys'), settings);
      setMessage({ type: 'success', text: 'Đã lưu cấu hình thành công!' });
    } catch (error: any) {
      console.error("Lỗi lưu cấu hình:", error);
      setMessage({ type: 'error', text: error.message || 'Có lỗi xảy ra khi lưu' });
    } finally {
      setSaving(false);
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
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Cấu hình API</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Quản lý các khóa API bên thứ ba sử dụng trong hệ thống
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">ImgBB (Lưu trữ hình ảnh)</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              API Key
            </label>
            <input
              type="text"
              name="imgbbApiKey"
              value={settings.imgbbApiKey || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Nhập ImgBB API Key"
            />
            <p className="mt-1 text-sm text-gray-500">
              Lấy tại: <a href="https://api.imgbb.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">api.imgbb.com</a>
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Facebook Auto Share</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Page ID
              </label>
              <input
                type="text"
                name="facebookPageId"
                value={settings.facebookPageId || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Nhập ID của Fanpage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Page Access Token (Never Expires)
              </label>
              <input
                type="text"
                name="facebookPageToken"
                value={settings.facebookPageToken || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Nhập Token truy cập trang"
              />
            </div>
          </div>
        </div>

        {message.text && (
          <div className={`p-4 rounded-lg text-sm font-medium ${
            message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center space-x-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            <span>Lưu cấu hình</span>
          </button>
        </div>
      </form>
    </div>
  );
}
