"use client";

import React from "react";
import Link from "next/link";
import { Stethoscope, Globe, Bot, Smartphone, Megaphone, Shield, ArrowRight, Sparkles, Layers, CheckCircle2 } from "lucide-react";

export default function PersonalEcosystem() {
  return (
    <section className="py-16 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#15803d]/10 text-[#15803d] rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Năng Lực & Dịch Vụ Cá Nhân
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 leading-tight">
            Hệ Sinh Thái Giải Pháp Đinh Khánh Tùng
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Sự kết hợp độc đáo giữa Y học cổ truyền dân tộc và Năng lực công nghệ số hiện đại.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Y HỌC CỔ TRUYỀN THU BẨY (Main Large Card - 7 cols) */}
          <div className="md:col-span-7 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-xl group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 border border-white/10">
                <Stethoscope className="w-4 h-4" /> Trụ Cột Y Tế & Sức Khỏe
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold leading-snug">
                Phòng Chẩn Trị YHCT Thu Bẩy
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Bắt mạch, kê đơn bài thuốc Nam gia truyền, tư vấn trị liệu dưỡng sinh Đông y phục hồi sức khỏe tận gốc tại Thái Nguyên.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-emerald-100 font-semibold pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Chẩn trị Thuốc Nam lành tính
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Tư vấn bài thuốc dưỡng sinh
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Trừ phong hàn, bổ khí huyết
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Bắt mạch trực tiếp / Zalo
                </li>
              </ul>
            </div>

            <div className="pt-4 relative z-10">
              <a
                href="https://zalo.me/0982581222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                Đặt Lịch Khám / Tư Vấn Zalo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: LẬP TRÌNH & AI (5 cols) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900">
                Giải Pháp Lập Trình & AI
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thiết kế Website chuẩn SEO, phát triển Ứng dụng Android và xây dựng Trợ lý AI Chatbot thông minh tự động hóa.
              </p>
              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" /> Website Next.js chuẩn SEO tốc độ cao
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Smartphone className="w-4 h-4 text-blue-600 shrink-0" /> App Android mượt mà theo yêu cầu
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Bot className="w-4 h-4 text-blue-600 shrink-0" /> AI Agent & RAG trích xuất dữ liệu
                </div>
              </div>
            </div>

            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Chi tiết giải pháp công nghệ <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: TRUYỀN THÔNG & KÊNH SỐ (12 cols full width bar) */}
          <div className="md:col-span-12 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Megaphone className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  Truyền Thông, Marketing & Bảo Mật Kênh Số
                </h3>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Tối ưu chi phí Quảng cáo Facebook Ads, quản lý nội dung Fanpage chuyên nghiệp và hỗ trợ bảo mật mở khóa tài khoản xã hội.
                </p>
              </div>
            </div>

            <Link
              href="/dich-vu"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm whitespace-nowrap transition-colors shadow-xs shrink-0"
            >
              Khám Phá Dịch Vụ Marketing
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
