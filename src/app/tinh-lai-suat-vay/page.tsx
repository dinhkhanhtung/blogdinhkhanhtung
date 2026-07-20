"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Percent, UploadCloud, Copy } from "lucide-react";

export default function TinhLaiSuatVayPage() {
  return (
    <GenericToolLayout
      title="Tính lãi suất vay"
      description="Công cụ tính lãi suất vay ngân hàng trả góp hàng tháng."
      icon={<Percent className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 border-b pb-2">Thông số khoản vay</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Số tiền vay (VNĐ)</label>
              <div className="relative">
                <input type="number" placeholder="Ví dụ: 100000000" className="w-full p-3 pr-16 border border-slate-200 rounded-xl text-slate-700 font-bold" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">VNĐ</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Thời gian vay (Tháng)</label>
              <div className="relative">
                <input type="number" placeholder="Ví dụ: 12" className="w-full p-3 pr-20 border border-slate-200 rounded-xl text-slate-700 font-bold" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">Tháng</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Lãi suất (%/năm)</label>
              <div className="relative">
                <input type="number" step="0.1" placeholder="Ví dụ: 8.5" className="w-full p-3 pr-16 border border-slate-200 rounded-xl text-slate-700 font-bold" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Phương pháp tính</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl text-slate-700">
                <option>Dư nợ giảm dần</option>
                <option>Dư nợ gốc (Cố định)</option>
              </select>
            </div>
            <button className="w-full py-4 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md mt-2">Tính Toán Trả Nợ</button>
          </div>
          
          <div className="flex-[1.5] flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">Tổng lãi phải trả</p>
                <p className="text-2xl font-black text-emerald-700">0 ₫</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-semibold text-slate-500 mb-1 uppercase">Tổng số tiền gốc + lãi</p>
                <p className="text-2xl font-black text-slate-800">0 ₫</p>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-3">Lịch trả nợ chi tiết</h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden flex-1 flex items-center justify-center bg-slate-50 min-h-[300px]">
               <span className="text-slate-400 text-sm font-medium">Nhập thông tin và bấm tính toán để xem bảng</span>
            </div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
