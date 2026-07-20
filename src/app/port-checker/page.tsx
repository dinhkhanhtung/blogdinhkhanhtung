"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Terminal, UploadCloud, Copy } from "lucide-react";

export default function PortCheckerPage() {
  return (
    <GenericToolLayout
      title="Port Checker"
      description="Kiểm tra trạng thái các port trên máy chủ."
      icon={<Terminal className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <label className="text-sm font-semibold text-slate-700">Tên miền hoặc Địa chỉ IP</label>
            <input type="text" placeholder="Ví dụ: google.com hoặc 8.8.8.8" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700" />
          </div>
          <div className="w-full md:w-48 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Cổng (Port)</label>
            <input type="text" placeholder="Ví dụ: 80, 443, 22" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700" />
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Kiểm Tra</button>
        </div>
        <div className="mt-8 bg-slate-800 rounded-xl p-6 h-64 text-emerald-400 font-mono text-sm flex items-center justify-center">
           {" > _ Sẵn sàng kiểm tra kết nối mạng..."}
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
