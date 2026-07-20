"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Activity, UploadCloud, Copy } from "lucide-react";

export default function KeywordCannibalizationPage() {
  return (
    <GenericToolLayout
      title="Keyword Cannibalization"
      description="Kiểm tra và phát hiện hiện tượng ăn thịt từ khóa trên website."
      icon={<Activity className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl text-sm">
            Nhập sitemap hoặc danh sách URL của bạn. Công cụ sẽ quét và tìm kiếm các trang web có nội dung hoặc mục tiêu từ khóa quá giống nhau, dẫn đến hiện tượng ăn thịt từ khóa (Keyword Cannibalization).
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Sitemap URL hoặc Danh sách URL</label>
            <textarea placeholder="https://example.com/sitemap_index.xml" className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Bắt Đầu Phân Tích</button>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
