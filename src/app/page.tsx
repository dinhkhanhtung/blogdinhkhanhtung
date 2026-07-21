"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Leaf,
  Stethoscope,
  Activity,
  Cpu,
  Smartphone,
  Wrench,
  Search,
  BookOpen,
  MessageCircle,
  Globe,
  Bot,
  Megaphone,
  Shield,
  HeartPulse,
  ChevronRight,
  Star,
  Gift,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Clock,
  TrendingUp,
  User,
  Eye,
  Share2
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
    author: "Thầy thuốc Đinh Khánh Tùng",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Việt Nam có nguồn cây thuốc Nam vô cùng phong phú. Việc ứng dụng đúng cách đem lại hiệu quả bền vững cho sức khỏe.",
    readTime: "5 phút đọc",
    views: "1.2k"
  },
  {
    id: 3,
    slug: "ky-thuat-tap-go-10-ngon-tay-dung-cach-khong-can-nhin-ban-phim-2026",
    title: "Kỹ Thuật Tập Gõ 10 Ngón Tay Đúng Cách, Không Cần Nhìn Bàn Phím",
    category: "Thủ Thuật",
    type: "thu-thuat",
    date: "01/06/2026",
    author: "Đinh Khánh Tùng",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Hướng dẫn tập gõ 10 ngón tay chuẩn 2026. Bí quyết làm chủ bàn phím, tăng tốc độ gõ công việc gấp 3 lần.",
    readTime: "8 phút đọc",
    views: "3.4k"
  },
  {
    id: 2,
    slug: "tra-co-duoc-lieu-phap-duong-sinh-tu-nhien-cai-thien-giac-ngu",
    title: "Trà cổ dược: Liệu pháp dưỡng sinh tự nhiên cải thiện giấc ngủ",
    category: "Dưỡng sinh",
    type: "y-hoc",
    date: "08/07/2026",
    author: "Thầy thuốc Đinh Khánh Tùng",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Trà cổ dược kết hợp các thảo dược dưỡng tâm an thần giúp giải tỏa căng thẳng thần kinh và ngủ sâu hơn.",
    readTime: "4 phút đọc",
    views: "980"
  },
  {
    id: 4,
    slug: "cach-xay-dung-topical-authority-thong-tri-cong-cu-tim-kiem",
    title: "Cách xây dựng Topical Authority thống trị công cụ tìm kiếm",
    category: "SEO AI",
    type: "cong-nghe",
    date: "12/07/2026",
    author: "Đinh Khánh Tùng",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Topical Authority là yếu tố cốt lõi giúp website đạt thứ hạng vững chắc mà không phụ thuộc quá nhiều vào backlinks.",
    readTime: "10 phút đọc",
    views: "2.1k"
  }
];

