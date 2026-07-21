"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Lock, UploadCloud, Copy } from "lucide-react";

export default function SecurityHeadersPage() {
  return (
    <GenericToolLayout
      title="Security Headers"
      description="Kiểm tra các HTTP Security Headers của website."
      icon={<Lock className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <input type="url" placeholder="https://dinhkhanhtung.com" className="flex-1 p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 shadow-sm font-medium" />
            <button className="px-8 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">Quét Headers</button>
          </div>
          
          <div className="border border-slate-200 rounded-xl overflow-hidden text-sm">
            <div className="bg-slate-50 p-3 font-bold text-slate-700 border-b flex justify-between">
              <span>Security Header</span>
              <span>Trạng thái</span>
            </div>
            <div className="p-10 text-center text-slate-400 font-medium">
               Chưa có dữ liệu quét.
            </div>
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
