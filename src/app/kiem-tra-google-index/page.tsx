"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { CheckCircle2, UploadCloud, Copy } from "lucide-react";

export default function KiemTraGoogleIndexPage() {
  return (
    <GenericToolLayout
      title="Kiểm tra Google Index"
      description="Kiểm tra hàng loạt URL xem đã được Google index chưa."
      icon={<CheckCircle2 className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nhập danh sách URL cần kiểm tra</label>
            <textarea placeholder="https://example.com/" className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Bắt Đầu Kiểm Tra</button>
          
          <div className="overflow-x-auto mt-4 border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-3 border-b text-sm font-semibold text-slate-700">URL</th>
                  <th className="p-3 border-b text-sm font-semibold text-slate-700 w-32">Trạng thái</th>
                  <th className="p-3 border-b text-sm font-semibold text-slate-700 w-32">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500 text-sm">Chưa có dữ liệu. Vui lòng bắt đầu kiểm tra.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
