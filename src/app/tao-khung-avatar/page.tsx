"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { User, UploadCloud, Copy } from "lucide-react";

export default function TaoKhungAvatarPage() {
  return (
    <GenericToolLayout
      title="Tạo khung avatar"
      description="Tạo khung ảnh đại diện (avatar) đẹp cho các mạng xã hội."
      icon={<User className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col items-center py-8 gap-8">
           <div className="w-64 h-64 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center bg-slate-50 text-slate-400 overflow-hidden relative group cursor-pointer hover:bg-slate-100 transition-colors">
              <div className="flex flex-col items-center gap-2">
                 <UploadCloud className="w-8 h-8" />
                 <span className="text-sm font-semibold">Tải ảnh đại diện</span>
              </div>
           </div>
           
           <div className="w-full max-w-xl flex flex-col gap-3">
              <label className="text-sm font-semibold text-slate-700 text-center">Chọn mẫu khung (Frame)</label>
              <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="w-20 h-20 rounded-full border-2 border-slate-200 bg-emerald-50 flex-shrink-0 flex items-center justify-center font-bold text-emerald-600 text-xs cursor-pointer hover:border-emerald-500">Mẫu #{i}</div>
                 ))}
              </div>
           </div>
           
           <button className="px-10 py-3 bg-[#15803d] text-white font-bold rounded-full hover:bg-emerald-700 transition-colors shadow-lg">Tải Xuống Avatar</button>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
