"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { ImageIcon, UploadCloud, Copy } from "lucide-react";

export default function TaoAnhAiPage() {
  return (
    <GenericToolLayout
      title="Tạo Ảnh AI"
      description="Tạo hình ảnh độc đáo bằng AI từ văn bản mô tả."
      icon={<ImageIcon className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key (DALL-E)"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Mô tả bức ảnh (Prompt)</label>
              <textarea placeholder="Ví dụ: Một con mèo mặc đồ phi hành gia đang đi trên sao hỏa, phong cách cyberpunk..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 resize-y"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Kích thước</label>
                <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none text-slate-700">
                  <option>1024x1024 (Vuông)</option><option>1792x1024 (Ngang)</option><option>1024x1792 (Dọc)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Phong cách</label>
                <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none text-slate-700">
                  <option>Vivid (Sống động)</option><option>Natural (Tự nhiên)</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-[#15803d] text-white font-bold rounded-xl hover:from-emerald-500 hover:to-emerald-700 transition-colors shadow-md">Tạo Ảnh Ngay</button>
          </div>
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center min-h-[400px]">
             <div className="text-slate-400 text-sm flex flex-col items-center">
                <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                Kết quả hình ảnh sẽ hiển thị tại đây
             </div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
