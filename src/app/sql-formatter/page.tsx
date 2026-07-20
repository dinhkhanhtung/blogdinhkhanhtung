"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Database, UploadCloud, Copy } from "lucide-react";

export default function SqlFormatterPage() {
  return (
    <GenericToolLayout
      title="SQL Formatter"
      description="Làm đẹp và định dạng mã SQL dễ đọc hơn."
      icon={<Database className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <select className="p-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white">
              <option>Chuẩn SQL</option><option>MySQL</option><option>PostgreSQL</option><option>Transact-SQL</option>
            </select>
            <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors">Format Code</button>
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">Xóa</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px]">
            <textarea placeholder="Nhập câu lệnh SQL chưa định dạng..." className="w-full h-full p-4 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 resize-none"></textarea>
            <textarea readOnly placeholder="Kết quả SQL đã format..." className="w-full h-full p-4 font-mono text-sm bg-slate-800 text-emerald-400 border border-slate-700 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
