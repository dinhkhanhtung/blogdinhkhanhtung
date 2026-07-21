"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  TrendingUp,
  User,
  ChevronRight,
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  Wrench,
  Search,
  Tag,
  ArrowUpRight,
  CheckCircle,
  Phone
} from "lucide-react";

interface Post {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  type: "y-hoc" | "cong-nghe" | "thu-thuat";
  readTime: string;
  views: string;
}

const FEATURED_POSTS: Post[] = [
  {
    id: 1,
    slug: "gia-tri-cua-cac-bai-thuoc-nam-va-duoc-lieu-quy-quanh-ta",
    title: "Giá trị của các bài Thuốc Nam và dược liệu quý quanh ta",
    category: "Thuốc Nam",
    type: "y-hoc",
    date: "10/07/2026",
    author: "Đinh Khánh Tùng",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Việt Nam sở hữu nguồn dược liệu phong phú. Việc ứng dụng đúng cách mang lại sức khỏe bền vững và phòng ngừa bệnh tật từ gốc.",
    readTime: "5 min read",
    views: "1.2k"
  },
  {
    id: 3,
    slug: "ky-thuat-tap-go-10-ngon-tay-dung-cach-khong-can-nhin-ban-phim-2026",
    title: "Kỹ Thuật Tập Gõ 10 Ngón Tay Đúng Cách, Tăng Tốc Độ Làm Việc 2026",
    category: "Thủ Thuật",
    type: "thu-thuat",
    date: "01/06/2026",
    author: "Đinh Khánh Tùng",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Hướng dẫn gõ 10 ngón chuẩn không nhìn bàn phím. Phương pháp luyện tập hiệu quả giúp tăng WPM lên gấp 3 lần.",
    readTime: "8 min read",
    views: "3.4k"
  },
  {
    id: 2,
    slug: "tra-co-duoc-lieu-phap-duong-sinh-tu-nhien-cai-thien-giac-ngu",
    title: "Trà Cổ Dược: Liệu Pháp Dưỡng Sinh Tự Nhiên Giúp Ngủ Nông Thành Ngủ Sâu",
    category: "Dưỡng Sinh",
    type: "y-hoc",
    date: "08/07/2026",
    author: "Đinh Khánh Tùng",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Trà cổ dược dưỡng tâm an thần, giải tỏa áp lực công việc và cải thiện giấc ngủ hiệu quả mà không phụ thuộc thuốc.",
    readTime: "4 min read",
    views: "980"
  },
  {
    id: 4,
    slug: "cach-xay-dung-topical-authority-thong-tri-cong-cu-tim-kiem",
    title: "Cách Xây Dựng Topical Authority Cấu Trúc Nội Dung Thống Trị SEO",
    category: "SEO AI",
    type: "cong-nghe",
    date: "12/07/2026",
    author: "Đinh Khánh Tùng",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Topical Authority là chìa khóa phủ rộng từ khóa và tăng trưởng traffic bền vững cho mọi website tin tức hiện đại.",
    readTime: "10 min read",
    views: "2.1k"
  }
];

