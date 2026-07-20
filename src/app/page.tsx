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
  QrCode,
  BookOpen,
  MessageCircle,
  Globe,
  Bot,
  Video,
  Layers,
  Megaphone,
  Shield,
  Edit3,
  HeartPulse,
  ChevronDown,
  ChevronRight,
  Copy,
  Star,
  Gift,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Compass
} from "lucide-react";

const SERVICES = [
  {
    title: "Thiết kế Website",
    desc: "Website chuyên nghiệp, chuẩn SEO, tối ưu tốc độ tải trang, tăng nhận diện thương hiệu.",
    icon: "Globe",
    category: "software",
    image: "https://i.ibb.co/hJ24SCDJ/web-design-service-image.png"
  },
  {
    title: "Phát triển ứng dụng Android",
    desc: "Ứng dụng chuyên nghiệp theo yêu cầu thực tế, bảo mật và mượt mà.",
    icon: "Smartphone",
    category: "software",
    image: "https://i.ibb.co/Rk7snxFW/android-app-service-image.png"
  },
  {
    title: "Xây dựng AI Agent",
    desc: "Tạo chatbot và trợ lý AI thông minh, tự động hóa CSKH 24/7.",
    icon: "Bot",
    category: "software",
    image: "https://i.ibb.co/VXz3Dv5/ai-agent-service-image.png"
  },
  {
    title: "Chạy quảng cáo Facebook",
    desc: "Tiếp cận chính xác khách hàng tiềm năng, tối ưu chi phí quảng cáo.",
    icon: "Megaphone",
    category: "marketing",
    image: "https://i.ibb.co/bjsrRMc0/fb-ads-service-image.png"
  },
  {
    title: "Quản lý fanpage & Nội dung",
    desc: "Xây dựng nội dung Fanpage chuyên nghiệp, gia tăng tương tác tự nhiên.",
    icon: "Edit3",
    category: "marketing",
    image: "https://i.ibb.co/NdTcQWqs/fb-content-service-image.png"
  },
  {
    title: "Thiết kế Đồ họa & Video",
    desc: "Hình ảnh và video ngắn chất lượng cao, phục vụ truyền thông xã hội.",
    icon: "Video",
    category: "marketing",
    image: "https://i.ibb.co/4wVDkPHz/graphic-design-service-image.png"
  },
  {
    title: "Hỗ trợ tài khoản Facebook",
    desc: "Mở khóa, bảo mật tài khoản cá nhân/doanh nghiệp, phòng ngừa hack.",
    icon: "Shield",
    category: "ops",
    image: "https://i.ibb.co/LdgWmp0L/fb-support-service-image.png"
  },
  {
    title: "Tư vấn thương hiệu & kênh số",
    desc: "Định hướng phát triển thương hiệu cá nhân và xây dựng kênh số hiệu quả.",
    icon: "Compass",
    category: "ops",
    image: "https://i.ibb.co/S7MnHywF/brand-consulting-service-image.jpg"
  },
  {
    title: "Dịch vụ theo yêu cầu",
    desc: "Các giải pháp kỹ thuật, tích hợp hệ thống linh hoạt theo nhu cầu riêng.",
    icon: "Layers",
    category: "ops",
    image: "https://i.ibb.co/mr0p8Vz4/custom-solutions-service-image.jpg"
  }
];

const IconMap: { [key: string]: React.ComponentType<any> } = {
  Megaphone,
  Edit3,
  Shield,
  Globe,
  Smartphone,
  Bot,
  Video,
  Compass,
  Layers
};

