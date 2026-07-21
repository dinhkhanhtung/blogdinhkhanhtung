"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { QrCode, UploadCloud, Copy } from "lucide-react";

export default function QrCodePage() {
  return (
    <GenericToolLayout
      title="QR Code Generator"
      description="Tạo mã QR code tùy chỉnh cho URL, văn bản, số điện thoại..."
      icon={<QrCode className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-1 w-full flex flex-col gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Dữ liệu mã hóa (URL, Số điện thoại, Văn bản...)</label>
                <textarea placeholder="https://dinhkhanhtung.com" className="w-full min-h-[100px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Màu sắc QR</label>
                <div className="flex gap-3">
                   <input type="color" defaultValue="#000000" className="w-12 h-12 rounded cursor-pointer border-0 p-0" />
                   <div className="flex-1 flex items-center px-3 border border-slate-200 rounded-xl text-sm font-mono bg-slate-50 text-slate-600">#000000</div>
                </div>
             </div>
             <button className="w-full py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors mt-2">Cập nhật QR Code</button>
          </div>
          
          <div className="w-64 h-64 border border-slate-200 rounded-2xl bg-slate-50 flex flex-col items-center justify-center shrink-0 p-6 gap-4">
             <QrCode className="w-full h-full text-slate-300" />
             <button className="px-4 py-2 w-full bg-slate-800 text-white font-semibold rounded-lg text-sm hover:bg-slate-700 transition-colors">Tải xuống (PNG)</button>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
