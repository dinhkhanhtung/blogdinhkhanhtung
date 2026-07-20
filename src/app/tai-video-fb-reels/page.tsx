"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Video, UploadCloud, Copy } from "lucide-react";

export default function TaiVideoFbReelsPage() {
  return (
    <GenericToolLayout
      title="Tải Video FB/Reels"
      description="Tải video từ Facebook và Facebook Reels về máy."
      icon={<Video className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12 gap-6">
          <div className="w-full relative">
            <input type="text" placeholder="Dán link video Facebook hoặc Reels vào đây..." className="w-full p-4 pr-32 border-2 border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700 text-lg shadow-sm" />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">Tải Về</button>
          </div>
          <p className="text-sm text-slate-500 font-medium">Hỗ trợ tải video Facebook chất lượng SD, HD, FullHD nhanh chóng miễn phí.</p>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
