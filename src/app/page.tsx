"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Phone,
  MapPin,
  ArrowRight,
  Leaf,
  Stethoscope,
  Globe,
  Bot,
  Smartphone,
  Calendar,
  ChevronRight,
  Star,
  Gift,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
  HeartPulse,
  BookOpen,
  Wrench,
  Layers
} from "lucide-react";

// Dịch vụ số tiêu biểu (Top 3)
const FEATURED_SERVICES = [
  {
    title: "Thiết kế Website Chuyên Nghiệp",
    desc: "Website chuẩn SEO, tối ưu tốc độ tải trang, giao diện đẳng cấp giúp tăng nhận diện thương hiệu.",
    icon: Globe,
    image: "https://i.ibb.co/hJ24SCDJ/web-design-service-image.png"
  },
  {
    title: "Phát triển Ứng dụng Android",
    desc: "Xây dựng ứng dụng di động chuyên nghiệp theo yêu cầu thực tế, bảo mật và mượt mà.",
    icon: Smartphone,
    image: "https://i.ibb.co/Rk7snxFW/android-app-service-image.png"
  },
  {
    title: "Xây dựng Trợ Lý AI Agent",
    desc: "Tạo Chatbot AI thông minh huấn luyện theo dữ liệu riêng, tự động hóa CSKH 24/7.",
    icon: Bot,
    image: "https://i.ibb.co/VXz3Dv5/ai-agent-service-image.png"
  }
];

// Dự án phần mềm nổi bật (Top 4)
const FEATURED_APPS = [
  {
    title: "MoneyFlow Smart",
    desc: "Ứng dụng quản lý tài chính cá nhân hiện đại, trực quan trên Android.",
    image: "https://play-lh.googleusercontent.com/YNu9gjjD3oRoLdRVmoeLIepStqxGT3qOwJRHn-oVaGWrbryUcadKTk93gAnkshui4xOyeBlPr0FP60V9QHW2Nc8",
    link: "https://play.google.com/store/apps/details?id=com.financeapp.personal_finance_app",
    tag: "Tài chính",
    type: "Android App",
    rating: "4.8",
    downloads: "100+"
  },
  {
    title: "SellEasy - Nhật Ký Bán Hàng",
    desc: "Ứng dụng quản lý bán hàng toàn diện, theo dõi doanh thu & kho hàng.",
    image: "https://play-lh.googleusercontent.com/N4WG5Wf3AUlKC4ISS1NtvXIokA_9vZ-ezsPZ6pwHvSatVghbJRrBvw0iIUWMyv_HRGPKt0pAK5dFTNowpwfLfg",
    link: "https://play.google.com/store/apps/details?id=com.dinhkhanhtung.selleasy",
    tag: "Bán hàng",
    type: "Android App",
    rating: "4.9",
    downloads: "500+"
  },
  {
    title: "Vidu Family",
    desc: "Ứng dụng theo dõi và quản lý tài chính thông minh cho gia đình.",
    image: "https://i.ibb.co/gFZv6Fff/vidu-family-og-share.jpg",
    link: "https://vidu-family.vercel.app/",
    tag: "Gia đình",
    type: "Web App"
  },
  {
    title: "Kim Kê Store",
    desc: "Hệ thống quản lý chuyên sâu cho chuỗi tiệm gà rán và F&B.",
    image: "https://i.ibb.co/RpMx8DcP/kimke-og-share.jpg",
    link: "https://kimke.vercel.app/",
    tag: "F&B",
    type: "Web App"
  }
];

// Bài viết Y Học Cổ Truyền
const YHCT_POSTS = [
  {
    id: 1,
    slug: "gia-tri-cua-cac-bai-thuoc-nam-va-duoc-lieu-quy-quanh-ta",
    title: "Giá trị của các bài Thuốc Nam và dược liệu quý quanh ta",
    category: "Thuốc Nam",
    date: "10/07/2026",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Việt Nam có nguồn cây thuốc Nam vô cùng phong phú. Việc ứng dụng đúng cách đem lại hiệu quả bền vững."
  },
  {
    id: 2,
    slug: "tra-co-duoc-lieu-phap-duong-sinh-tu-nhien-cai-thien-giac-ngu",
    title: "Trà cổ dược: Liệu pháp dưỡng sinh tự nhiên cải thiện giấc ngủ",
    category: "Dưỡng sinh",
    date: "08/07/2026",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Trà cổ dược kết hợp các thảo dược dưỡng tâm an thần giúp giải tỏa căng thẳng thần kinh."
  },
  {
    id: 5,
    slug: "phuong-phap-kham-chua-benh-tiet-nieu-dong-y",
    title: "Phương pháp bảo vệ thận và đường tiết niệu theo Đông Y",
    category: "Đông Y",
    date: "05/07/2026",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Lý luận Đông Y về tạng Thận và các bài thuốc nam chủ trị bệnh đường tiết niệu hiệu quả."
  }
];

