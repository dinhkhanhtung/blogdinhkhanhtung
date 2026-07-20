"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Download, UploadCloud, Copy } from "lucide-react";

export default function TaiVideoTiktokPage() {
  return (
    <GenericToolLayout
      title="Tải Video TikTok"
      description="Tải video TikTok không logo, không watermark chất lượng cao."
      icon={<Download className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12 gap-6">
          <div className="w-full relative">
            <input type="text" placeholder="Dán đường dẫn (link) video TikTok vào đây..." className="w-full p-4 pr-32 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-slate-700 text-lg shadow-sm" />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-[#15803d] text-white font-bold rounded-full hover:bg-emerald-700 transition-colors">Tải Về</button>
          </div>
          <p className="text-sm text-slate-500 font-medium">Hỗ trợ tải video định dạng MP4 HD, không dính logo watermark và tải file âm thanh MP3.</p>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
