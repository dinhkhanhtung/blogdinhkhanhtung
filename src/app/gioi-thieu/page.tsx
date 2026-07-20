"use client";

import React from "react";
import { User, Phone, MapPin, Mail, Share2, HeartPulse, Building2, ExternalLink } from "lucide-react";

export default function GioiThieuPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 min-h-full">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-[#011a14] text-white rounded-3xl p-6 lg:p-8 shadow-md relative overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="space-y-4 relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300">
            Thông tin tác giả
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight">
            Đinh Khánh Tùng & Phòng Chẩn Trị YHCT Thu Bẩy
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-semibold">
            Kết hợp giá trị truyền thống của Y Học Cổ Truyền Việt Nam với công nghệ hiện đại. Mang đến giải pháp tư vấn và chẩn trị sức khỏe uy tín tại Thái Nguyên bằng Y Học Cổ Truyền và hỗ trợ cộng đồng thông qua SEO AI.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Giới thiệu bản thân & Phòng khám */}
        <div className="md:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6 hover:shadow-md transition-shadow duration-300">
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <HeartPulse className="w-5 h-5 text-red-500" />
              Sứ mệnh của chúng tôi
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
              Chào mừng bạn đến với **SEO AI**, nền tảng cổng công cụ đa năng được sáng lập và vận hành bởi **Đinh Khánh Tùng**.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
              Bên cạnh hoạt động nghiên cứu công nghệ và tối ưu hóa tìm kiếm, tôi hiện đang trực tiếp quản lý và vận hành **Phòng Chẩn Trị Y Học Cổ Truyền Thu Bẩy** tại Thái Nguyên.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
              Chúng tôi chuyên tư vấn, chẩn trị và hỗ trợ phục hồi sức khỏe bằng các phương pháp y học cổ truyền an toàn, hiệu quả. Hệ thống SEO AI ra đời nhằm mục đích giúp chia sẻ rộng rãi những kiến thức y khoa, bài thuốc bổ ích chuẩn xác tới độc giả trên internet.
            </p>
          </div>
        </div>

        {/* Thông tin liên hệ (Cột phải) */}
        <div className="md:col-span-5 space-y-6">
          {/* Card Liên hệ */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-5 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-base font-black text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Building2 className="w-5 h-5 text-slate-500" />
              Thông tin chi tiết
            </h3>
            
            <div className="space-y-4 text-sm font-semibold text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">Địa chỉ phòng khám</p>
                  <p className="text-xs text-slate-500 mt-0.5">Tổ 10, Quan Triều, TP. Thái Nguyên</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img
                  src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
                  alt="Zalo"
                  className="w-5 h-5 object-contain mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-bold text-slate-800">Số điện thoại / Zalo</p>
                  <a href="https://zalo.me/0982581222" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 hover:underline mt-0.5 block">
                    0982.581.222
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">Email liên lạc</p>
                  <a href="mailto:dinhkhanhtung@outlook.com" className="text-xs text-emerald-600 hover:underline mt-0.5 block">
                    dinhkhanhtung@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Share2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">Facebook cá nhân</p>
                  <a href="https://www.facebook.com/dinhkhanhtung" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 hover:underline mt-0.5 block flex items-center gap-1">
                    facebook.com/dinhkhanhtung
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
