"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Send, UploadCloud, Copy } from "lucide-react";

export default function GuiIndexBingPage() {
  return (
    <GenericToolLayout
      title="Gửi Index Bing"
      description="Tự động gửi URL lên Bing Webmaster Tools để index nhanh chóng."
      icon={<Send className="w-5 h-5" />}
      requiresApi={true}
      apiName="Bing API Key"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Danh sách URL (Mỗi dòng 1 URL)</label>
            <textarea placeholder="https://example.com/bai-viet-1\nhttps://example.com/bai-viet-2" className="w-full min-h-[200px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Gửi URL Lên Bing</button>
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-semibold text-slate-700 mb-2">Trạng thái (Log)</h4>
            <div className="text-sm text-slate-500 font-mono">Đang chờ lệnh...</div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