// Bài viết Công Nghệ & AI
const TECH_POSTS = [
  {
    id: 3,
    slug: "ky-thuat-tap-go-10-ngon-tay-dung-cach-khong-can-nhin-ban-phim-2026",
    title: "Kỹ Thuật Tập Gõ 10 Ngón Tay Đúng Cách, Không Cần Nhìn Bàn Phím",
    category: "Thủ Thuật",
    date: "01/06/2026",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Hướng dẫn tập gõ 10 ngón chuẩn. Bí quyết làm chủ bàn phím, tăng tốc độ soạn thảo."
  },
  {
    id: 4,
    slug: "cach-xay-dung-topical-authority-thong-tri-cong-cu-tim-kiem",
    title: "Cách xây dựng Topical Authority thống trị công cụ tìm kiếm",
    category: "SEO",
    date: "12/07/2026",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Topical Authority giúp website đạt thứ hạng cao tự nhiên mà không cần quá nhiều backlinks."
  },
  {
    id: 6,
    slug: "huong-dan-dung-prompt-engineering-cho-chu-doanh-nghiep",
    title: "Hướng dẫn làm chủ Prompt Engineering ứng dụng vào công việc",
    category: "AI Tools",
    date: "15/07/2026",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Ứng dụng ChatGPT và Claude AI nâng cao hiệu suất làm việc gấp 3 lần cho người bận rộn."
  }
];

// Công cụ & Tiện ích tiêu biểu (Top 4)
const FEATURED_TOOLS = [
  {
    title: "Topical Map Generator",
    desc: "Xây dựng sơ đồ chủ đề chuẩn SEO cho website",
    href: "/topical-map",
    badge: "SEO Tool"
  },
  {
    title: "Phân Tích Search Intent AI",
    desc: "Phân tích ý định tìm kiếm của người dùng bằng AI",
    href: "/search-intent",
    badge: "AI Powered"
  },
  {
    title: "Nén Ảnh Hàng Loạt",
    desc: "Tối ưu dung lượng hình ảnh giữ nguyên chất lượng",
    href: "/nen-anh-hang-loat",
    badge: "Công cụ số"
  },
  {
    title: "Tạo Mã VietQR Nhanh",
    desc: "Tạo QR thanh toán ngân hàng chính xác 100%",
    href: "/vietqr",
    badge: "Tài chính"
  }
];

const FAQS = [
  { q: "Phòng khám có nhận khám và tư vấn online không?", a: "Có. Tùng nhận tư vấn qua Zalo và Messenger. Bạn có thể gửi ảnh kết quả xét nghiệm, mô tả triệu chứng để Tùng phân tích và tư vấn bài thuốc phù hợp." },
  { q: "Một liệu trình điều trị thường kéo dài bao lâu?", a: "Tùy từng bệnh lý. Thông thường một liệu trình cơ bản từ 1–3 tháng. Các bệnh mãn tính như sỏi thận, dạ dày có thể cần 3–6 tháng." },
  { q: "Thuốc nam có an toàn không?", a: "Thuốc của phòng khám Thu Bẩy sử dụng 100% dược liệu thiên nhiên sạch, không pha trộn tân dược, an toàn cho cả người cao tuổi." }
];

