"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Map,
  Compass,
  Sparkles,
  FileText,
  Share2,
  Code2,
  Send,
  Search,
  CheckCircle2,
  TrendingUp,
  Activity,
  Tag,
  Minimize2,
  Image as ImageIcon,
  ArrowRightLeft,
  User,
  QrCode,
  FileJson,
  Database,
  Zap,
  Calendar,
  Globe,
  Terminal,
  ArrowLeftRight,
  Lock,
  PenTool,
  Video,
  HelpCircle,
  Hash,
  Download,
  Percent,
  CalendarDays,
  Type,
  Wand2,
  Settings,
} from "lucide-react";

interface ToolItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  isReady: boolean;
}

interface ToolGroup {
  groupName: string;
  description: string;
  items: ToolItem[];
}

const TOOL_GROUPS: ToolGroup[] = [
  {
    groupName: "Content SEO",
    description: "Công cụ phân tích chủ đề, xây dựng thực thể và lập kế hoạch từ khóa.",
    items: [
      { title: "Topical Map AI", description: "Lập sơ đồ Topical Map phủ kín chủ đề và tạo Topical Authority.", href: "/topical-map", icon: <Map className="w-5 h-5" />, isReady: true },
      { title: "Search Intent AI", description: "Phân tích ý định tìm kiếm của từ khóa tự động bằng trí tuệ nhân tạo.", href: "/search-intent", icon: <Compass className="w-5 h-5" />, isReady: true },
      { title: "Viết Bài AI", description: "Sản xuất bài viết chuẩn SEO chất lượng cao chỉ với một click.", href: "/viet-bai-ai", icon: <Sparkles className="w-5 h-5" />, isReady: true },
      { title: "Viết Lại Bài", description: "Spin content, làm mới và tối ưu hóa bài viết cũ tránh trùng lặp.", href: "/viet-lai-bai", icon: <FileText className="w-5 h-5" />, isReady: true },
      { title: "Viết bài MXH", description: "Tạo nội dung viral đăng tải Facebook, Fanpage và các mạng xã hội.", href: "/viet-bai-mxh", icon: <Share2 className="w-5 h-5" />, isReady: true },
      { title: "Schema Markup", description: "Tự động sinh mã cấu trúc Schema JSON-LD hỗ trợ công cụ tìm kiếm.", href: "/schema-markup", icon: <Code2 className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "Index Engine",
    description: "Gửi yêu cầu thu thập thông tin và kiểm tra trạng thái lập chỉ mục.",
    items: [
      { title: "Gửi Index Bing", description: "Gửi URL trực tiếp tới Bing Indexing API để lập chỉ mục ngay.", href: "/gui-index-bing", icon: <Send className="w-5 h-5" />, isReady: true },
      { title: "Gửi Index Google", description: "Gửi URL trực tiếp thông qua Google Indexing API siêu tốc.", href: "/gui-index-google", icon: <Search className="w-5 h-5" />, isReady: true },
      { title: "Kiểm tra Google Index", description: "Quét trạng thái đã được lập chỉ mục trên Google Search Console.", href: "/kiem-tra-google-index", icon: <CheckCircle2 className="w-5 h-5" />, isReady: true },
      { title: "Kiểm tra từ khóa", description: "Theo dõi thứ hạng của các từ khóa chiến lược trên kết quả tìm kiếm.", href: "/kiem-tra-tu-khoa", icon: <TrendingUp className="w-5 h-5" />, isReady: true },
      { title: "Keyword Cannibalization", description: "Phát hiện hiện tượng ăn thịt từ khóa giữa các bài viết trong web.", href: "/keyword-cannibalization", icon: <Activity className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "SEO Ảnh",
    description: "Tối ưu hóa hình ảnh chuẩn Google Image SEO và Geotagging.",
    items: [
      { title: "Metadata & Geotag", description: "Gắn tọa độ GPS kinh độ/vĩ độ vào ảnh để làm SEO Local bản đồ.", href: "/metadata-geotag", icon: <Tag className="w-5 h-5" />, isReady: true },
      { title: "Nén Ảnh Hàng Loạt", description: "Giảm dung lượng ảnh, tự động chuyển đổi sang định dạng WebP thế hệ mới.", href: "/nen-anh-hang-loat", icon: <Minimize2 className="w-5 h-5" />, isReady: true },
      { title: "Tạo Ảnh AI", description: "Sinh hình ảnh thực tế chất lượng cao làm ảnh bìa cho bài viết.", href: "/tao-anh-ai", icon: <ImageIcon className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "Mạng xã hội & Ads",
    description: "Trích xuất thông tin tài khoản và tải các tài nguyên truyền thông.",
    items: [
      { title: "Tìm UID Facebook", description: "Quét và lấy số định danh cá nhân UID từ bất kỳ đường link Facebook nào.", href: "/find-uid-facebook", icon: <Share2 className="w-5 h-5" />, isReady: true },
      { title: "Tải Video TikTok", description: "Tải video TikTok độ phân giải cao không dính logo watermark.", href: "/tai-video-tiktok+(Không+Watermark)", icon: <Download className="w-5 h-5" />, isReady: true },
      { title: "Tải Video FB/Reels", description: "Lấy link tải trực tiếp các video Facebook Reels HD, FullHD siêu nhanh.", href: "/tai-video-fb-reels", icon: <Video className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "Tài chính & Đời sống",
    description: "Công cụ chuyển khoản nhanh và tính toán thông số đời sống.",
    items: [
      { title: "Tạo mã VietQR nhanh", description: "Sinh QR chuyển khoản Napas247 điền sẵn số tiền, nội dung giao dịch.", href: "/vietqr", icon: <QrCode className="w-5 h-5" />, isReady: true },
      { title: "Tính lãi suất vay", description: "Bảng tính lãi trả góp, số dư giảm dần theo tháng chi tiết.", href: "/tinh-lai-suat-vay", icon: <Percent className="w-5 h-5" />, isReady: true },
      { title: "Lịch vạn niên", description: "Tra cứu âm lịch, ngày hoàng đạo và các ngày lễ truyền thống Việt Nam.", href: "/lich-van-nien", icon: <CalendarDays className="w-5 h-5" />, isReady: true },
      { title: "Chữ không dấu VN", description: "Chuyển tiếng Việt có dấu sang không dấu phục vụ làm URL, code.", href: "/chu-khong-dau-vn", icon: <Type className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "Code Tools",
    description: "Định dạng, tối ưu hóa mã nguồn lập trình cho nhà phát triển.",
    items: [
      { title: "JSON Formatter", description: "Làm đẹp, kiểm tra cú pháp và nén các chuỗi dữ liệu JSON.", href: "/json-formatter", icon: <FileJson className="w-5 h-5" />, isReady: true },
      { title: "SQL Formatter", description: "Định dạng các câu lệnh SQL Database dễ nhìn và chuẩn hóa.", href: "/sql-formatter", icon: <Database className="w-5 h-5" />, isReady: true },
      { title: "CSS/JS Minifier", description: "Nén code tối đa để tăng tốc độ tải trang web thực tế.", href: "/css-js-minifier", icon: <Zap className="w-5 h-5" />, isReady: true },
      { title: "Cron Generator", description: "Tạo cấu trúc biểu thức hẹn giờ Cron định kỳ tự động hóa server.", href: "/cron-generator", icon: <Calendar className="w-5 h-5" />, isReady: true },
      { title: "HTML Entities", description: "Mã hóa và giải mã các thực thể HTML phục vụ thiết kế web.", href: "/html-entities+Converter", icon: <Globe className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "Mạng & Bảo mật",
    description: "Công cụ kiểm định bảo mật hệ thống và thông tin IP.",
    items: [
      { title: "Port Checker", description: "Kiểm tra cổng kết nối trên địa chỉ IP/Server có đang mở hay không.", href: "/port-checker", icon: <Terminal className="w-5 h-5" />, isReady: true },
      { title: "IP Address Search", description: "Tra cứu quốc gia, nhà mạng ISP và vị trí địa lý của IP.", href: "/ip-address-search", icon: <Compass className="w-5 h-5" />, isReady: true },
      { title: "IPv4 to IPv6", description: "Chuyển đổi địa chỉ mạng IPv4 sang tiêu chuẩn IPv6 thế hệ mới.", href: "/ipv4-to-ipv6+Converter", icon: <ArrowLeftRight className="w-5 h-5" />, isReady: true },
      { title: "Security Headers", description: "Phân tích độ an toàn của cấu hình HTTP Response Headers.", href: "/security-headers", icon: <Lock className="w-5 h-5" />, isReady: true },
    ],
  },
  {
    groupName: "AI Assist & Tiện ích",
    description: "Sản xuất nội dung và tạo lập tài nguyên số nhanh bằng AI.",
    items: [
      { title: "Continue Writing AI", description: "Nhập một đoạn văn ngắn, AI sẽ tiếp tục viết tiếp theo mạch logic.", href: "/continue-writing+AI", icon: <PenTool className="w-5 h-5" />, isReady: true },
      { title: "YouTube Name Gen", description: "Sinh tên kênh YouTube hay, ấn tượng và tối ưu hóa thương hiệu.", href: "/youtube-name-gen", icon: <Video className="w-5 h-5" />, isReady: true },
      { title: "FAQ Generator", description: "Tự động sinh bộ câu hỏi thường gặp FAQ chuẩn SEO cho sản phẩm.", href: "/faq-generator", icon: <HelpCircle className="w-5 h-5" />, isReady: true },
      { title: "Word Counter Pro", description: "Đếm số ký tự, đếm từ, ước tính thời gian đọc văn bản chuyên sâu.", href: "/word-counter-pro", icon: <Hash className="w-5 h-5" />, isReady: true },
      { title: "Markdown to HTML", description: "Chuyển định dạng tài liệu Markdown sang HTML code chuẩn SEO.", href: "/markdown-to-html", icon: <ArrowRightLeft className="w-5 h-5" />, isReady: true },
      { title: "Tạo khung avatar", description: "Ghép khung viền (frame) ủng hộ sự kiện vào ảnh đại diện cá nhân.", href: "/tao-khung-avatar", icon: <User className="w-5 h-5" />, isReady: true },
      { title: "QR Code Generator", description: "Tạo mã phản hồi nhanh QR Code cho link, văn bản, mật khẩu wifi.", href: "/qr-code+Generator", icon: <QrCode className="w-5 h-5" />, isReady: true },
    ],
  },
];

export default function ToolsHubPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Tìm kiếm công cụ
  const filteredGroups = TOOL_GROUPS.map((group) => {
    const matchedItems = group.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      items: matchedItems,
    };
  }).filter((group) => group.items.length > 0);

  return (
    <div className="py-6 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/85 pb-4 md:pb-6">
        <div className="space-y-1.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-wider">
            <Settings className="w-3.5 h-3.5" />
            Thư viện số tiện ích
          </span>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            Thư Viện Công Cụ Đa Năng
          </h2>
          <p className="text-sm text-slate-500 font-semibold">
            Tổng hợp toàn bộ các công cụ hỗ trợ SEO, quản trị mạng, thanh toán tài chính và lập trình cho bạn sử dụng khi cần.
          </p>
        </div>

        {/* Khung tìm kiếm nhanh */}
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm công cụ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
          />
        </div>
      </div>

      {/* Grid danh bạ công cụ */}
      <div className="space-y-6 md:space-y-10">
        {filteredGroups.map((group) => (
          <div key={group.groupName} className="space-y-3 md:space-y-4">
            <div className="border-l-4 border-emerald-500 pl-3">
              <h3 className="text-lg font-black text-slate-800 leading-none">
                {group.groupName}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-1">
                {group.description}
              </p>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 px-4 -mx-4 scrollbar-none snap-x snap-mandatory scroll-smooth sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:mx-0 sm:px-0">
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block border border-slate-200 rounded-2xl p-6 hover:border-[#15803d] hover:shadow-sm transition-all group text-center bg-white w-[240px] min-w-[240px] shrink-0 snap-center sm:w-auto"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors ${
                    item.isReady
                      ? "bg-slate-100 group-hover:bg-[#15803d] text-slate-600 group-hover:text-white"
                      : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                  }`}>
                    {React.cloneElement(item.icon as any, { className: "w-6 h-6" })}
                  </div>

                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#15803d] transition-colors">
                      {item.title}
                    </h3>
                    {!item.isReady && (
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded tracking-wide">
                        Beta
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-semibold">
            Không tìm thấy công cụ nào phù hợp với từ khóa tìm kiếm.
          </div>
        )}
      </div>
    </div>
  );
}
