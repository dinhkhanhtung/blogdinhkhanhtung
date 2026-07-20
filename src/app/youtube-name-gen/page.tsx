"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Video, UploadCloud, Copy } from "lucide-react";

export default function YoutubeNameGenPage() {
  return (
    <GenericToolLayout
      title="YouTube Name Gen"
      description="Tạo ý tưởng tên kênh YouTube độc đáo và thu hút."
      icon={<Video className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key"
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto w-full py-8">
          <h2 className="text-3xl font-black text-slate-800">Tạo Tên Kênh YouTube Viral</h2>
          <div className="flex flex-col gap-4 text-left">
            <input type="text" placeholder="Chủ đề kênh của bạn? (vd: Nấu ăn, Du lịch bụi, Review công nghệ)" className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-red-500 text-slate-700 text-lg shadow-sm" />
            <input type="text" placeholder="Có bao gồm từ khóa nào không? (tùy chọn)" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 text-slate-700" />
            
            <button className="w-full py-4 mt-2 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 transition-colors shadow-lg text-lg">TẠO 10 Ý TƯỞNG TÊN KÊNH</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-slate-400 font-medium border-dashed">
                 <span>Ý tưởng tên kênh #{i}</span>
                 <Copy className="w-4 h-4 cursor-pointer hover:text-slate-600" />
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
