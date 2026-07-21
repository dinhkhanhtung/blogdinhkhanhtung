"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Stethoscope, Globe, Smartphone, Bot, Megaphone, Edit3, Shield, Compass, Layers, CheckCircle2, ArrowRight, Phone, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  category: "yhct" | "software" | "marketing";
  categoryName: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: "yhct-1",
    title: "Chẩn Trị & Kê Đơn Thuốc Nam (YHCT Thu Bẩy)",
    desc: "Bắt mạch, chẩn đoán thể trạng tạng phủ và kê đơn bài thuốc Nam gia truyền điều trị tận gốc các bệnh mạn tính, xương khớp, khí huyết.",
    category: "yhct",
    categoryName: "Y Học Cổ Truyền",
    highlights: ["Bài thuốc Nam hoàn toàn tự nhiên", "Điều hòa chức năng gan thận", "Bắt mạch trực tiếp hoặc tư vấn từ xa"],
    ctaText: "Tư vấn bài thuốc YHCT",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "yhct-2",
    title: "Liệu Pháp Trà Cổ Dược & Dưỡng Sinh",
    desc: "Tư vấn các công thức trà thảo dược dưỡng tâm an thần, giải tỏa căng thẳng thần kinh và cải thiện giấc ngủ sâu tự nhiên.",
    category: "yhct",
    categoryName: "Y Học Cổ Truyền",
    highlights: ["100% thảo dược thiên nhiên", "Thanh lọc cơ thể, mát gan", "Dễ dàng pha uống hàng ngày"],
    ctaText: "Nhận tư vấn dưỡng sinh",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "soft-1",
    title: "Thiết Kế Website Chuẩn SEO Tốc Độ Cao",
    desc: "Xây dựng website doanh nghiệp/cá nhân trên nền tảng Next.js hiện đại, tối ưu 100% Google Web Vitals, tích hợp SEO kỹ thuật.",
    category: "software",
    categoryName: "Lập Trình & AI",
    highlights: ["Tốc độ tải trang dưới 1 giây", "Giao diện Premium chuẩn Apple/Stripe", "Tự động sinh Sitemap & Schema JSON-LD"],
    ctaText: "Tư vấn làm website",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "soft-2",
    title: "Phát Triển Ứng Dụng Android Theo Yêu Cầu",
    desc: "Lập trình app di động Android native mượt mà, bảo mật, đáp ứng đúng quy trình nghiệp vụ thực tế của doanh nghiệp.",
    category: "software",
    categoryName: "Lập Trình & AI",
    highlights: ["Giao diện chuẩn Material Design 3", "Tích hợp API & cơ sở dữ liệu realtime", "Hỗ trợ đưa app lên Google Play Store"],
    ctaText: "Báo giá làm App Android",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "soft-3",
    title: "Xây Dựng AI Agent & Chatbot Tự Động Hóa",
    desc: "Tạo trợ lý AI CSKH thông minh trained trên dữ liệu riêng của bạn, giải đáp thắc mắc 24/7 và tự động chốt đơn hàng.",
    category: "software",
    categoryName: "Lập Trình & AI",
    highlights: ["Tích hợp RAG trích xuất tri thức", "Hoạt động trên Website, Fanpage, Zalo", "Tiết kiệm 80% chi phí nhân sự CSKH"],
    ctaText: "Tạo AI Agent riêng",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "mkt-1",
    title: "Tối Ưu Quảng Cáo Facebook Ads Chuẩn Chuyển Đổi",
    desc: "Triển khai chiến dịch quảng cáo Facebook nhắm mục tiêu chính xác, tối ưu chi phí trên mỗi đơn hàng (CPA) và gia tăng ROI.",
    category: "marketing",
    categoryName: "Truyền Thông & Ads",
    highlights: ["A/B Testing nội dung quảng cáo", "Tối ưu ngân sách tự động", "Báo cáo chỉ số rõ ràng minh bạch"],
    ctaText: "Tư vấn Facebook Ads",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "mkt-2",
    title: "Quản Lý Fanpage & Sáng Tạo Nội Dung Kênh Số",
    desc: "Xây dựng hình ảnh thương hiệu uy tín, sản xuất bài viết chuyên môn cao và thiết kế hình ảnh/video short chuẩn nhận diện.",
    category: "marketing",
    categoryName: "Truyền Thông & Ads",
    highlights: ["Kế hoạch nội dung định kỳ", "Thiết kế Banner & Video Reels", "Tăng tương tác tự nhiên (Organic reach)"],
    ctaText: "Tư vấn quản lý Fanpage",
    ctaHref: "https://zalo.me/0982581222",
  },
  {
    id: "mkt-3",
    title: "Bảo Mật & Hỗ Trợ Kỹ Thuật Mạng Xã Hội",
    desc: "Mở khóa tài khoản Facebook bị hạn chế, cài đặt xác thực 2 lớp phòng ngừa hack và tối ưu trang cá nhân/doanh nghiệp.",
    category: "marketing",
    categoryName: "Truyền Thông & Ads",
    highlights: ["Xử lý sự cố tài khoản", "Bảo vệ tài sản Kênh Số", "Hỗ trợ kỹ thuật 1-1 nhanh chóng"],
    ctaText: "Hỗ trợ sự cố Kênh Số",
    ctaHref: "https://zalo.me/0982581222",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices = ALL_SERVICES.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <div className="bg-[#fbfaf8] min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15803d]/10 text-[#15803d] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Giải Pháp Tổng Thể & Chuyên Nghiệp
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
            Dịch Vụ & Dự Án Đinh Khánh Tùng
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tổng hợp các giải pháp Y Học Cổ Truyền, Lập trình ứng dụng AI và Truyền thông số được thiết kế riêng theo nhu cầu của bạn.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === "all"
                ? "bg-[#15803d] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Tất Cả Dịch Vụ
          </button>
          <button
            onClick={() => setActiveCategory("yhct")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === "yhct"
                ? "bg-[#15803d] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Y Học Cổ Truyền
          </button>
          <button
            onClick={() => setActiveCategory("software")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === "software"
                ? "bg-[#15803d] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Lập Trình & AI
          </button>
          <button
            onClick={() => setActiveCategory("marketing")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === "marketing"
                ? "bg-[#15803d] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Truyền Thông & Ads
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-[#15803d]/10 text-[#15803d] text-[11px] font-bold uppercase tracking-wider rounded-full">
                  {service.categoryName}
                </span>

                <h3 className="text-xl font-heading font-bold text-slate-900 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={service.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  {service.ctaText} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
