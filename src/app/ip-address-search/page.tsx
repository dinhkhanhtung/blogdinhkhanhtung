"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Compass, UploadCloud, Copy } from "lucide-react";

export default function IpAddressSearchPage() {
  return (
    <GenericToolLayout
      title="IP Address Search"
      description="Tra cứu thông tin chi tiết về địa chỉ IP."
      icon={<Compass className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <input type="text" placeholder="Nhập địa chỉ IPv4 hoặc IPv6..." className="flex-1 p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700 font-semibold text-lg shadow-sm" />
            <button className="px-8 py-4 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">Tra Cứu</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Quốc gia</p>
               <p className="text-lg font-semibold text-slate-800">--</p>
             </div>
             <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Thành phố</p>
               <p className="text-lg font-semibold text-slate-800">--</p>
             </div>
             <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Nhà mạng (ISP)</p>
               <p className="text-lg font-semibold text-slate-800">--</p>
             </div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
