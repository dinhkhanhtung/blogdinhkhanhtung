"use client";

import React from "react";
import Link from "next/link";
import { Stethoscope, Globe, Bot, Smartphone, Megaphone, Shield, ArrowRight, Sparkles, Layers, CheckCircle2, Star, Award, Code2, Zap } from "lucide-react";

export default function PersonalEcosystem() {
  return (
    <section className="py-20 bg-[#fbfbf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15803d]/10 border border-[#15803d]/20 text-[#15803d] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Năng Lực & Hệ Sinh Thái Cá Nhân
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 leading-tight">
            Ba Trụ Cột Chuyên Môn & Giải Pháp
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Sự dung hòa độc đáo giữa Y Hộc Cổ Truyền Nam Dược và Công Nghệ Lập Trình Hiện Đại.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Y HỌC CỔ TRUYỀN THU BẨY (Main Card - 7 cols) */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-2xl border border-emerald-500/30 group">
            
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Award className="w-4 h-4 text-amber-400" /> Trụ Cột Y Tế Chân Truyền
                </div>
                <span className="text-xs font-bold text-emerald-200/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  Thái Nguyên
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-4xl font-heading font-black leading-tight tracking-tight text-white">
                  Phòng Chẩn Trị YHCT Thu Bẩy
                </h3>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium max-w-xl">
                  Ứng dụng Nam dược chân truyền Việt Nam điều trị tận gốc các bệnh mạn tính, xương khớp, thần kinh, khí huyết suy yếu và bài thuốc dưỡng sinh phục hồi sinh lực.
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs sm:text-sm text-emerald-50 font-medium">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Bắt mạch chẩn đoán tạng phủ</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Kê đơn thuốc Nam lành tính</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Trà cổ dược dưỡng tâm an thần</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tư vấn bài thuốc qua Zalo</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <a
                href="https://zalo.me/0982581222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-2xl transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95"
              >
                Đặt Lịch Khám / Tư Vấn Zalo <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-amber-300 font-bold">
                <Star className="w-4 h-4 fill-current text-amber-400" />
                <span>Đánh giá 5.0⭐ trên Google Maps</span>
              </div>
            </div>

          </div>

          {/* Card 2: LẬP TRÌNH & AI (5 cols) */}
          <div className="md:col-span-5 glass-card-dark text-white rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-2xl border border-slate-700/60 relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Code2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                  Công Nghệ Tiên Phong
                </span>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Giải Pháp Lập Trình & AI Agent
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Xây dựng Website Next.js chuẩn SEO tốc độ dưới 1s, phát triển App Android native và huấn luyện AI Agent CSKH tự động trên dữ liệu doanh nghiệp.
              </p>

              {/* Terminal Code Mock */}
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-[11px] font-mono space-y-1.5 text-slate-400">
                <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800 text-[10px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-500">ai_agent_rag.ts</span>
                </div>
                <div className="text-emerald-400">$ npx build-ai-agent --model=gemini-flash</div>
                <div className="text-slate-300">✔ Knowledge graph linked</div>
                <div className="text-slate-300">✔ Vector embeddings 100% loaded</div>
              </div>
            </div>

            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors pt-2"
            >
              Chi tiết giải pháp Lập trình & AI <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Card 3: TRUYỀN THÔNG & KÊNH SỐ (12 cols full width bar) */}
          <div className="md:col-span-12 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow">
            
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Megaphone className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  Truyền Thông & Tăng Trưởng Số
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                  Marketing Facebook Ads, Quản Lý Fanpage & Video Shorts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  Triển khai chiến dịch Facebook Ads nhắm mục tiêu chính xác, quản lý nội dung Fanpage chuyên sâu, sản xuất Video ngắn và hỗ trợ kỹ thuật bảo mật tài khoản mạng xã hội.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/dich-vu"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-colors shadow-sm"
              >
                Tư Vấn Quảng Cáo & Kênh Số
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
