"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { ArrowLeftRight, UploadCloud, Copy } from "lucide-react";

export default function Ipv4ToIpv6Page() {
  return (
    <GenericToolLayout
      title="IPv4 to IPv6"
      description="Chuyển đổi địa chỉ IPv4 sang định dạng IPv6."
      icon={<ArrowLeftRight className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-8 gap-8">
          <div className="w-full flex flex-col gap-2 text-left">
            <label className="text-sm font-semibold text-slate-700 ml-1">Địa chỉ IPv4</label>
            <input type="text" placeholder="Ví dụ: 192.168.1.1" className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700 font-mono text-lg text-center" />
          </div>
          
          <button className="p-4 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors shadow-sm">
            <ArrowLeftRight className="w-6 h-6 rotate-90" />
          </button>
          
          <div className="w-full flex flex-col gap-2 text-left">
             <label className="text-sm font-semibold text-slate-700 ml-1">Địa chỉ IPv6 (Mapped)</label>
             <input readOnly type="text" placeholder="0:0:0:0:0:ffff:c0a8:0101" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-700 font-mono text-lg text-center" />
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
