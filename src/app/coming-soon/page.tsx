"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Wand2, ArrowLeft, MessageSquare, Clock } from "lucide-react";

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const toolName = searchParams.get("tool") || "Công cụ tiện ích";

  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto relative animate-pulse">
          <Wand2 className="w-8 h-8 shrink-0" />
        </div>

        {/* Text info */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-500 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            Đang phát triển
          </div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            {toolName}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-semibold">
            Công cụ này đang được **Đinh Khánh Tùng** và đội ngũ kỹ thuật xây dựng cấu trúc logic. Dự kiến sẽ được kích hoạt hoàn toàn trong phiên bản cập nhật tiếp theo.
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col gap-2.5">
          <a
            href="https://zalo.me/0982581222"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-md shadow-emerald-500/10 active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            Yêu cầu kích hoạt sớm
          </a>
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-sm rounded-xl transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center p-20">
          <div className="w-10 h-10 border-3 border-slate-100 border-t-blue-600 rounded-full animate-spin" />
        </div>
      }
    >
      <ComingSoonContent />
    </Suspense>
  );
}
