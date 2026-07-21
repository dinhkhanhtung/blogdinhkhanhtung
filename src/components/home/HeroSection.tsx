"use client";

import React from "react";
import Link from "next/link";
import { Stethoscope, Sparkles, BookOpen, Wrench, ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 bg-gradient-to-b from-emerald-50/50 via-[#fbfaf8] to-[#fbfaf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15803d]/10 border border-[#15803d]/20 text-[#15803d] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4" /> Cổng Tri Thức & Hệ Sinh Thái Cá Nhân
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-slate-900 leading-[1.15] tracking-tight">
            Đinh Khánh Tùng
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Thầy thuốc Y Hộc Cổ Truyền • Nhà Phát Triển Công Cụ AI & Giải Pháp Số
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Chia sẻ tri thức Nam dược dưỡng sinh, cập nhật xu hướng công nghệ AI và cung cấp 30+ tiện ích số miễn phí hỗ trợ cộng đồng.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/blog"
              className="px-6 py-3.5 rounded-xl bg-[#15803d] text-white font-bold text-sm sm:text-base hover:bg-[#166534] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" /> Khám Phá Bài Viết
            </Link>

            <Link
              href="/tools"
              className="px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-200 font-bold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs flex items-center gap-2"
            >
              <Wrench className="w-5 h-5 text-[#15803d]" /> Bộ Công Cụ Số (30+)
            </Link>

            <Link
              href="/dich-vu"
              className="px-6 py-3.5 rounded-xl bg-amber-500 text-white font-bold text-sm sm:text-base hover:bg-amber-600 transition-all shadow-xs flex items-center gap-2"
            >
              <Stethoscope className="w-5 h-5" /> Dịch Vụ & Dự Án
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803d]" /> YHCT Chân Truyền Thái Nguyên
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803d]" /> 30+ Công Cụ Số Miễn Phí
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803d]" /> Tối Ưu Tri Thức RAG & AI
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
