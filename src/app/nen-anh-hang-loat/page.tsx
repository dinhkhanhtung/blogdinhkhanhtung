"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Minimize2, UploadCloud, Copy } from "lucide-react";

export default function NenAnhHangLoatPage() {
  return (
    <GenericToolLayout
      title="Nén Ảnh Hàng Loạt"
      description="Nén giảm dung lượng hình ảnh hàng loạt không làm giảm chất lượng."
      icon={<Minimize2 className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-6 text-center py-10">
          <div className="mx-auto w-full max-w-2xl h-64 border-2 border-dashed border-emerald-300 rounded-2xl flex flex-col items-center justify-center bg-emerald-50 text-emerald-600 cursor-pointer hover:bg-emerald-100 transition-colors">
             <UploadCloud className="w-12 h-12 mb-3" />
             <p className="font-bold text-lg">Kéo thả các file ảnh vào đây</p>
             <p className="text-sm mt-1 text-emerald-500">Hỗ trợ JPG, PNG, WEBP (Tối đa 20 file cùng lúc)</p>
          </div>
          <div className="flex justify-center gap-6 mt-4">
             <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold text-sm">
               <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
               Tự động chuyển đổi sang WebP
             </label>
             <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold text-sm">
               Chất lượng:
               <input type="range" min="1" max="100" defaultValue="80" className="w-32 accent-emerald-600" />
               <span>80%</span>
             </label>
          </div>
          <button className="mx-auto px-8 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Bắt Đầu Nén</button>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