export default function Home() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedGift, setCopiedGift] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedGift(index);
    setTimeout(() => setCopiedGift(null), 2000);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-background border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-xs uppercase tracking-wider">
                Blog Đinh Khánh Tùng
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-tight">
                Chia sẻ tri thức Y Học Cổ Truyền, Công Nghệ & Cuộc Sống
              </h1>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
                Chào bạn! Nơi đây là không gian tôi ghi chép lại những kinh nghiệm khám chữa bệnh Đông Y, giải pháp công nghệ số và góc nhìn tản mạn về cuộc sống.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/dich-vu"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-emerald-800 text-white px-6 py-3.5 rounded-xl text-base font-bold transition-all shadow-md active:scale-95"
                >
                  <Stethoscope className="w-5 h-5" />
                  Dịch Vụ YHCT Thu Bẩy
                </Link>
                <Link
                  href="#free-gifts"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3.5 rounded-xl text-base font-bold transition-all shadow-sm active:scale-95"
                >
                  <Gift className="w-5 h-5 text-amber-600" />
                  Nhận Quà Tặng
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="aspect-square w-full max-w-[360px] rounded-[32px] overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                <img src="/images/avatar_doctor.png" alt="Thầy thuốc Đinh Khánh Tùng" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="absolute -bottom-4 -left-2 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-200 max-w-[250px] hidden md:flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-0.5">Nơi công tác</h4>
                  <p className="text-xs text-slate-600 leading-tight">Phòng Chẩn Trị YHCT Thu Bẩy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Y Đạo Tại Tâm */}
      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-4 leading-tight">
                "Y Đạo Tại Tâm – Dược Liệu Thuận Tự Nhiên"
              </h2>
              <div className="w-16 h-1 bg-emerald-500 mb-6 rounded-full"></div>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                Tại Phòng Chẩn Trị YHCT Thu Bẩy, chúng tôi theo đuổi phương pháp trị liệu toàn diện: <strong className="text-white font-bold">Trị bệnh từ gốc - Dưỡng sinh thuận tự nhiên</strong>. Tự hào kết hợp các bài thuốc bí truyền cùng nguồn dược liệu 100% tự nhiên.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">20+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Năm Kinh Nghiệm<br/>(Từ 2003)</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">10k+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Bệnh Nhân<br/>Phục Hồi</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl text-slate-900 border border-slate-200 shadow-xl">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Chẩn Trị Tỉ Mỉ</h3>
                    <p className="text-sm text-slate-600">Khám tứ chẩn & phác đồ cá nhân hóa</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl text-slate-900 border border-slate-200 shadow-xl mt-8">
                    <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-4">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Thuốc Nam Bào Chế</h3>
                    <p className="text-sm text-slate-600">Dược liệu sạch 100% tự nhiên</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 1: Bài Viết Y Học Cổ Truyền */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Chuyên mục chính</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Y Học Cổ Truyền & Dưỡng Sinh</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            <Link 
              href="/blog?category=Đông+y" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline bg-primary/10 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Xem tất cả bài viết YHCT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {YHCT_POSTS.map((post) => (
              <div 
                key={post.id}
                onClick={() => router.push(`/blog?post=${post.slug}`)}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-primary shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium border-t border-slate-100 pt-3">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section 2: Bài Viết Công Nghệ & AI */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1 block">Tri thức số</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Công Nghệ, AI & Mẹo Số</h2>
              <div className="w-16 h-1 bg-sky-600 rounded-full"></div>
            </div>
            <Link 
              href="/blog?category=SEO" 
              className="inline-flex items-center gap-2 text-sky-700 font-bold hover:underline bg-sky-100/60 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Xem tất cả bài viết Công nghệ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_POSTS.map((post) => (
              <div 
                key={post.id}
                onClick={() => router.push(`/blog?post=${post.slug}`)}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-sky-700 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium border-t border-slate-100 pt-3">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 3: Dự Án Phần Mềm Đã Xây Dựng (1 Hàng 4 Card) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Dự Án Phần Mềm Đã Xây Dựng</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <a 
              href="https://github.com/dinhkhanhtung" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline bg-blue-50 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Xem tất cả dự án <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_APPS.map((app, idx) => (
              <a 
                key={idx} 
                href={app.link} 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-200">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-lg backdrop-blur-sm">
                    {app.tag}
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-lg">
                    {app.type}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="mb-3">
                    <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      {app.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{app.desc}</p>
                  </div>
                  {app.rating && (
                    <div className="flex items-center gap-3 text-[11px] font-bold text-slate-600 border-t border-slate-200/60 pt-2.5 mt-auto">
                      <span className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-500" /> {app.rating}
                      </span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-500">{app.downloads} lượt tải</span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section 4: Dịch Vụ Số & Giải Pháp Kỹ Thuật (1 Hàng 3 Card) */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Dịch Vụ Số & Giải Pháp Kỹ Thuật</h2>
              <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <Link 
              href="/gioi-thieu" 
              className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline bg-emerald-50 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Xem tất cả dịch vụ số <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 text-emerald-600 rounded-xl flex items-center justify-center shadow-md backdrop-blur-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{srv.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{srv.desc}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <a 
                      href={`https://zalo.me/0982581222?text=Chào Tùng, mình muốn nhận báo giá dịch vụ: ${encodeURIComponent(srv.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 text-center border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all font-bold text-sm rounded-xl active:scale-95"
                    >
                      Nhận báo giá ngay
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Section 5: Bộ Công Cụ & Tiện Ích Số Nổi Bật (1 Hàng 4 Card) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Miễn phí 100%</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Bộ Công Cụ & Tiện Ích Số</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            <Link 
              href="/tools" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline bg-primary/10 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Khám phá kho tiện ích số <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_TOOLS.map((tool, idx) => (
              <Link
                key={idx}
                href={tool.href}
                className="group p-5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-primary">
                  Sử dụng ngay <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section 6: Tinh Hoa Dược Liệu & Sản Phẩm YHCT (1 Hàng 4 Sản Phẩm) */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">Tinh Hoa Dược Liệu Thu Bẩy</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm md:text-base">Bào chế thủ công từ dược liệu sạch, công thức bí truyền an toàn hiệu quả.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-slate-50 relative border-b border-slate-100 overflow-hidden">
                <img src="/images/products/product_tea.png" alt="Trà Cổ Dược" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-primary text-[11px] font-extrabold uppercase tracking-wider">Trà Thảo Mộc</div>
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-primary transition-colors">Trà Cổ Dược Dưỡng Sinh</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Thanh lọc cơ thể, dưỡng tâm an thần, hỗ trợ giấc ngủ sâu.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-2.5 text-center bg-primary hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-slate-50 relative border-b border-slate-100 overflow-hidden">
                <img src="/images/products/product_oil.png" alt="Dầu Trị Liệu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-primary text-[11px] font-extrabold uppercase tracking-wider">Xoa bóp ngoài da</div>
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-primary transition-colors">Dầu Thảo Dược Xoa Bóp</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Thông kinh lạc, giảm đau xương khớp, tê bì chân tay nhanh chóng.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-2.5 text-center bg-primary hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-emerald-50/30 flex items-center justify-center relative border-b border-slate-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                   <HeartPulse className="w-9 h-9" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-primary text-[11px] font-extrabold uppercase tracking-wider">Đặc Trị</div>
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">4.9</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-primary transition-colors">Cao Xương Khớp Bí Truyền</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Trị liệu đau lưng, thoái hóa đốt sống, tăng cường sức mạnh gân cốt.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-2.5 text-center bg-primary hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-emerald-50/30 flex items-center justify-center relative border-b border-slate-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                   <Leaf className="w-9 h-9" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-primary text-[11px] font-extrabold uppercase tracking-wider">Thư giãn</div>
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-primary transition-colors">Thuốc Ngâm Chân Thảo Dược</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Giúp lưu thông khí huyết, Kích thích huyệt đạo bàn chân mang lại giấc ngủ ngon.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-2.5 text-center bg-primary hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section 7: Quà Tặng Miễn Phí */}
      <section id="free-gifts" className="py-12 md:py-16 bg-amber-50/60 border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-full mb-3">
              <Gift className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">Quà Tặng Miễn Phí & Mẹo Hay</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm md:text-base">Các Prompt AI thông minh và công thức dân gian giúp bạn chăm sóc sức khỏe ngay tại nhà.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-xl">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Prompt AI Phân Tích Đông Y</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">Dán vào ChatGPT để được phân tích sơ bộ theo lý luận Đông Y.</p>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono mb-4">
                  Bạn là chuyên gia YHCT. Tôi có triệu chứng: [điền]. Hãy phân tích nguyên nhân và gợi ý thảo dược dân gian.
                </div>
              </div>
              <button 
                onClick={() => handleCopy("Bạn là chuyên gia YHCT. Tôi có triệu chứng: [điền]. Hãy phân tích nguyên nhân và gợi ý thảo dược dân gian.", 1)}
                className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 ${copiedGift === 1 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
              >
                {copiedGift === 1 ? <><CheckCircle2 className="w-4 h-4" /> Đã sao chép</> : <><Copy className="w-4 h-4" /> Chép Prompt AI</>}
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-100 text-emerald-600 p-2 rounded-xl">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Công Thức Trà Gừng Mật Ong</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">Hỗ trợ tiêu hóa, giảm đau dạ dày & ấm bụng hiệu quả.</p>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 mb-4 leading-relaxed">
                  • 3 lát gừng tươi hãm với 300ml nước sôi 10 phút.<br/>
                  • Thêm 1 thìa mật ong nguyên chất khi nước ấm.<br/>
                  • Uống sau bữa ăn 30 phút.
                </div>
              </div>
              <button 
                onClick={() => handleCopy("Công thức Trà Gừng Mật Ong: 3 lát gừng tươi hãm 300ml nước sôi 10 phút. Thêm 1 thìa mật ong khi nước ấm. Uống sau ăn 30p.", 2)}
                className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 ${copiedGift === 2 ? 'bg-green-100 text-green-700' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}
              >
                {copiedGift === 2 ? <><CheckCircle2 className="w-4 h-4" /> Đã sao chép</> : <><Copy className="w-4 h-4" /> Chép Công Thức</>}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Hỏi Đáp */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Câu Hỏi Thường Gặp</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-3 rounded-full"></div>
            <p className="text-slate-600 text-sm">Giải đáp những thắc mắc phổ biến về khám chữa bệnh YHCT.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:text-primary transition-colors text-base md:text-lg"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-90 text-primary' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm md:text-base border-t border-slate-200/60 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