const POPULAR_POSTS = [
  {
    id: 1,
    title: "Mẹo chữa trào ngược dạ dày & đau thượng vị bằng thuốc Nam",
    category: "Đông Y",
    date: "15/07/2026",
    slug: "meo-chua-dau-da-day-trao-nguoc-thuoc-nam"
  },
  {
    id: 2,
    title: "Top 10 Công Cụ AI Tạo Nội Dung Chuẩn SEO Tự Động Tốt Nhất",
    category: "SEO AI",
    date: "14/07/2026",
    slug: "top-10-cong-cu-ai-viet-content-seo"
  },
  {
    id: 3,
    title: "Phân tích tác dụng của Nấm Linh Chi & Đông Trùng Hạ Thảo",
    category: "Dược Liệu",
    date: "11/07/2026",
    slug: "giai-ma-nam-linh-chi-dong-trung-ha-thao"
  },
  {
    id: 4,
    title: "Hướng dẫn cài đặt Chatbot AI tự động chăm sóc khách hàng",
    category: "AI Agent",
    date: "09/07/2026",
    slug: "huong-dan-tao-chatbot-ai-tu-dong-ban-hang"
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = FEATURED_POSTS.filter(
    (post) => activeCategory === "all" || post.type === activeCategory
  );

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#757575] font-sans antialiased">
      
      {/* ==================== 1. STORIFY HERO FEATURED GRID ==================== */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Section Heading Bar */}
          <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#00b8f2] rounded-full"></span>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#111111]">
                Tiêu Điểm Tin Tức (Featured News)
              </h2>
            </div>
            <span className="text-xs text-[#959595] font-medium hidden sm:inline">
              Cập nhật tri thức mới nhất
            </span>
          </div>

          {/* Storify Hero Grid Layout (Left Main 60% + Right Stacked 40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Big Hero Left Card */}
            <div className="lg:col-span-7 group relative rounded-lg overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm min-h-[340px] sm:min-h-[420px] flex flex-col justify-end">
              <img
                src={FEATURED_POSTS[0].imageUrl}
                alt={FEATURED_POSTS[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
              
              <div className="relative p-6 sm:p-7 space-y-2.5 z-10">
                <span className="inline-block px-2.5 py-0.5 bg-[#00b8f2] text-white text-[11px] font-extrabold uppercase tracking-wider rounded">
                  {FEATURED_POSTS[0].category}
                </span>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug group-hover:text-[#00b8f2] transition-colors">
                  <Link href={`/blog/${FEATURED_POSTS[0].slug}`}>
                    {FEATURED_POSTS[0].title}
                  </Link>
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed opacity-90">
                  {FEATURED_POSTS[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-300 pt-1 font-medium">
                  <span className="text-white font-semibold flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#00b8f2]" /> {FEATURED_POSTS[0].author}
                  </span>
                  <span>•</span>
                  <span>{FEATURED_POSTS[0].date}</span>
                  <span>•</span>
                  <span>{FEATURED_POSTS[0].readTime}</span>
                </div>
              </div>
            </div>

            {/* Stacked Right Cards (2 Items) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {FEATURED_POSTS.slice(1, 3).map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-lg p-3.5 border border-slate-200/80 shadow-sm hover:border-[#00b8f2]/60 hover:shadow transition-all flex gap-3.5 items-center flex-1"
                >
                  <div className="w-28 sm:w-32 h-24 sm:h-28 rounded-md overflow-hidden shrink-0 bg-slate-100 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <span className="inline-block px-2 py-0.5 bg-[#00b8f2]/10 text-[#00b8f2] text-[10px] font-extrabold uppercase tracking-wider rounded">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-[#111111] text-xs sm:text-sm line-clamp-2 group-hover:text-[#00b8f2] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-[#959595]">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 2. MAIN 2-COLUMN SECTION (STORIFY POSTS + SIDEBAR) ==================== */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN (70% - Posts Stream) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Category Filter Tabs */}
              <div className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2 border-l-3 border-[#00b8f2] pl-2.5">
                  Bài Viết Mới Nhất
                </h3>
                
                <div className="flex items-center gap-1 overflow-x-auto max-w-full">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                      activeCategory === "all"
                        ? "bg-[#00b8f2] text-white"
                        : "bg-slate-100 text-[#757575] hover:bg-slate-200 hover:text-[#111111]"
                    }`}
                  >
                    Tất cả
                  </button>
                  <button
                    onClick={() => setActiveCategory("y-hoc")}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                      activeCategory === "y-hoc"
                        ? "bg-[#00b8f2] text-white"
                        : "bg-slate-100 text-[#757575] hover:bg-slate-200 hover:text-[#111111]"
                    }`}
                  >
                    Y Học Cổ Truyền
                  </button>
                  <button
                    onClick={() => setActiveCategory("thu-thuat")}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                      activeCategory === "thu-thuat"
                        ? "bg-[#00b8f2] text-white"
                        : "bg-slate-100 text-[#757575] hover:bg-slate-200 hover:text-[#111111]"
                    }`}
                  >
                    Thủ Thuật
                  </button>
                  <button
                    onClick={() => setActiveCategory("cong-nghe")}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                      activeCategory === "cong-nghe"
                        ? "bg-[#00b8f2] text-white"
                        : "bg-slate-100 text-[#757575] hover:bg-slate-200 hover:text-[#111111]"
                    }`}
                  >
                    Công Nghệ AI
                  </button>
                </div>
              </div>

              {/* Feed Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#00b8f2]/60 transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#111111]/80 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-wider rounded">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                      <div>
                        <h3 className="font-bold text-[#111111] text-sm sm:text-base group-hover:text-[#00b8f2] transition-colors leading-snug mb-1.5 line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-[#757575] text-xs line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#959595]">
                        <span className="font-semibold text-[#111111] flex items-center gap-1">
                          <User className="w-3 h-3 text-[#00b8f2]" /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Read More Link */}
              <div className="text-center pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-[#00b8f2] border border-[#00b8f2] px-6 py-2.5 rounded text-xs font-bold shadow-sm transition-all"
                >
                  Xem tất cả bài viết tri thức
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* RIGHT SIDEBAR (30% - Storify Sidebar Widgets) */}
            <div className="lg:col-span-4 space-y-5 sticky top-24">
              
              {/* Widget 1: Author Card */}
              <div className="bg-white rounded-lg p-5 border border-slate-200/80 shadow-sm text-center space-y-3">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow bg-slate-100">
                  <img
                    src="/images/avatar_doctor.png"
                    alt="Đinh Khánh Tùng"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-base">Đinh Khánh Tùng</h3>
                  <p className="text-[11px] text-[#00b8f2] font-semibold uppercase tracking-wider">
                    Thầy thuốc YHCT & Developer
                  </p>
                </div>
                <p className="text-xs text-[#757575] leading-relaxed text-left bg-[#f8f9fa] p-3 rounded border border-slate-100">
                  Chủ Phòng Chẩn Trị YHCT Thu Bẩy (Thái Nguyên). Nghiên cứu y học cổ truyền chữa bệnh cứu người & phát triển tiện ích số.
                </p>
                <div className="pt-1">
                  <a
                    href="https://zalo.me/0982581222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#00b8f2] hover:bg-[#009ed1] text-white py-2 px-4 rounded text-xs font-bold shadow-sm transition-all w-full"
                  >
                    <img
                      src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
                      alt="Zalo"
                      className="w-3.5 h-3.5 object-contain brightness-0 invert"
                    />
                    Liên hệ Zalo tư vấn
                  </a>
                </div>
              </div>

              {/* Widget 2: Popular Posts (Đánh số 01, 02, 03...) */}
              <div className="bg-white rounded-lg p-5 border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="font-bold text-[#111111] text-xs uppercase tracking-wider border-b-2 border-[#00b8f2] pb-2 inline-block">
                  Bài viết đọc nhiều
                </h3>

                <div className="space-y-3.5 pt-1">
                  {POPULAR_POSTS.map((item, idx) => (
                    <div key={item.id} className="flex items-start gap-3 group">
                      <span className="font-black text-xl text-[#00b8f2]/40 group-hover:text-[#00b8f2] transition-colors shrink-0 w-6 leading-none pt-0.5">
                        0{idx + 1}
                      </span>
                      <div className="space-y-0.5 min-w-0">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#00b8f2]">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-xs text-[#111111] group-hover:text-[#00b8f2] transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 3: Compact Services & Tools Box */}
              <div className="bg-white rounded-lg p-5 border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="font-bold text-[#111111] text-xs uppercase tracking-wider border-b-2 border-emerald-600 pb-2 inline-block">
                  Dịch Vụ Số & Công Cụ
                </h3>
                <p className="text-xs text-[#757575] leading-relaxed">
                  Khám phá dịch vụ thiết kế Web, App, AI Agent và bộ 30+ tiện ích số miễn phí.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href="/dich-vu"
                    className="p-2.5 bg-sky-50 border border-sky-100 rounded text-center text-xs font-bold text-[#00b8f2] hover:bg-[#00b8f2] hover:text-white transition-all"
                  >
                    Dịch Vụ Số
                  </Link>
                  <Link
                    href="/tools"
                    className="p-2.5 bg-emerald-50 border border-emerald-100 rounded text-center text-xs font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all"
                  >
                    30+ Tools AI
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3. CLINIC BANNER FOOTER ==================== */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-[#00b8f2] text-white font-extrabold text-[10px] uppercase tracking-wider rounded">
                Phòng Chẩn Trị YHCT Thu Bẩy
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                Tư Vấn Khám Bệnh Đông Y & Bốc Thuốc Nam Thái Nguyên
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Địa chỉ: Tổ 10, Quan Triều, TP. Thái Nguyên. Chuyên trị đau xương khớp, trào ngược dạ dày, mất ngủ bằng bài thuốc Nam tự nhiên.
              </p>
            </div>

            <a
              href="https://zalo.me/0982581222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00b8f2] hover:bg-[#009ed1] text-white px-5 py-3 rounded text-xs font-bold shadow transition-all shrink-0"
            >
              <Phone className="w-4 h-4" />
              Tư Vấn Zalo: 0982.581.222
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