interface Post {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  type: "y-hoc" | "cong-nghe";
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
    excerpt: "Việt Nam có nguồn cây thuốc Nam vô cùng phong phú. Việc ứng dụng đúng cách đem lại hiệu quả bền vững."
  },
  {
    id: 3,
    slug: "ky-thuat-tap-go-10-ngon-tay-dung-cach-khong-can-nhin-ban-phim-2026",
    title: "Kỹ Thuật Tập Gõ 10 Ngón Tay Đúng Cách, Không Cần Nhìn Bàn Phím",
    category: "Thủ Thuật",
    type: "cong-nghe",
    date: "01/06/2026",
    author: "Thầy thuốc Đinh Khánh Tùng",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Hướng dẫn tập gõ 10 ngón tay chuẩn 2026. Bí quyết làm chủ bàn phím, tăng tốc độ WPM."
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
    excerpt: "Trà cổ dược kết hợp các thảo dược dưỡng tâm an thần giúp giải tỏa căng thẳng thần kinh."
  },
  {
    id: 4,
    slug: "cach-xay-dung-topical-authority-thong-tri-cong-cu-tim-kiem",
    title: "Cách xây dựng Topical Authority thống trị công cụ tìm kiếm",
    category: "SEO",
    type: "cong-nghe",
    date: "12/07/2026",
    author: "Thầy thuốc Đinh Khánh Tùng",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Topical Authority là yếu tố cốt lõi giúp website đạt thứ hạng cao mà không cần quá nhiều backlinks."
  }
];

const MY_APPS = [
  {
    title: "MoneyFlow Smart",
    desc: " MoneyFlow Smart là giải pháp quản lý tài chính cá nhân hiện đại, trực quan và dễ sử dụng trên Android.",
    image: "https://play-lh.googleusercontent.com/YNu9gjjD3oRoLdRVmoeLIepStqxGT3qOwJRHn-oVaGWrbryUcadKTk93gAnkshui4xOyeBlPr0FP60V9QHW2Nc8",
    link: "https://play.google.com/store/apps/details?id=com.financeapp.personal_finance_app",
    tag: "Tài chính",
    type: "Android App"
  },
  {
    title: "SellEasy - Nhật Ký Bán Hàng",
    desc: "SellEasy là ứng dụng quản lý bán hàng toàn diện, giúp doanh nghiệp quản lý kho, doanh thu hiệu quả.",
    image: "https://play-lh.googleusercontent.com/N4WG5Wf3AUlKC4ISS1NtvXIokA_9vZ-ezsPZ6pwHvSatVghbJRrBvw0iIUWMyv_HRGPKt0pAK5dFTNowpwfLfg",
    link: "https://play.google.com/store/apps/details?id=com.dinhkhanhtung.selleasy",
    tag: "Bán hàng",
    type: "Android App"
  },
  {
    title: "Vidu Family",
    desc: "Ứng dụng theo dõi, lập kế hoạch và quản lý tài chính thông minh cho các thành viên trong gia đình.",
    image: "https://i.ibb.co/gFZv6Fff/vidu-family-og-share.jpg",
    link: "https://vidu-family.vercel.app/",
    tag: "Chi tiêu gia đình",
    type: "Web App"
  },
  {
    title: "Kim Kê",
    desc: "Hệ thống quản lý chuyên sâu cho cửa hàng tiệm gà rán, tối ưu hóa quy trình order và báo cáo doanh thu.",
    image: "https://i.ibb.co/RpMx8DcP/kimke-og-share.jpg",
    link: "https://kimke.vercel.app/",
    tag: "Sàn thương mại",
    type: "Web App"
  },
  {
    title: "Dịch Tâm",
    desc: "Tra cứu, học tập và ứng dụng Dịch học vào đời sống một cách khoa học và dễ hiểu.",
    image: "https://i.ibb.co/jv4f1xVZ/dichtam-og-share.jpg",
    link: "https://dichtam.vercel.app/",
    tag: "Dịch lý số",
    type: "Web App"
  },
  {
    title: "Thiên Thư Công Sở",
    desc: "Chia sẻ bí quyết, kỹ năng và tư duy ứng xử thông minh chốn công sở giúp bạn thăng tiến nhanh chóng.",
    image: "https://i.ibb.co/k6hN7dWY/thienthucongso-og-share.jpg",
    link: "https://thienthucongso.vercel.app/",
    tag: "Mưu lược công sở",
    type: "Web App"
  },
  {
    title: "TG Sender",
    desc: "Công cụ tự động gửi tin nhắn giới thiệu sản phẩm đến hàng ngàn khách hàng trên Telegram chỉ với 1 click.",
    image: "https://i.ibb.co/Gvrj2j4m/tgsender-og-share.jpg",
    link: "https://tg-bulk-sender.vercel.app/",
    tag: "Telegram Auto",
    type: "Web App"
  },
  {
    title: "Tiền Mãn Kinh",
    desc: "Ứng dụng hỗ trợ theo dõi chu kỳ, ghi nhận triệu chứng và tư vấn sức khỏe dành riêng cho phụ nữ tuổi 40+.",
    image: "https://i.ibb.co/yBy3Fgd8/tienmankinh-og-share.jpg",
    link: "https://tienmankinh.vercel.app/",
    tag: "Sức khỏe phụ nữ",
    type: "Web App"
  },
  {
    title: "Bất Động Sản CRM",
    desc: "Hệ thống lưu trữ dữ liệu, quản lý khách hàng và phân tích thị trường bất động sản chuyên nghiệp.",
    image: "https://i.ibb.co/8Dcyf7Cv/image.png",
    link: "https://batdongsancrm.vercel.app/",
    tag: "Bất động sản",
    type: "Web App"
  },
  {
    title: "Auto Post X",
    desc: "Hệ thống lên lịch và đăng bài viết tự động lên hàng loạt Fanpage và Group Facebook tiện lợi.",
    image: "https://i.ibb.co/Kpp01Rq9/autopostx-og.png",
    link: "https://autopostx.vercel.app/",
    tag: "Facebook Auto",
    type: "Web App"
  }
];

