"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Hash, AlignLeft, BookOpen, Clock, Type } from "lucide-react";

export default function WordCounterProPage() {
  const [text, setText] = useState("");

  // Logic đếm
  const charCount = text.length;
  const charNoSpacesCount = text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const paragraphCount = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;
  
  // Thời gian đọc (trung bình 200 từ/phút)
  const readingTime = Math.ceil(wordCount / 200);

  const stats = [
    { label: "Số từ", value: wordCount, icon: <Type className="w-4 h-4" /> },
    { label: "Ký tự", value: charCount, icon: <Hash className="w-4 h-4" /> },
    { label: "Ký tự (không khoảng trắng)", value: charNoSpacesCount, icon: <AlignLeft className="w-4 h-4" /> },
    { label: "Đoạn văn", value: paragraphCount, icon: <BookOpen className="w-4 h-4" /> },
    { label: "Thời gian đọc", value: `~${readingTime} phút`, icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <GenericToolLayout
      title="Word Counter Pro"
      description="Đếm số từ, số ký tự, đoạn văn và ước tính thời gian đọc văn bản chuyên sâu."
      icon={<Hash className="w-5 h-5" />}
      requiresApi={false}
    >
      <div className="p-6 md:p-8 flex flex-col gap-6">
        {/* Bảng thống kê */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2">
              <div className="text-emerald-600 bg-emerald-100 p-2 rounded-full">
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-slate-800">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Khung nhập liệu */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">Nội dung văn bản</label>
            <button 
              onClick={() => setText("")}
              className="text-xs font-medium text-slate-500 hover:text-red-600 transition-colors"
            >
              Xóa văn bản
            </button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập hoặc dán văn bản của bạn vào đây để đếm..."
            className="w-full min-h-[300px] p-5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-y text-slate-700 leading-relaxed"
          />
        </div>
      </div>
    </GenericToolLayout>
  );
}
