"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Calendar, UploadCloud, Copy } from "lucide-react";

export default function CronGeneratorPage() {
  return (
    <GenericToolLayout
      title="Cron Generator"
      description="Tạo và giải thích biểu thức Cron dễ dàng."
      icon={<Calendar className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-8">
           <div className="bg-slate-800 text-white p-8 rounded-2xl flex flex-col items-center text-center">
             <div className="text-4xl md:text-6xl font-black font-mono text-emerald-400 mb-4 tracking-widest">* * * * *</div>
             <p className="text-lg text-slate-300 font-semibold">Chạy vào mọi phút, mọi giờ, mọi ngày.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Phút (Minute)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Giờ (Hour)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Ngày (Day of Month)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Tháng (Month)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Thứ (Day of Week)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
           </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