const FAQS = [
  { q: "Phòng khám có nhận khám và tư vấn online không?", a: "Có. Tùng nhận tư vấn qua Zalo và Messenger. Bạn có thể gửi ảnh kết quả xét nghiệm, mô tả triệu chứng để Tùng phân tích và tư vấn bài thuốc phù hợp trước khi đến khám trực tiếp." },
  { q: "Một liệu trình điều trị thường kéo dài bao lâu?", a: "Tùy từng bệnh lý. Thông thường một liệu trình cơ bản từ 1–3 tháng. Các bệnh mãn tính như sỏi thận, dạ dày HP có thể cần 3–6 tháng." },
  { q: "Thuốc nam có an toàn không? Có tác dụng phụ không?", a: "Thuốc của phòng khám Thu Bẩy sử dụng 100% dược liệu thiên nhiên, không pha trộn tân dược. An toàn cho cả người cao tuổi. Tuy nhiên, cần khai báo đầy đủ bệnh nền." },
  { q: "Có thể đặt thuốc và giao hàng tận nơi không?", a: "Có. Phòng khám hỗ trợ giao thuốc qua bưu điện cho bệnh nhân ở xa. Sau khi tư vấn online và chốt phác đồ, Tùng sẽ gửi thuốc kèm hướng dẫn chi tiết." }
];

