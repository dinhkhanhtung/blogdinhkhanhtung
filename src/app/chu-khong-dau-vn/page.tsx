"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { Type, Copy, Trash2, ArrowDown } from "lucide-react";

export default function ChuKhongDauVnPage() {
  const [inputText, setInputText] = useState("");
  
  const removeAccents = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  const outputText = removeAccents(inputText);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    // You could add a toast notification here
  };

  return (
    <GenericToolLayout
      title="Chữ không dấu VN"
      description="Chuyển đổi văn bản tiếng Việt có dấu thành không dấu nhanh chóng, phục vụ cho việc tạo URL, viết code hoặc tương thích hệ thống cũ."
      icon={<Type className="w-5 h-5" />}
      requiresApi={false}
    >
      <div className="p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700">Văn bản gốc (có dấu)</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhập đoạn văn bản tiếng Việt có dấu vào đây..."
            className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-y text-slate-700"
          />
        </div>

        <div className="flex justify-center -my-2 relative z-10">
          <div className="bg-emerald-50 text-emerald-600 p-2 rounded-full border border-emerald-100">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">Văn bản kết quả (không dấu)</label>
            <div className="flex gap-2">
              <button 
                onClick={() => setInputText("")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Xóa
              </button>
              <button 
                onClick={handleCopy}
                disabled={!outputText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Copy className="w-3.5 h-3.5" />
                Sao chép
              </button>
            </div>
          </div>
          <textarea
            value={outputText}
            readOnly
            placeholder="Kết quả sẽ hiển thị ở đây..."
            className="w-full min-h-[150px] p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none resize-y text-slate-700"
          />
        </div>
      </div>
    </GenericToolLayout>
  );
}
