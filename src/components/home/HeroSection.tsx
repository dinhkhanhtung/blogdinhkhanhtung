"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Stethoscope, Sparkles, BookOpen, Wrench, ArrowRight, ShieldCheck, Search, Cpu, Globe, HeartPulse } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-20 md:pb-28 bg-mesh-pattern border-b border-slate-200/80 overflow-hidden">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-[#15803d] text-xs font-bold uppercase tracking-widest shadow-xs border border-emerald-500/20 hover:scale-105 transition-transform cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15803d]" />
            </span>
            <span>Cổng Tri Thức & Hệ Sinh Thái Giải Pháp Số</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-slate-900 tracking-tight leading-[1.1]">
              Đinh Khánh Tùng
            </h1>
            <p className="text-xl sm:text-2xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#15803d] via-emerald-700 to-amber-600">
              Thầy Thuốc YHCT Thu Bẩy • Lập Trình Viên & AI Specialist
            </p>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Nơi giao thoa giữa <strong>Y học cổ truyền Nam dược chân truyền</strong> và <strong>Công nghệ số tiên phong</strong>. Cung cấp bài viết tri thức chuyên sâu & 30+ tiện ích số miễn phí.
          </p>

          {/* Interactive Hero Search Input Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative group">
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-lg shadow-slate-200/50 border border-slate-200 group-hover:border-[#15803d]/50 transition-all duration-300">
              <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="text"
                placeholder="Tìm bài viết YHCT, bài thuốc Nam, công cụ AI..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-2.5 text-sm sm:text-base font-medium text-slate-800 focus:outline-none placeholder:text-slate-400 bg-transparent"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold transition-all shrink-0 shadow-sm flex items-center gap-1.5"
              >
                Tìm kiếm <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-full mt-2 left-0 right-0 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
              <span>Gợi ý:</span>
              <button type="button" onClick={() => setQuery("Thuốc Nam")} className="hover:text-[#15803d] underline">Thuốc Nam</button>
              <button type="button" onClick={() => setQuery("Topical Map")} className="hover:text-[#15803d] underline">Topical Map</button>
              <button type="button" onClick={() => setQuery("Dưỡng sinh")} className="hover:text-[#15803d] underline">Dưỡng sinh</button>
            </div>
          </form>

          {/* Category Chips Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/blog?category=Đông+y"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#15803d] hover:text-[#15803d] transition-all shadow-xs"
            >
              <HeartPulse className="w-4 h-4 text-[#15803d]" /> YHCT & Thuốc Nam
            </Link>

            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all shadow-xs"
            >
              <Cpu className="w-4 h-4 text-blue-600" /> Giải Pháp Lập Trình & AI
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:border-amber-600 hover:text-amber-600 transition-all shadow-xs"
            >
              <Wrench className="w-4 h-4 text-amber-600" /> 30+ Công Cụ Số Miễn Phí
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
