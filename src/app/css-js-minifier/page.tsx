"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Zap, UploadCloud, Copy } from "lucide-react";

export default function CssJsMinifierPage() {
  return (
    <GenericToolLayout
      title="CSS/JS Minifier"
      description="Nén và tối ưu hóa mã CSS, JavaScript giảm dung lượng."
      icon={<Zap className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <select className="p-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white">
              <option>JavaScript</option><option>CSS</option>
            </select>
            <button className="px-4 py-2 bg-[#15803d] text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors">Nén Code (Minify)</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[400px]">
            <textarea placeholder="Dán mã nguồn cần nén vào đây..." className="w-full h-full p-4 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 resize-none"></textarea>
            <textarea readOnly placeholder="Kết quả mã nguồn đã được nén..." className="w-full h-full p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
