"use client";

import React, { useState, useRef } from "react";
import { FileJson, Copy, Trash2, Check, RefreshCw, AlertCircle, Wand2, Minimize2 } from "lucide-react";

export default function JsonFormatterPage() {
  const [rawJson, setRawJson] = useState<string>(
    `{"ten":"Phòng Chẩn Trị YHCT Thu Bẩy","nguoi_dai_dien":"Đinh Khánh Tùng","so_dien_thoai":"0982581222","dia_chi":"Tổ 10, Quan Triều, Thái Nguyên","dich_vu":["Chẩn trị","Kê đơn bốc thuốc","Y học cổ truyền"],"he_thong":{"ten_ap":"SEO AI","phien_ban":"2.5.0","tinh_trang":"Hoạt động"}}`
  );
  const [formattedJson, setFormattedJson] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleFormat = () => {
    if (!rawJson.trim()) {
      setError(null);
      setFormattedJson("");
      return;
    }
    try {
      const parsed = JSON.parse(rawJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      setError(null);
      triggerToast("Định dạng dữ liệu JSON thành công!");
    } catch (err: any) {
      setError(err.message || "Cú pháp JSON không hợp lệ.");
      setFormattedJson("");
    }
  };

  const handleMinify = () => {
    if (!rawJson.trim()) {
      setError(null);
      setFormattedJson("");
      return;
    }
    try {
      const parsed = JSON.parse(rawJson);
      const minified = JSON.stringify(parsed);
      setFormattedJson(minified);
      setError(null);
      triggerToast("Đã rút gọn dữ liệu JSON!");
    } catch (err: any) {
      setError(err.message || "Cú pháp JSON không hợp lệ.");
      setFormattedJson("");
    }
  };

  const handleCopy = () => {
    if (!formattedJson) {
      triggerToast("Chưa có kết quả để sao chép!");
      return;
    }
    navigator.clipboard.writeText(formattedJson);
    triggerToast("Đã sao chép kết quả vào bộ nhớ tạm!");
  };

  const handleClear = () => {
    setRawJson("");
    setFormattedJson("");
    setError(null);
    triggerToast("Đã dọn dẹp trình soạn thảo!");
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 min-h-full flex flex-col">
      {/* Header */}
      <div className="shrink-0">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-wide">
          <FileJson className="w-3.5 h-3.5" />
          Tiện ích Lập trình
        </span>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight mt-2.5">
          JSON Formatter & Validator
        </h2>
        <p className="text-sm text-slate-500 font-semibold mt-1">
          Làm đẹp, định dạng, rút gọn và kiểm tra lỗi cú pháp dữ liệu JSON thời gian thực. Giúp lập trình viên dễ dàng theo dõi cấu trúc APIs.
        </p>
      </div>

      {/* Workspaces */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        
        {/* Input Pane */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm flex flex-col overflow-hidden h-[450px] lg:h-auto lg:min-h-[480px]">
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between shrink-0">
            <span className="text-sm font-bold text-slate-700">Nhập chuỗi JSON thô</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleFormat}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold rounded-lg transition-all"
              >
                <Wand2 className="w-3.5 h-3.5" />
                Format
              </button>
              <button
                onClick={handleMinify}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 active:scale-95 text-white text-xs font-bold rounded-lg transition-all"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                Minify
              </button>
              <button
                onClick={handleClear}
                className="p-1.5 hover:bg-red-50 hover:text-red-600 rounded-lg text-slate-400 transition-colors"
                title="Xóa toàn bộ"
              >
                <Trash2 className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 relative">
            <textarea
              ref={textareaRef}
              value={rawJson}
              onChange={(e) => setRawJson(e.target.value)}
              placeholder="Dán mã JSON của bạn tại đây để kiểm tra..."
              className="absolute inset-0 w-full h-full p-4 text-base font-mono text-slate-700 bg-transparent resize-none border-none outline-none focus:ring-0 focus:ring-offset-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-900/50"
            />
          </div>
        </div>

        {/* Output Pane */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm flex flex-col overflow-hidden h-[450px] lg:h-auto lg:min-h-[480px]">
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between shrink-0">
            <span className="text-sm font-bold text-slate-700">Dữ liệu định dạng</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-3 py-1.5 hover:bg-slate-200 active:scale-95 rounded-lg text-slate-700 text-xs font-bold transition-all"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy kết quả
            </button>
          </div>

          <div className="flex-1 min-h-0 relative p-4 bg-slate-50/50 overflow-auto">
            {error ? (
              <div className="flex gap-2.5 bg-red-50 border border-red-200 p-4 rounded-xl text-red-700 text-sm font-semibold">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <div className="space-y-1">
                  <p className="font-bold">Lỗi cú pháp JSON:</p>
                  <p className="text-xs font-mono text-red-600 leading-relaxed">{error}</p>
                </div>
              </div>
            ) : formattedJson ? (
              <pre className="absolute inset-0 p-4 text-sm font-mono text-slate-700 overflow-auto select-all leading-relaxed whitespace-pre">
                {formattedJson}
              </pre>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-bold">
                Chưa có dữ liệu đầu ra
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-emerald-950 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