export default function Home() {
  const router = useRouter();
  const [activeBlogTab, setActiveBlogTab] = useState<"all" | "y-hoc" | "cong-nghe">("all");
  const [activeServiceTab, setActiveServiceTab] = useState<"software" | "marketing" | "ops">("software");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedGift, setCopiedGift] = useState<number | null>(null);

  const filteredPosts = FEATURED_POSTS.filter(post => activeBlogTab === "all" || post.type === activeBlogTab);
  const filteredServices = SERVICES.filter(srv => srv.category === activeServiceTab);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedGift(index);
    setTimeout(() => setCopiedGift(null), 2000);
  };

  return (
    <div className="bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 1. Hero Banner */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-block px-4 py-1.5 bg-[#15803d]/10 text-[#15803d] font-bold rounded-full text-xs uppercase tracking-wider">
                Blog Đinh Khánh Tùng
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-tight">
                Chia sẻ tri thức Y Học, Công Nghệ & Cuộc Sống
              </h1>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
                Chào bạn! Nơi đây là không gian tôi ghi chép lại những kinh nghiệm về Y học cổ truyền, những giải pháp công nghệ số và góc nhìn tản mạn về cuộc sống.
              </p>
              
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 pt-2">
                <a
                  href="https://zalo.me/0982581222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white px-3 sm:px-6 py-3.5 rounded-xl text-xs sm:text-base font-bold transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
                >
                  <img
                    src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
                    alt="Zalo"
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain brightness-0 invert shrink-0"
                  />
                  Kết Nối Zalo
                </a>
                <Link
                  href="#free-gifts"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-3 sm:px-6 py-3.5 rounded-xl text-xs sm:text-base font-bold transition-all shadow-sm active:scale-95 whitespace-nowrap"
                >
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  Nhận Quà Tặng
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="aspect-square w-full max-w-[360px] rounded-[32px] overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                <img src="/images/avatar_doctor.png" alt="Thầy thuốc Đinh Khánh Tùng" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="absolute -bottom-4 -left-2 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[240px] hidden md:flex items-center gap-3">
                <div className="bg-[#15803d]/10 p-2.5 rounded-xl text-[#15803d] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-0.5">Nơi làm việc</h4>
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
              <div className="w-16 h-1 bg-[#22c55e] mb-6 rounded-full"></div>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                Tại Phòng Chẩn Trị YHCT Thu Bẩy, chúng tôi theo đuổi phương pháp chữa bệnh toàn diện: <strong className="text-white font-bold">Trị bệnh từ gốc - Dưỡng sinh thuận tự nhiên</strong>. Tự hào kết hợp các bài thuốc quý cùng nguồn dược liệu 100% sạch.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-black text-[#22c55e] mb-1">20+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Năm Kinh Nghiệm<br/>(Từ 2003)</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-black text-[#22c55e] mb-1">10k+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Bệnh Nhân<br/>Phục Hồi</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl text-slate-900 border border-slate-200 shadow-xl">
                    <div className="w-12 h-12 bg-[#15803d]/10 text-[#15803d] rounded-xl flex items-center justify-center mb-4">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Bắt Mạch</h3>
                    <p className="text-sm text-slate-600">Khám tứ chẩn truyền thống</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl text-slate-900 border border-slate-200 shadow-xl mt-8">
                    <div className="w-12 h-12 bg-[#0284c7]/10 text-[#0284c7] rounded-xl flex items-center justify-center mb-4">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Bốc Thuốc</h3>
                    <p className="text-sm text-slate-600">Dược liệu 100% tự nhiên</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DỊCH VỤ SỐ & CÔNG NGHỆ */}
      <section className="py-8 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">Dịch Vụ Số & Công Nghệ</h2>
            <div className="w-16 h-1 bg-[#2563eb] mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-slate-600 font-light">
              Giải pháp công nghệ chuyên nghiệp giúp bạn chuyển đổi số, tối ưu hóa quy trình kinh doanh.
            </p>
            
            {/* TABS LỌC DỊCH VỤ */}
            <div className="flex bg-slate-200/50 p-1 rounded-xl w-full max-w-full md:max-w-max md:mx-auto mt-6 border border-slate-200/40 overflow-x-auto scrollbar-none whitespace-nowrap scroll-smooth">
              <button 
                onClick={() => setActiveServiceTab("software")}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shrink-0 ${activeServiceTab === "software" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                Phần Mềm & AI
              </button>
              <button 
                onClick={() => setActiveServiceTab("marketing")}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shrink-0 ${activeServiceTab === "marketing" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                Quảng Cáo & Media
              </button>
              <button 
                onClick={() => setActiveServiceTab("ops")}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shrink-0 ${activeServiceTab === "ops" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                Hỗ Trợ & Vận Hành
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 scroll-smooth w-full min-w-full">
            {filteredServices.map((srv, idx) => {
              const IconComponent = IconMap[srv.icon] || Globe;
              return (
                <div key={idx} className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 left-2 w-8 h-8 bg-white/90 text-blue-600 rounded-lg flex items-center justify-center shadow backdrop-blur-sm">
                        <IconComponent className="w-4 h-4" />
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
                      className="block w-full py-3 text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-bold text-sm rounded-xl active:scale-95"
                    >
                      Nhận báo giá
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5. DỰ ÁN NỔI BẬT (MY APPS) - MỚI */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">Dự Án Phần Mềm Đã Xây Dựng</h2>
              <div className="w-16 h-1 bg-[#2563eb] mb-4"></div>
              <p className="text-slate-600">Các ứng dụng công nghệ và hệ thống SaaS do tôi trực tiếp phát triển.</p>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scroll-smooth w-full min-w-full">
            {MY_APPS.map((app, idx) => (
              <a 
                key={idx} 
                href={app.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto group block bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                <div className="p-4">
                  <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {app.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{app.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tinh Hoa Dược Liệu & Sản phẩm */}
      <section className="py-8 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">Tinh Hoa Dược Liệu</h2>
            <div className="w-16 h-1 bg-[#15803d] mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-xl mx-auto">Bào chế thủ công từ dược liệu sạch, công thức bí truyền an toàn hiệu quả.</p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scroll-smooth w-full min-w-full">
            {/* Card 1 */}
            <div className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-slate-50 relative border-b border-slate-100 overflow-hidden">
                <img src="/images/products/product_tea.png" alt="Trà Cổ Dược" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-[#15803d] text-[11px] font-extrabold uppercase tracking-wider">Trà Thảo Mộc</div>
                
                {/* Đánh giá sao bình chọn */}
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                  <span className="text-[10px] text-slate-300 mx-1">|</span>
                  <span className="text-[10px] font-semibold text-slate-500">Đã bán 180+</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-emerald-700 transition-colors">Trà Cổ Dược Dưỡng Sinh</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Thanh lọc cơ thể, dưỡng tâm an thần, hỗ trợ giấc ngủ sâu. Phù hợp cho người căng thẳng.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-3 text-center bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm rounded-xl transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-slate-50 relative border-b border-slate-100 overflow-hidden">
                <img src="/images/products/product_oil.png" alt="Dầu Trị Liệu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-[#15803d] text-[11px] font-extrabold uppercase tracking-wider">Xoa bóp ngoài da</div>
                
                {/* Đánh giá sao bình chọn */}
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                  <span className="text-[10px] text-slate-300 mx-1">|</span>
                  <span className="text-[10px] font-semibold text-slate-500">Đã bán 320+</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-emerald-700 transition-colors">Dầu Thảo Dược Xoa Bóp</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Thông kinh lạc, giảm đau xương khớp, tê bì chân tay. Thẩm thấu sâu hiệu quả nhanh.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-3 text-center bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm rounded-xl transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-emerald-50/20 flex items-center justify-center relative border-b border-slate-100">
                <div className="w-20 h-20 bg-[#15803d]/10 rounded-full flex items-center justify-center text-[#15803d] transition-transform duration-500 group-hover:scale-110">
                   <HeartPulse className="w-9 h-9" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-[#15803d] text-[11px] font-extrabold uppercase tracking-wider">Đặc Trị</div>
                
                {/* Đánh giá sao bình chọn */}
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">4.9</span>
                  <span className="text-[10px] text-slate-300 mx-1">|</span>
                  <span className="text-[10px] font-semibold text-slate-500">Đã bán 140+</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-emerald-700 transition-colors">Cao Xương Khớp</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Hỗ trợ trị liệu đau lưng, thoái hóa đốt sống, tăng cường can thận mạnh gân cốt.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-3 text-center bg-white border-2 border-[#15803d] text-[#15803d] font-bold text-sm rounded-xl hover:bg-slate-50 transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="aspect-square bg-emerald-50/20 flex items-center justify-center relative border-b border-slate-100">
                <div className="w-20 h-20 bg-[#15803d]/10 rounded-full flex items-center justify-center text-[#15803d] transition-transform duration-500 group-hover:scale-110">
                   <Leaf className="w-9 h-9" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <div className="text-[#15803d] text-[11px] font-extrabold uppercase tracking-wider">Thư giãn</div>
                
                {/* Đánh giá sao bình chọn */}
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 ml-1">5.0</span>
                  <span className="text-[10px] text-slate-300 mx-1">|</span>
                  <span className="text-[10px] font-semibold text-slate-500">Đã bán 90+</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-emerald-700 transition-colors">Ngâm Chân Thảo Dược</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">Giúp lưu thông khí huyết, kích thích huyệt đạo gan bàn chân, mang lại giấc ngủ ngon.</p>
                <a href="https://zalo.me/0982581222" className="block w-full py-3 text-center bg-white border-2 border-[#15803d] text-[#15803d] font-bold text-sm rounded-xl hover:bg-slate-50 transition-all active:scale-95">Liên hệ tư vấn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cổng Blog - Kiến thức VỚI TABS */}
      <section className="py-8 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4">
            <div className="w-full">
              <div className="flex justify-between items-end w-full">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-1">Bài Viết Mới Nhất</h2>
                  <div className="w-16 h-1 bg-[#0f172a] rounded-full"></div>
                </div>
                <Link href="/blog" className="sm:hidden text-sm font-bold text-[#15803d] hover:text-emerald-700 flex items-center gap-1 transition-colors">
                  Xem tất cả <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* TABS ĐỂ LỌC BÀI VIẾT */}
              <div className="flex bg-slate-200/50 p-1 rounded-xl w-full max-w-full md:max-w-max mt-6 border border-slate-200/40 overflow-x-auto scrollbar-none whitespace-nowrap scroll-smooth">
                <button 
                  onClick={() => setActiveBlogTab("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeBlogTab === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  Tất cả bài viết
                </button>
                <button 
                  onClick={() => setActiveBlogTab("y-hoc")}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeBlogTab === "y-hoc" ? "bg-white text-green-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  Y Học Cổ Truyền
                </button>
                <button 
                  onClick={() => setActiveBlogTab("cong-nghe")}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeBlogTab === "cong-nghe" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  Công Nghệ & Đời Sống
                </button>
              </div>

            </div>
            <Link href="/blog" className="hidden sm:flex text-slate-900 font-bold items-center gap-2 hover:underline bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm shrink-0 active:scale-95 transition-transform">
              Đi tới Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scroll-smooth w-full min-w-full">
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => router.push(`/blog?post=${post.slug}`)}
                className="w-[280px] min-w-[280px] shrink-0 snap-start snap-center sm:snap-align-none sm:w-auto bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group animate-in fade-in zoom-in duration-300"
              >
                <div className="w-full aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold rounded-full ${post.type === "y-hoc" ? "text-green-700" : "text-blue-700"}`}>
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </div>
                </div>
              </div>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500">
                Chưa có bài viết nào trong danh mục này.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5.5. QUÀ TẶNG MIỄN PHÍ - MỚI */}
      <section id="free-gifts" className="py-8 md:py-16 bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
              <Gift className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">Quà Tặng Miễn Phí & Mẹo Hay</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-slate-600 font-light">
              Các Prompt AI thông minh và công thức dân gian hiệu quả giúp bạn chăm sóc sức khỏe chủ động ngay tại nhà.
            </p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none px-4 -mx-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 scroll-smooth">
            {/* Gift 1 */}
            <div className="w-[280px] shrink-0 snap-start snap-center md:snap-align-none md:w-auto bg-white p-6 rounded-[28px] border border-orange-200 shadow-sm relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/70 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-xl">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900">Prompt Phân Tích Bệnh</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">Dán vào ChatGPT để được gợi ý sơ bộ theo lý luận Đông Y.</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 font-mono mb-4 line-clamp-3">
                    Bạn là chuyên gia y học cổ truyền. Tôi có các triệu chứng: [điền]. Hãy phân tích theo đông y, gợi ý thảo dược phổ biến.
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy("Bạn là chuyên gia y học cổ truyền. Tôi có các triệu chứng: [điền]. Hãy phân tích theo đông y, gợi ý nguyên nhân và thảo dược phổ biến.", 1)}
                  className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 ${copiedGift === 1 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}
                >
                  {copiedGift === 1 ? <><CheckCircle2 className="w-4 h-4" /> Đã chép</> : <><Copy className="w-4 h-4" /> Chép Prompt</>}
                </button>
              </div>
            </div>

            {/* Gift 2 */}
            <div className="w-[280px] shrink-0 snap-start snap-center md:snap-align-none md:w-auto bg-white p-6 rounded-[28px] border border-orange-200 shadow-sm relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/70 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900">Trà Gừng Mật Ong</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">Hỗ trợ tiêu hóa, giảm ợ hơi, đau dạ dày cực kỳ hiệu quả.</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 mb-4 line-clamp-3">
                    - 3 lát gừng tươi hãm 300ml nước sôi<br/>- Để nguội ~60 độ C thêm 1 thìa mật ong<br/>- Uống sau ăn 30p, không uống lúc đói.
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy("TRÀ GỪNG MẬT ONG\n- 3 lát gừng tươi hãm 300ml nước sôi.\n- Để nguội 60 độ thêm 1 thìa mật ong.\n- Uống sau ăn 30p.", 2)}
                  className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 ${copiedGift === 2 ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  {copiedGift === 2 ? <><CheckCircle2 className="w-4 h-4" /> Đã lưu</> : <><Copy className="w-4 h-4" /> Lưu công thức</>}
                </button>
              </div>
            </div>

            {/* Gift 3 */}
            <div className="w-[280px] shrink-0 snap-start snap-center md:snap-align-none md:w-auto bg-white p-6 rounded-[28px] border border-orange-200 shadow-sm relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/70 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col h-full justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900">Prompt Giấc Ngủ</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">Nhờ AI lên phác đồ điều chỉnh sinh hoạt để ngủ sâu hơn.</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 font-mono mb-4 line-clamp-3">
                    Tôi đang bị mất ngủ/khó ngủ. Tuổi [tuổi]. Hãy gợi ý thói quen cần thay đổi, bài tập thư giãn và thảo dược giúp ngủ ngon.
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy("Tôi đang bị mất ngủ. Tuổi [tuổi]. Hãy gợi ý thói quen cần thay đổi, bài tập thư giãn và thảo dược giúp ngủ ngon theo YHCT.", 3)}
                  className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 ${copiedGift === 3 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}
                >
                  {copiedGift === 3 ? <><CheckCircle2 className="w-4 h-4" /> Đã chép</> : <><Copy className="w-4 h-4" /> Chép Prompt</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lời Chứng Thực Thực Tế - Marquee Cuộn Ngang */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">Phản Hồi Chân Thực</h2>
            <div className="w-16 h-1 bg-[#15803d] mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-slate-600">
              Niềm tin của hàng ngàn bệnh nhân là động lực để chúng tôi nỗ lực mỗi ngày.
            </p>
          </div>
        </div>
        
        <div className="w-full flex overflow-hidden group">
          <div className="flex gap-4 px-4 animate-marquee whitespace-nowrap min-w-max items-center">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, index) => (
              <div key={index} className="w-[180px] h-[320px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300">
                <img src={`/images/reviews/${i}.jpg`} alt={`Review ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. FAQ - HỎI ĐÁP THƯỜNG GẶP - MỚI */}
      <section className="py-8 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">Hỏi Đáp Thường Gặp</h2>
            <div className="w-16 h-1 bg-slate-400 mx-auto mb-4"></div>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2 border-t border-slate-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Kêu Gọi Hành Động (CTA) */}
      <section className="py-8 md:py-16 bg-[#15803d] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
            Sức khỏe là tài sản quý giá nhất
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
            Liên hệ ngay hôm nay để được tư vấn và xây dựng phác đồ YHCT tận gốc dành riêng cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://zalo.me/0982581222" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#15803d] font-bold rounded-xl hover:bg-slate-50 hover:shadow-md transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" />
              Zalo Tư Vấn Miễn Phí
            </a>
            <a href="tel:0982581222" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-white font-bold rounded-xl hover:bg-green-700 transition-all border-2 border-green-400 active:scale-95">
              <Phone className="w-5 h-5" />
              0982 581 222
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