const POPULAR_POSTS = [
  {
    id: 1,
    title: "Mẹo chữa đau dạ dày, trào ngược bằng bài thuốc Nam đơn giản",
    category: "Đông Y",
    date: "15/07/2026",
    slug: "meo-chua-dau-da-day-trao-nguoc-thuoc-nam"
  },
  {
    id: 2,
    title: "Top 10 Công Cụ AI Viết Content Chuẩn SEO Tốt Nhất 2026",
    category: "SEO AI",
    date: "14/07/2026",
    slug: "top-10-cong-cu-ai-viet-content-seo"
  },
  {
    id: 3,
    title: "Giải mã tác dụng của Nấm Linh Chi và Đông Trùng Hạ Thảo",
    category: "Dược Liệu",
    date: "11/07/2026",
    slug: "giai-ma-nam-linh-chi-dong-trung-ha-thao"
  },
  {
    id: 4,
    title: "Hướng dẫn tạo Chatbot AI tự động chăm sóc khách hàng 24/7",
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
    <div className="bg-[#fcfbf9] min-h-screen text-slate-800">
      
      {/* 1. HERO FEATURED SECTION (Storify Magazine Hero Grid) */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header Tagline */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#00b8f2] rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Storify Magazine & Tin Tức Nổi Bật
              </span>
            </div>
            <div className="text-xs text-slate-400 font-medium hidden sm:block">
              Cập nhật tri thức Y Học & Công Nghệ hàng ngày
            </div>
          </div>

          {/* Grid bài viết tiêu điểm (Hero Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Featured Card (Hero Big Left) */}
            <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md flex flex-col justify-end min-h-[380px] sm:min-h-[460px]">
              <img
                src={FEATURED_POSTS[0].imageUrl}
                alt={FEATURED_POSTS[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="relative p-6 sm:p-8 space-y-3 z-10">
                <span className="inline-block px-3 py-1 bg-[#00b8f2] text-white text-xs font-extrabold uppercase tracking-wider rounded-md shadow">
                  {FEATURED_POSTS[0].category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight group-hover:text-[#00b8f2] transition-colors">
                  <Link href={`/blog/${FEATURED_POSTS[0].slug}`}>
                    {FEATURED_POSTS[0].title}
                  </Link>
                </h2>
                <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">
                  {FEATURED_POSTS[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-300 pt-2 font-medium">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <User className="w-3.5 h-3.5 text-[#00b8f2]" /> {FEATURED_POSTS[0].author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {FEATURED_POSTS[0].date}
                  </span>
                  <span>•</span>
                  <span>{FEATURED_POSTS[0].readTime}</span>
                </div>
              </div>
            </div>

            {/* Stacked Featured Cards (Hero Right 2 Cards) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {FEATURED_POSTS.slice(1, 3).map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#00b8f2]/50 transition-all flex gap-4 items-center"
                >
                  <div className="w-28 sm:w-36 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-slate-100 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <span className="inline-block px-2 py-0.5 bg-sky-50 text-[#00b8f2] text-[10px] font-bold uppercase tracking-wider rounded border border-[#00b8f2]/20">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base line-clamp-2 group-hover:text-[#00b8f2] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> {post.date}
                      </span>
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

      {/* 2. MAIN 2-COLUMN SECTION (Storify Posts Grid + Sidebar) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN (70% - Posts Stream) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Header & Category Filter Tabs */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#00b8f2]" />
                    Bài Viết Mới Nhất
                  </h2>
                </div>
                
                {/* Category Filters */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl overflow-x-auto max-w-full">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeCategory === "all"
                        ? "bg-[#00b8f2] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Tất cả
                  </button>
                  <button
                    onClick={() => setActiveCategory("y-hoc")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeCategory === "y-hoc"
                        ? "bg-[#00b8f2] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Y Học Cổ Truyền
                  </button>
                  <button
                    onClick={() => setActiveCategory("thu-thuat")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeCategory === "thu-thuat"
                        ? "bg-[#00b8f2] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Thủ Thuật
                  </button>
                  <button
                    onClick={() => setActiveCategory("cong-nghe")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeCategory === "cong-nghe"
                        ? "bg-[#00b8f2] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Công Nghệ AI
                  </button>
                </div>
              </div>

              {/* Feed Bài viết */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-[#00b8f2]/40 transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider rounded-md">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#00b8f2] transition-colors leading-snug mb-2 line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-bold text-slate-700 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#00b8f2]" /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Button Xem tất cả bài viết */}
              <div className="text-center pt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#00b8f2] border-2 border-[#00b8f2] px-8 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all active:scale-95"
                >
                  Xem Tất Cả Bài Viết Tri Thức
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* RIGHT SIDEBAR (30% - Storify Sticky Sidebar Widgets) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Widget 1: Author Profile Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center space-y-4 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#00b8f2] via-emerald-500 to-blue-600"></div>
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100 relative">
                  <img
                    src="/images/avatar_doctor.png"
                    alt="Đinh Khánh Tùng"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">Đinh Khánh Tùng</h3>
                  <p className="text-xs text-[#00b8f2] font-semibold">
                    Thầy thuốc YHCT & Developer
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed text-left bg-slate-50 p-3 rounded-xl border border-slate-100">
                  Chủ Phòng chẩn trị YHCT Thu Bẩy (Thái Nguyên). Đam mê kết hợp y học cổ truyền chữa bệnh cứu người và phát triển công cụ phần mềm số.
                </p>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <a
                    href="https://zalo.me/0982581222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#00b8f2] hover:bg-[#009ed1] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-sm transition-all"
                  >
                    <img
                      src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
                      alt="Zalo"
                      className="w-4 h-4 object-contain brightness-0 invert"
                    />
                    Chat Zalo
                  </a>
                  <a
                    href="https://www.facebook.com/dinhkhanhtung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 p-2.5 rounded-xl border border-blue-200 transition-all"
                    title="Facebook Đinh Khánh Tùng"
                  >
                    <img
                      src="https://i.ibb.co/tTxPVxhX/facebook-page.png"
                      alt="Facebook"
                      className="w-4 h-4 object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Widget 2: Popular Posts (Đánh số 01, 02, 03...) */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00b8f2]" />
                    Bài Viết Đọc Nhiều
                  </h3>
                </div>

                <div className="space-y-4">
                  {POPULAR_POSTS.map((item, idx) => (
                    <div key={item.id} className="flex items-start gap-3.5 group">
                      <span className="font-heading font-black text-2xl text-slate-300 group-hover:text-[#00b8f2] transition-colors shrink-0 w-7">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b8f2]">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#00b8f2] transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 3: Quick Services Banner */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700 space-y-4">
                <div className="flex items-center gap-2 text-[#00b8f2] text-xs font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  Dịch Vụ Số & Dự Án
                </div>
                <h3 className="font-heading font-bold text-lg leading-tight">
                  Cần Thiết Kế Web, App Android Hoặc Trợ Lý AI Agent?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Tùng tiếp nhận xây dựng giải pháp công nghệ theo yêu cầu riêng với chi phí tối ưu nhất.
                </p>
                <Link
                  href="/dich-vu"
                  className="block w-full py-3 text-center bg-[#00b8f2] hover:bg-[#009ed1] text-white font-bold text-xs rounded-xl shadow transition-all active:scale-95"
                >
                  Khám Phá Dịch Vụ Số
                </Link>
              </div>

              {/* Widget 4: Quick Tools Direct Access */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-emerald-600" />
                    Công Cụ Số Dùng Nhanh
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/vietqr"
                    className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-100 hover:border-emerald-200 text-xs font-bold text-slate-700 hover:text-emerald-700 transition-all text-center"
                  >
                    Tạo mã VietQR
                  </Link>
                  <Link
                    href="/topical-map"
                    className="p-3 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 hover:border-blue-200 text-xs font-bold text-slate-700 hover:text-blue-700 transition-all text-center"
                  >
                    Topical Map AI
                  </Link>
                  <Link
                    href="/search-intent"
                    className="p-3 bg-slate-50 hover:bg-[#00b8f2]/10 rounded-xl border border-slate-100 hover:border-[#00b8f2]/30 text-xs font-bold text-slate-700 hover:text-[#00b8f2] transition-all text-center"
                  >
                    Search Intent
                  </Link>
                  <Link
                    href="/word-counter-pro"
                    className="p-3 bg-slate-50 hover:bg-purple-50 rounded-xl border border-slate-100 hover:border-purple-200 text-xs font-bold text-slate-700 hover:text-purple-700 transition-all text-center"
                  >
                    Đếm từ Pro
                  </Link>
                </div>
                <Link
                  href="/tools"
                  className="block text-center text-xs font-bold text-[#00b8f2] hover:underline pt-1"
                >
                  Xem tất cả 30+ Công cụ miễn phí →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. CLINIC & DOCTOR FOOTER BANNER */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl z-10">
              <span className="inline-block px-3.5 py-1 bg-emerald-800 text-emerald-300 font-bold rounded-full text-xs uppercase tracking-wider border border-emerald-700">
                Phòng Chẩn Trị YHCT Thu Bẩy
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black leading-tight text-white">
                Khám & Phân Tích Bệnh Lý Theo Phương Pháp Đông Y Cổ Truyền
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Địa chỉ: Tổ 10, Quan Triều, TP. Thái Nguyên. Chuyên tư vấn điều trị các bệnh mãn tính, xương khớp, trào ngược dạ dày, mất ngủ bằng bài thuốc Nam chuẩn tự nhiên.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 z-10 w-full sm:w-auto">
              <a
                href="https://zalo.me/0982581222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 px-6 py-4 rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                Tư Vấn Zalo Nhanh: 0982.581.222
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
