"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Code2, UploadCloud, Copy } from "lucide-react";

export default function SchemaMarkupPage() {
  return (
    <GenericToolLayout
      title="Schema Markup"
      description="Tạo mã JSON-LD Schema Markup chuẩn SEO cho website của bạn."
      icon={<Code2 className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Loại Schema</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700">
                <option>Article (Bài viết)</option><option>FAQPage (Câu hỏi thường gặp)</option><option>Product (Sản phẩm)</option><option>LocalBusiness (Doanh nghiệp địa phương)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tiêu đề (Headline)</label>
              <input type="text" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">URL bài viết</label>
              <input type="url" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
            </div>
            <button className="w-full py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Tạo Code JSON-LD</button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Mã JSON-LD Kết quả</label>
            <textarea readOnly className="w-full h-full min-h-[300px] p-4 bg-slate-800 text-emerald-400 font-mono text-sm rounded-xl border border-slate-700 focus:outline-none resize-y"></textarea>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
