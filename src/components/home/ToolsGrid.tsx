"use client";

import React from "react";
import Link from "next/link";
import { Wrench, ChevronRight, Map, Search, QrCode, Calculator, Database, Shield } from "lucide-react";

const FEATURED_TOOLS = [
  { title: "Topical Map AI", desc: "Tự động tạo sơ đồ phủ chủ đề chuẩn SEO", href: "/topical-map", icon: Map },
  { title: "Search Intent AI", desc: "Phân tích ý định tìm kiếm từ khóa", href: "/search-intent", icon: Search },
  { title: "Mã VietQR Nhanh", desc: "Tạo mã chuyển khoản VietQR trong 3 giây", href: "/vietqr", icon: QrCode },
  { title: "Tính Lãi Suất Vay", desc: "Bảng tính chi tiết dư nợ giảm dần", href: "/tinh-lai-suat-vay", icon: Calculator },
  { title: "JSON Formatter", desc: "Định dạng và kiểm tra cấu trúc JSON", href: "/json-formatter", icon: Database },
  { title: "Security Headers", desc: "Kiểm tra độ bảo mật HTTP Headers", href: "/security-headers", icon: Shield },
];

export default function ToolsGrid() {
  return (
    <section className="py-14 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#15803d] uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-4 h-4" /> Tiện Ích Miễn Phí
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
              Công Cụ Số Tiêu Biểu (30+)
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#15803d] hover:text-[#166534] transition-colors"
          >
            Tất cả 30+ công cụ <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group p-5 bg-[#fbfaf8] border border-slate-200 rounded-2xl hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#15803d]/10 text-[#15803d] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#15803d] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
