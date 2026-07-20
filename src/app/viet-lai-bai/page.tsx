"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { RefreshCw, UploadCloud, Copy } from "lucide-react";

export default function VietLaiBaiPage() {
  return (
    <GenericToolLayout
      title="Viết Lại Bài"
      description="Viết lại nội dung bài viết giữ nguyên ý nghĩa nhưng cấu trúc hoàn toàn mới."
      icon={<RefreshCw className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nội dung gốc</label>
            <textarea placeholder="Dán nội dung cần viết lại (spin content)..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors self-start">Tiến hành Viết Lại</button>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Kết quả</label>
            <textarea readOnly placeholder="Nội dung mới sẽ xuất hiện ở đây..." className="w-full min-h-[150px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
