"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Share2, UploadCloud, Copy } from "lucide-react";

export default function VietBaiMxhPage() {
  return (
    <GenericToolLayout
      title="Viết bài MXH"
      description="Tạo nội dung hấp dẫn cho các nền tảng mạng xã hội."
      icon={<Share2 className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Chủ đề bài đăng</label>
            <input type="text" placeholder="Khuyến mãi 50% dịp lễ..." className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nền tảng mạng xã hội</label>
            <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700">
              <option>Facebook Post</option><option>Instagram Caption</option><option>LinkedIn Article</option><option>X (Twitter) Thread</option>
            </select>
          </div>
          <button className="px-6 py-3 bg-[#15803d] hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors self-start">Tạo Bài Viết MXH</button>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Kết quả</label>
            <textarea readOnly placeholder="Bài viết MXH của bạn sẽ hiển thị ở đây..." className="w-full min-h-[200px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
