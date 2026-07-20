import fs from 'fs';
import path from 'path';

const tools = [
  // Content SEO
  { path: 'viet-bai-ai', title: 'Viết Bài AI', icon: 'PenTool', desc: 'Sử dụng trí tuệ nhân tạo để viết bài chuẩn SEO tự động.', requiresApi: true, apiName: 'OpenAI API Key' },
  { path: 'viet-lai-bai', title: 'Viết Lại Bài', icon: 'RefreshCw', desc: 'Viết lại nội dung bài viết giữ nguyên ý nghĩa nhưng cấu trúc hoàn toàn mới.', requiresApi: true, apiName: 'OpenAI API Key' },
  { path: 'viet-bai-mxh', title: 'Viết bài MXH', icon: 'Share2', desc: 'Tạo nội dung hấp dẫn cho các nền tảng mạng xã hội (Facebook, LinkedIn, Twitter...).', requiresApi: true, apiName: 'OpenAI API Key' },
  { path: 'schema-markup', title: 'Schema Markup Generator', icon: 'Code2', desc: 'Tạo mã JSON-LD Schema Markup chuẩn SEO cho website của bạn.' },

  // Index Engine
  { path: 'gui-index-bing', title: 'Gửi Index Bing', icon: 'Send', desc: 'Tự động gửi URL lên Bing Webmaster Tools để index nhanh chóng.', requiresApi: true, apiName: 'Bing API Key' },
  { path: 'gui-index-google', title: 'Gửi Index Google', icon: 'Search', desc: 'Gửi URL lên Google Search Console thông qua Google Indexing API.', requiresApi: true, apiName: 'Google API JSON' },
  { path: 'kiem-tra-google-index', title: 'Kiểm tra Google Index', icon: 'CheckCircle2', desc: 'Kiểm tra hàng loạt URL xem đã được Google index chưa.' },
  { path: 'kiem-tra-tu-khoa', title: 'Kiểm tra từ khóa', icon: 'TrendingUp', desc: 'Theo dõi thứ hạng từ khóa của website trên Google Search.' },
  { path: 'keyword-cannibalization', title: 'Keyword Cannibalization', icon: 'Activity', desc: 'Kiểm tra và phát hiện ăn thịt từ khóa trên website.' },

  // SEO Ảnh
  { path: 'metadata-geotag', title: 'Metadata & Geotag', icon: 'Tag', desc: 'Chỉnh sửa EXIF data và gắn thẻ địa lý (Geotag) cho hình ảnh.' },
  { path: 'nen-anh-hang-loat', title: 'Nén Ảnh Hàng Loạt', icon: 'Minimize2', desc: 'Nén giảm dung lượng hình ảnh hàng loạt không làm giảm chất lượng.' },
  { path: 'tao-anh-ai', title: 'Tạo Ảnh AI', icon: 'ImageIcon', desc: 'Tạo hình ảnh độc đáo bằng AI từ văn bản mô tả.', requiresApi: true, apiName: 'OpenAI API Key (DALL-E)' },

  // Mạng xã hội & Ads
  { path: 'tai-video-tiktok', title: 'Tải Video TikTok', icon: 'Download', desc: 'Tải video TikTok không logo, không watermark chất lượng cao.' },
  { path: 'tai-video-fb-reels', title: 'Tải Video FB/Reels', icon: 'Video', desc: 'Tải video từ Facebook và Facebook Reels về máy.' },

  // Tài chính & Đời sống
  { path: 'tinh-lai-suat-vay', title: 'Tính lãi suất vay', icon: 'Percent', desc: 'Công cụ tính lãi suất vay ngân hàng trả góp hàng tháng.' },
  { path: 'lich-van-nien', title: 'Lịch vạn niên', icon: 'CalendarDays', desc: 'Xem lịch âm dương, ngày tốt xấu, giờ hoàng đạo.' },
  { path: 'chu-khong-dau-vn', title: 'Chữ không dấu VN', icon: 'Type', desc: 'Chuyển đổi văn bản tiếng Việt có dấu thành không dấu nhanh chóng.' },

  // Code Tools
  { path: 'sql-formatter', title: 'SQL Formatter', icon: 'Database', desc: 'Làm đẹp và định dạng mã SQL dễ đọc hơn.' },
  { path: 'css-js-minifier', title: 'CSS/JS Minifier', icon: 'Zap', desc: 'Nén và tối ưu hóa mã CSS, JavaScript giảm dung lượng file.' },
  { path: 'cron-generator', title: 'Cron Generator', icon: 'Calendar', desc: 'Tạo và giải thích biểu thức Cron dễ dàng.' },
  { path: 'html-entities', title: 'HTML Entities', icon: 'Globe', desc: 'Chuyển đổi các ký tự đặc biệt thành HTML entities và ngược lại.' },

  // Mạng & Bảo mật
  { path: 'port-checker', title: 'Port Checker', icon: 'Terminal', desc: 'Kiểm tra trạng thái các port (cổng) trên máy chủ / địa chỉ IP.' },
  { path: 'ip-address-search', title: 'IP Address Search', icon: 'Compass', desc: 'Tra cứu thông tin chi tiết về địa chỉ IP (Vị trí, ISP...).' },
  { path: 'ipv4-to-ipv6', title: 'IPv4 to IPv6', icon: 'ArrowLeftRight', desc: 'Chuyển đổi địa chỉ IPv4 sang định dạng IPv6.' },
  { path: 'security-headers', title: 'Security Headers', icon: 'Lock', desc: 'Kiểm tra các HTTP Security Headers của website.' },

  // AI Assist & Tiện ích
  { path: 'continue-writing', title: 'Continue Writing AI', icon: 'PenTool', desc: 'AI tự động viết tiếp đoạn văn bản đang viết dở của bạn.', requiresApi: true, apiName: 'OpenAI API Key' },
  { path: 'youtube-name-gen', title: 'YouTube Name Gen', icon: 'Video', desc: 'Tạo ý tưởng tên kênh YouTube độc đáo và thu hút.', requiresApi: true, apiName: 'OpenAI API Key' },
  { path: 'faq-generator', title: 'FAQ Generator', icon: 'HelpCircle', desc: 'Tạo bộ câu hỏi thường gặp (FAQ) tự động cho bài viết.', requiresApi: true, apiName: 'OpenAI API Key' },
  { path: 'word-counter-pro', title: 'Word Counter Pro', icon: 'Hash', desc: 'Đếm số từ, số ký tự và phân tích mật độ từ khóa văn bản.' },
  { path: 'tao-khung-avatar', title: 'Tạo khung avatar', icon: 'User', desc: 'Tạo khung ảnh đại diện (avatar) đẹp cho các mạng xã hội.' },
  { path: 'qr-code', title: 'QR Code Generator', icon: 'QrCode', desc: 'Tạo mã QR code tùy chỉnh cho URL, văn bản, số điện thoại...' },
];

const appDir = path.join(process.cwd(), 'src', 'app');

tools.forEach(tool => {
  const toolDir = path.join(appDir, tool.path);
  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
  }

  const pagePath = path.join(toolDir, 'page.tsx');
  
  const content = `"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { ${tool.icon} } from "lucide-react";

export default function ${tool.path.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <GenericToolLayout
      title="${tool.title}"
      description="${tool.desc}"
      icon={<${tool.icon} className="w-5 h-5" />}
      requiresApi={${!!tool.requiresApi}}
      ${tool.apiName ? `apiName="${tool.apiName}"` : ''}
    >
      <div className="p-6 md:p-8 min-h-[400px] flex flex-col items-center justify-center text-slate-400">
        <${tool.icon} className="w-12 h-12 mb-4 opacity-20" />
        <h2 className="text-xl font-medium text-slate-600 mb-2">Chức năng đang được hoàn thiện</h2>
        <p className="text-sm text-center max-w-md">
          Giao diện và API xử lý logic cho công cụ <strong>{ "${tool.title}" }</strong> đang được phát triển.
        </p>
      </div>
    </GenericToolLayout>
  );
}
`;

  fs.writeFileSync(pagePath, content);
  console.log("Created " + tool.path);
});
