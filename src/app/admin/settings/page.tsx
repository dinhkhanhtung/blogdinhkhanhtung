"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Settings, Shield, Bell, Check, ArrowLeft, ToggleLeft, ToggleRight } from "lucide-react";

export default function AdminSettingsPage() {
  const [fakePopupEnabled, setFakePopupEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem("fake_popup_enabled");
    if (val === "false") {
      setFakePopupEnabled(false);
    }
  }, []);

  const handleToggle = () => {
    const nextVal = !fakePopupEnabled;
    setFakePopupEnabled(nextVal);
    localStorage.setItem("fake_popup_enabled", nextVal ? "true" : "false");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Back Link */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#15803d]">
            <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#15803d]/10 text-[#15803d] flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Quản Trị Bảng Điều Khiển</h1>
              <p className="text-xs text-slate-500">Cấu hình cài đặt hệ thống blog Đinh Khánh Tùng</p>
            </div>
          </div>
          {saved && (
            <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg text-xs font-bold animate-in fade-in">
              <Check className="w-4 h-4" /> Đã lưu cài đặt!
            </div>
          )}
        </div>

        {/* Setting Items */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#15803d]" /> Tương Tác & Pop-up Seeding
          </h2>

          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">Bật / Tắt Pop-up Thông Báo Seeding Giả</h3>
              <p className="text-xs text-slate-500 max-w-md">
                Khi bật, hệ thống sẽ tự động hiển thị các thông báo seeding nhỏ gọn ở góc màn hình (Thái Nguyên, Hà Nội...) để tăng độ sôi động cho website.
              </p>
            </div>
            <button
              onClick={handleToggle}
              className={`p-2 rounded-xl transition-colors ${
                fakePopupEnabled ? "text-[#15803d]" : "text-slate-400"
              }`}
            >
              {fakePopupEnabled ? (
                <ToggleRight className="w-10 h-10" />
              ) : (
                <ToggleLeft className="w-10 h-10" />
              )}
            </button>
          </div>

          <div className="text-xs text-slate-400 pt-2 border-t border-slate-100">
            * Cài đặt này được lưu trên trình duyệt cá nhân và cấu hình môi trường. Bạn có thể bật/tắt bất cứ lúc nào.
          </div>
        </div>

      </div>
    </div>
  );
}
