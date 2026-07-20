"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { TrendingUp, UploadCloud, Copy } from "lucide-react";

export default function KiemTraTuKhoaPage() {
  return (
    <GenericToolLayout
      title="Kiểm tra từ khóa"
      description="Theo dõi thứ hạng từ khóa của website trên Google Search."
      icon={<TrendingUp className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Từ khóa (Keyword)</label>
              <input type="text" placeholder="Ví dụ: công cụ seo ai" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tên miền (Domain)</label>
              <input type="text" placeholder="Ví dụ: congcuseoai.com" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Khu vực (Quốc gia)</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>Việt Nam (google.com.vn)</option>
                <option>Hoa Kỳ (google.com)</option>
              </select>
            </div>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Kiểm Tra Thứ Hạng</button>
          
          <div className="mt-8 p-10 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-4">
            <div className="text-6xl font-black text-slate-300">--</div>
            <p className="text-slate-500 font-semibold">Kết quả thứ hạng sẽ hiển thị tại đây</p>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
