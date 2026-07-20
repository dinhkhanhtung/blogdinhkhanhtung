"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Tag, UploadCloud, Copy } from "lucide-react";

export default function MetadataGeotagPage() {
  return (
    <GenericToolLayout
      title="Metadata & Geotag"
      description="Chỉnh sửa EXIF data và gắn thẻ địa lý (Geotag) cho hình ảnh."
      icon={<Tag className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4 border-r border-slate-200 pr-0 lg:pr-6">
            <div className="w-full h-64 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-slate-50 text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors">
              <UploadCloud className="w-10 h-10 mb-2 text-slate-400" />
              <p className="font-semibold text-slate-600">Nhấn để tải ảnh lên</p>
              <p className="text-xs">Hoặc kéo thả file ảnh vào đây</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Vĩ độ (Latitude)</label>
                <input type="text" placeholder="Ví dụ: 21.028511" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Kinh độ (Longitude)</label>
                <input type="text" placeholder="Ví dụ: 105.804817" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tác giả (Author)</label>
              <input type="text" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
            </div>
            <button className="w-full py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Cập nhật EXIF & Tải về</button>
          </div>
          
          <div className="flex-1 flex flex-col bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-4">Dữ liệu EXIF Hiện tại</h4>
            <div className="text-sm text-slate-500 text-center py-10">Vui lòng tải ảnh lên để đọc dữ liệu.</div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
