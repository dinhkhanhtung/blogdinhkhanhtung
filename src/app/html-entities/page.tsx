"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Globe, UploadCloud, Copy } from "lucide-react";

export default function HtmlEntitiesPage() {
  return (
    <GenericToolLayout
      title="HTML Entities"
      description="Chuyển đổi các ký tự đặc biệt thành HTML entities và ngược lại."
      icon={<Globe className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 mb-2">
            <button className="px-6 py-2.5 bg-[#15803d] text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">Mã Hóa (Encode)</button>
            <button className="px-6 py-2.5 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors">Giải Mã (Decode)</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px]">
            <textarea placeholder="Nhập văn bản vào đây..." className="w-full h-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 resize-none"></textarea>
            <textarea readOnly placeholder="Kết quả HTML entities..." className="w-full h-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
