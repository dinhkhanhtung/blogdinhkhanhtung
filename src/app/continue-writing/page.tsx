"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { PenTool, UploadCloud, Copy } from "lucide-react";

export default function ContinueWritingPage() {
  return (
    <GenericToolLayout
      title="Continue Writing AI"
      description="AI tự động viết tiếp đoạn văn bản đang viết dở của bạn."
      icon={<PenTool className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Đoạn văn đang viết dở (Ngữ cảnh)</label>
            <textarea placeholder="Ngày xửa ngày xưa, ở một ngôi làng nọ..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 resize-y"></textarea>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 w-full sm:w-auto">
              <select className="p-3 border border-slate-200 rounded-xl focus:outline-none bg-white text-sm">
                <option>Viết thêm 1 đoạn ngắn</option>
                <option>Viết thêm 3 đoạn chi tiết</option>
                <option>Kết luận bài viết</option>
              </select>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-[#15803d] text-white font-bold rounded-xl hover:from-emerald-500 hover:to-emerald-700 transition-colors shadow-md">Tự Động Viết Tiếp</button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-semibold text-slate-700">Kết quả</label>
            <textarea readOnly className="w-full min-h-[250px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
