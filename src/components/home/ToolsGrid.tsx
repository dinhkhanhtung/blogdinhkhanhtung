"use client";

import React from "react";
import Link from "next/link";
import { Wrench, ChevronRight, Map, Search, QrCode, Calculator, Database, Shield, ArrowUpRight } from "lucide-react";

const FEATURED_TOOLS = [
  { title: "Topical Map AI", desc: "Tự động tạo sơ đồ phủ chủ đề từ khóa chuẩn SEO", href: "/topical-map", icon: Map, color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  { title: "Search Intent AI", desc: "Phân tích ý định tìm kiếm từ khóa thông minh", href: "/search-intent", icon: Search, color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  { title: "Mã VietQR Nhanh", desc: "Tạo mã chuyển khoản VietQR cá nhân trong 3s", href: "/vietqr", icon: QrCode, color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  { title: "Tính Lãi Suất Vay", desc: "Bảng tính chi tiết dư nợ giảm dần chuẩn ngân hàng", href: "/tinh-lai-suat-vay", icon: Calculator, color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
  { title: "JSON Formatter", desc: "Định dạng và validate cấu trúc JSON chuẩn code", href: "/json-formatter", icon: Database, color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20" },
  { title: "Security Headers", desc: "Kiểm tra độ bảo mật HTTP Security Headers", href: "/security-headers", icon: Shield, color: "bg-rose-500/10 text-rose-600 border-rose-500/20" },
];

export default function ToolsGrid() {
  return (
    <section className="py-16 bg-[#fbfbf9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
              <Wrench className="w-4 h-4 text-amber-600" /> Hệ Thống Tiện Ích Miễn Phí
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Công Cụ Số Tiêu Biểu (30+)
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#15803d] hover:text-[#166534] transition-colors group"
          >
            <span>Khám phá toàn bộ 30+ công cụ</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group p-6 bg-white border border-slate-200/90 rounded-3xl hover:shadow-lg hover:border-[#15803d]/40 transition-all duration-300 flex items-start justify-between gap-4 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${tool.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#15803d] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#15803d] text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
