"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Search, UploadCloud, Copy } from "lucide-react";

export default function GuiIndexGooglePage() {
  return (
    <GenericToolLayout
      title="Gửi Index Google"
      description="Gửi URL lên Google Search Console thông qua Google Indexing API."
      icon={<Search className="w-5 h-5" />}
      requiresApi={true}
      apiName="Google Service Account JSON"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl text-sm">
            Để sử dụng chức năng này, bạn cần dán nội dung file JSON của Google Cloud Service Account vào phần cấu hình API bên trên. Đảm bảo email service account đã được thêm làm chủ sở hữu trong Google Search Console.
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Danh sách URL (Mỗi dòng 1 URL)</label>
            <textarea placeholder="https://example.com/page-1" className="w-full min-h-[200px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Gửi Lệnh UPDATE</button>
            <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">Gửi Lệnh DELETE</button>
          </div>
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-semibold text-slate-700 mb-2">Kết nối API</h4>
            <div className="text-sm text-slate-500 font-mono">Chưa khởi tạo...</div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
