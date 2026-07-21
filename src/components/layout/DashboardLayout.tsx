"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronDown,
  Clock,
  ChevronRight,
  Home,
  BookOpen,
  Wrench,
  MessageCircle,
  Stethoscope
} from "lucide-react";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuGroup {
  name: string;
  items: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href: string;
  isDropdown?: boolean;
  dropdownWidth?: string;
  dropdownCols?: string;
  groups?: MenuGroup[];
  simpleItems?: SubMenuItem[];
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState(28);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next > 45 ? 45 : next < 15 ? 15 : next;
      });
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const menuItems: MenuItem[] = [
    { title: "Trang chủ", href: "/" },
    { 
      title: "Kiến thức", 
      href: "/blog",
      isDropdown: true,
      dropdownWidth: "w-[500px]",
      dropdownCols: "grid-cols-2",
      groups: [
        {
          name: "Y học cổ truyền",
          items: [
            { title: "Đông y", href: "/blog?category=Đông+y" },
            { title: "Thuốc Nam", href: "/blog?category=Thuốc+Nam" },
            { title: "Dưỡng sinh", href: "/blog?category=Dưỡng+sinh" },
          ]
        },
        {
          name: "Công nghệ & Kinh doanh",
          items: [
            { title: "SEO", href: "/blog?category=SEO" },
            { title: "Marketing", href: "/blog?category=Marketing" },
            { title: "Make Money Online", href: "/blog?category=Make+Money+Online" },
          ]
        },
        {
          name: "Tri thức & Cuộc sống",
          items: [
            { title: "Review", href: "/blog?category=Review" },
            { title: "Thủ thuật", href: "/blog?category=Thủ+thuật" },
            { title: "Tản mạn", href: "/blog?category=Tản+mạn" },
          ]
        },
        {
          name: "Công Nghệ & AI",
          items: [
            { title: "AI Tools", href: "/blog?category=AI+Tools" },
            { title: "Prompt Engineering", href: "/blog?category=Prompt+Engineering" },
            { title: "Công cụ số", href: "/blog?category=Công+cụ+số" },
          ]
        }
      ]
    },
    { title: "Dịch vụ phòng khám", href: "/dich-vu" },
    { 
      title: "Công cụ & Tiện ích", 
      href: "/tools",
      isDropdown: true,
      dropdownWidth: "w-[900px] -left-[400px]",
      dropdownCols: "grid-cols-4",
      groups: [
        {
          name: "Content SEO",
          items: [
            { title: "Topical Map", href: "/topical-map" },
            { title: "Search Intent", href: "/search-intent" },
            { title: "Viết Bài AI", href: "/viet-bai-ai" },
            { title: "Viết Lại Bài", href: "/viet-lai-bai" },
            { title: "Viết bài MXH", href: "/viet-bai-mxh" },
            { title: "Schema Markup", href: "/schema-markup" },
          ]
        },
        {
          name: "Index Engine",
          items: [
            { title: "Gửi Index Bing", href: "/gui-index-bing" },
            { title: "Gửi Index Google", href: "/gui-index-google" },
            { title: "Kiểm tra Google Index", href: "/kiem-tra-google-index" },
            { title: "Kiểm tra từ khóa", href: "/kiem-tra-tu-khoa" },
            { title: "Keyword Cannibalization", href: "/keyword-cannibalization" },
          ]
        },
        {
          name: "SEO Ảnh",
          items: [
            { title: "Metadata & Geotag", href: "/metadata-geotag" },
            { title: "Nén Ảnh Hàng Loạt", href: "/nen-anh-hang-loat" },
            { title: "Tạo Ảnh AI", href: "/tao-anh-ai" },
          ]
        },
        {
          name: "Mạng xã hội & Ads",
          items: [
            { title: "Tìm UID Facebook", href: "/find-uid-facebook" },
            { title: "Tải Video TikTok", href: "/tai-video-tiktok" },
            { title: "Tải Video FB/Reels", href: "/tai-video-fb-reels" },
          ]
        },
        {
          name: "Tài chính & Đời sống",
          items: [
            { title: "Tạo mã VietQR nhanh", href: "/vietqr" },
            { title: "Tính lãi suất vay", href: "/tinh-lai-suat-vay" },
            { title: "Lịch vạn niên", href: "/lich-van-nien" },
            { title: "Chữ không dấu VN", href: "/chu-khong-dau-vn" },
          ]
        },
        {
          name: "Code Tools",
          items: [
            { title: "JSON Formatter", href: "/json-formatter" },
            { title: "SQL Formatter", href: "/sql-formatter" },
            { title: "CSS/JS Minifier", href: "/css-js-minifier" },
            { title: "Cron Generator", href: "/cron-generator" },
            { title: "HTML Entities", href: "/html-entities" },
          ]
        },
        {
          name: "Mạng & Bảo mật",
          items: [
            { title: "Port Checker", href: "/port-checker" },
            { title: "IP Address Search", href: "/ip-address-search" },
            { title: "IPv4 to IPv6", href: "/ipv4-to-ipv6" },
            { title: "Security Headers", href: "/security-headers" },
          ]
        },
        {
          name: "AI Assist & Tiện ích",
          items: [
            { title: "Thư viện tổng hợp", href: "/tools" },
            { title: "Continue Writing", href: "/continue-writing" },
            { title: "YouTube Name Gen", href: "/youtube-name-gen" },
            { title: "FAQ Generator", href: "/faq-generator" },
            { title: "Word Counter Pro", href: "/word-counter-pro" },
            { title: "Markdown to HTML", href: "/markdown-to-html" },
            { title: "Tạo khung avatar", href: "/tao-khung-avatar" },
            { title: "QR Code", href: "/qr-code" },
          ]
        }
      ]
    },
    { title: "Giới thiệu", href: "/gioi-thieu" },
  ];

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-slate-800">
      
      {/* Top Bar - Thông tin liên hệ nhanh */}
      <div className="bg-primary text-white py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> Tổ 10, Quan Triều, TP. Thái Nguyên
          </span>
          <a href="tel:0982581222" className="flex items-center gap-2 font-bold hover:underline">
            <Phone className="w-3.5 h-3.5" /> Hotline / Zalo: 0982.581.222
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-shadow duration-200 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 xl:gap-3 shrink-0">
            <div className="w-10 h-10 xl:w-12 xl:h-12 bg-primary text-white flex items-center justify-center text-xl xl:text-2xl font-bold rounded-lg shadow-sm">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-lg xl:text-xl font-heading font-bold text-slate-900 leading-tight">
                Đinh Khánh Tùng
              </span>
              <span className="text-xs xl:text-sm text-primary font-semibold hidden sm:block">
                Thầy thuốc YHCT & Blogger
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (pathname === '/blog' && item.href.includes('/blog'));
              
              if (item.isDropdown) {
                return (
                  <div key={item.title} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors whitespace-nowrap ${
                        isActive
                          ? "relative text-primary font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full"
                          : "text-slate-700 hover:text-primary font-medium"
                      }`}
                    >
                      {item.title} <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px] overflow-hidden ${item.dropdownWidth || 'left-0'}`}>
                      {item.groups ? (
                        <div className={`grid gap-4 p-4 ${item.dropdownCols || 'grid-cols-2'}`}>
                          {item.groups.map((group) => (
                            <div key={group.name} className="space-y-2">
                              <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">{group.name}</h5>
                              <ul className="space-y-1">
                                {group.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link href={subItem.href} className="block px-2 py-1.5 text-sm font-semibold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-md transition-colors">
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-2 w-56">
                          {item.simpleItems?.map((subItem) => (
                            <Link key={subItem.href} href={subItem.href} className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors">
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors whitespace-nowrap ${
                    isActive
                      ? "relative text-primary font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-slate-700 hover:text-primary font-medium"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main key={pathname} className="flex-1 animate-page-fade-in">
        {children}
      </main>

      {/* Main Footer */}
      <footer className="bg-[#1e293b] text-slate-300 pt-12 pb-28 lg:pb-12 px-4 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#15803d] text-white flex items-center justify-center text-xl font-bold rounded-lg shadow-inner">
                T
              </div>
              <span className="text-xl font-heading font-bold text-white">Đinh Khánh Tùng</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Nơi chia sẻ những kiến thức hữu ích về Y học cổ truyền, ứng dụng Công nghệ AI và góc nhìn tản mạn về cuộc sống muôn màu.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-heading font-bold text-white border-b border-slate-700 pb-2">Liên Hệ</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <a 
                  href="https://maps.google.com/?q=Tổ+10,+Quan+Triều,+Thái+Nguyên" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <img 
                    src="https://i.ibb.co/fdtwLz7F/397619b871de.png" 
                    alt="Google Maps" 
                    className="w-5 h-5 shrink-0 object-contain group-hover:scale-110 transition-transform" 
                  />
                  <span>Tổ 10, Quan Triều, TP Thái Nguyên</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="tel:0982581222" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-5 h-5 bg-[#15803d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-white">0982.581.222</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://zalo.me/0982581222" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <img 
                    src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png" 
                    alt="Zalo" 
                    className="w-5 h-5 shrink-0 object-contain group-hover:scale-110 transition-transform" 
                  />
                  <span>Zalo: Đinh Khánh Tùng</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/dinhkhanhtung" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <img 
                    src="https://i.ibb.co/tTxPVxhX/facebook-page.png" 
                    alt="Facebook" 
                    className="w-5 h-5 shrink-0 object-contain group-hover:scale-110 transition-transform" 
                  />
                  <span>Facebook Cá Nhân</span>
                </a>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-700/40 pt-2.5">
                <a 
                  href="https://g.page/r/CUXNMH8bivYcEAI/review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <img 
                    src="https://img.icons8.com/color/144/google-logo.png" 
                    alt="Google Review" 
                    className="w-5 h-5 shrink-0 object-contain group-hover:scale-110 transition-transform" 
                  />
                  <span className="font-bold text-amber-400">Đánh giá Google 5 Sao ⭐</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-heading font-bold text-white border-b border-slate-700 pb-2">Thông Tin Hữu Ích</h4>
            <ul className="space-y-2.5 text-sm mb-4">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#15803d]" /> Trang chủ</Link></li>
              <li><Link href="/blog?category=Đông+y" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#15803d]" /> Kiến thức Y Học</Link></li>
              <li><Link href="/gioi-thieu" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#15803d]" /> Giới thiệu Phòng Khám</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#15803d]" /> Công cụ hỗ trợ</Link></li>
              <li><Link href="/chinh-sach-bao-mat" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#15803d]" /> Chính sách bảo mật</Link></li>
              <li><Link href="/dieu-khoan-su-dung" className="hover:text-white transition-colors flex items-center gap-1"><ChevronRight className="w-3 h-3 text-[#15803d]" /> Điều khoản sử dụng</Link></li>
            </ul>
            <div className="border-t border-slate-700/60 pt-4">
              <div className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Giờ Làm Việc</div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex justify-between"><span>Thứ 2 - Thứ 6:</span><span className="font-bold text-white">08:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Thứ 7 - Chủ Nhật:</span><span className="font-bold text-white">08:00 - 17:00</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-heading font-bold text-white border-b border-slate-700 pb-2">Ủng Hộ (Donate)</h4>
            <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-xl space-y-2.5 text-xs text-slate-300">
              <div className="font-bold text-slate-200 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Ngân Hàng BIDV
              </div>
              <div>Chủ tài khoản: <strong className="text-white">ĐINH KHÁNH TÙNG</strong></div>
              <div>Số tài khoản: <strong className="text-white select-all">0982581222</strong></div>
              <div className="text-[10px] text-slate-400 pt-1 leading-relaxed border-t border-slate-700/40">
                Ủng hộ duy trì máy chủ Blog và các công cụ tiện ích miễn phí cho cộng đồng.
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-700 mt-12 pt-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Đang trực tuyến: <strong className="text-white">{onlineCount}</strong> người truy cập</span>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Blog Đinh Khánh Tùng. Created with ❤️ by Đinh Khánh Tùng. <br className="sm:hidden" />Tài trợ bởi <a href="https://kimke.store/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#22c55e] font-semibold transition-colors">kimke.store</a>.
          </p>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <span className="text-lg font-heading font-bold text-slate-900">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-700">
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-28">
            {menuItems.map((item) => {
              if (item.isDropdown) {
                const isOpen = openMobileDropdown === item.title;
                return (
                  <div key={item.title} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenMobileDropdown(isOpen ? null : item.title)}
                      className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-slate-800"
                    >
                      {item.title}
                      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 space-y-4 border-t border-slate-200 pt-4 bg-white">
                        {item.groups ? (
                          item.groups.map(group => (
                            <div key={group.name}>
                              <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">{group.name}</div>
                              <ul className="space-y-2">
                                {group.items.map(subItem => (
                                  <li key={subItem.href}>
                                    <Link 
                                      href={subItem.href} 
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block pl-2 py-1 text-slate-700 font-semibold text-sm hover:text-[#15803d]"
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          <ul className="space-y-3">
                            {item.simpleItems?.map(subItem => (
                              <li key={subItem.href}>
                                <Link 
                                  href={subItem.href} 
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block pl-2 py-1 text-slate-700 font-semibold text-sm hover:text-[#15803d]"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-50 border border-slate-100 hover:bg-[#15803d] hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-slate-200 grid grid-cols-2 gap-3">
              <a
                href="tel:0982581222"
                className="flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white px-4 py-3.5 rounded-xl text-sm font-bold shadow-sm transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Gọi Điện Thoại
              </a>
              <a
                href="https://zalo.me/0982581222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3.5 rounded-xl text-sm font-bold shadow-sm transition-transform active:scale-95"
              >
                <img 
                  src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png" 
                  alt="Zalo" 
                  className="w-4 h-4 object-contain brightness-0 invert" 
                />
                Nhắn Zalo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom App Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 pb-safe shadow-[0_-4px_10px_rgb(0,0,0,0.06)]">
        <div className="flex items-center justify-around h-16 px-2">
          
          <Link href="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-transform active:scale-95 ${pathname === '/' ? 'text-[#15803d]' : 'text-slate-500 hover:text-slate-900'}`}>
            <Home className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Trang chủ</span>
          </Link>
          
          <Link href="/blog" className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-transform active:scale-95 ${pathname === '/blog' ? 'text-[#15803d]' : 'text-slate-500 hover:text-slate-900'}`}>
            <BookOpen className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Kiến thức</span>
          </Link>

          {/* Middle Floating Button */}
          <Link 
            href="/dich-vu" 
            className="relative -top-5 flex flex-col items-center justify-center w-14 h-14 bg-[#15803d] text-white rounded-full shadow-lg shadow-emerald-600/30 border-4 border-white transition-transform active:scale-90 shrink-0"
            aria-label="Dịch vụ phòng khám"
          >
            <Stethoscope className="w-6 h-6 animate-pulse" />
          </Link>

          <Link href="/tools" className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-transform active:scale-95 ${pathname === '/tools' ? 'text-[#15803d]' : 'text-slate-500 hover:text-slate-900'}`}>
            <Wrench className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Công cụ</span>
          </Link>

          <a 
            href="https://zalo.me/0982581222" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center w-full h-full space-y-1 transition-transform active:scale-95 text-slate-500 hover:text-blue-600"
          >
            <div className="relative flex items-center justify-center">
              <img 
                src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png" 
                alt="Zalo" 
                className="w-5 h-5 object-contain" 
              />
              <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white animate-ping"></span>
              <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider">Zalo</span>
          </a>

        </div>
      </div>

      {/* Desktop Floating Zalo Contact Button */}
      <div className="hidden lg:flex fixed lg:right-6 bottom-24 z-40">
        <a 
          href="https://zalo.me/0982581222" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Liên hệ Zalo"
          className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200/80 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <img 
            src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png" 
            alt="Zalo" 
            className="w-6 h-6 object-contain group-hover:rotate-6 transition-transform" 
          />
        </a>
      </div>
    </div>
  );
}
