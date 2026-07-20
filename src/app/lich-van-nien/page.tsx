"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { CalendarDays, UploadCloud, Copy } from "lucide-react";

export default function LichVanNienPage() {
  return (
    <GenericToolLayout
      title="Lịch vạn niên"
      description="Xem lịch âm dương, ngày tốt xấu, giờ hoàng đạo."
      icon={<CalendarDays className="w-5 h-5" />}
      requiresApi={false}
      
    >
      <div className="p-6 md:p-8">
        
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 min-h-[500px]">
           <CalendarDays className="w-20 h-20 text-red-300 mb-4" />
           <h2 className="text-2xl font-bold text-red-800 mb-2">Module Lịch Vạn Niên Đang Tích Hợp</h2>
           <p className="text-red-600/80 text-center max-w-md">Chức năng tính toán lịch âm dương phức tạp đang được xây dựng. Vui lòng quay lại sau.</p>
        </div>
    
      </div>
    </GenericToolLayout>
  );
}
