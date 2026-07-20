"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { HelpCircle, UploadCloud, Copy } from "lucide-react";

export default function FaqGeneratorPage() {
  return (
    <GenericToolLayout
      title="FAQ Generator"
      description="Tạo bộ câu hỏi thường gặp (FAQ) tự động cho bài viết."
      icon={<HelpCircle className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nội dung bài viết / Mô tả sản phẩm</label>
            <textarea placeholder="Dán nội dung bài viết của bạn vào đây, AI sẽ đọc và tự sinh ra các câu hỏi người dùng hay thắc mắc..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 resize-y"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Tự động sinh FAQ</button>
          <div className="mt-4 border border-slate-200 rounded-xl p-6 bg-slate-50 min-h-[200px] flex items-center justify-center text-slate-400 font-medium">
             Danh sách câu hỏi và câu trả lời sẽ xuất hiện tại đây
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
