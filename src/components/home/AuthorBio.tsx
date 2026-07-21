"use client";

import React from "react";
import { User, MapPin, Phone, Clock, Award, ShieldCheck, Star, ExternalLink } from "lucide-react";

export default function AuthorBio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-700/60">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-8 relative z-10">
            
            {/* Header Flex */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
              {/* Avatar Badge */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 rounded-full bg-[#15803d] text-white flex items-center justify-center text-4xl font-bold font-heading shadow-xl border-4 border-emerald-500/30">
                  T
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white p-2 rounded-full shadow-md border-2 border-slate-900" title="Đã xác minh">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Award className="w-4 h-4 text-emerald-400" /> Thầy Thuốc YHCT & Tech Pioneer
                </div>

                <h3 className="text-3xl sm:text-4xl font-heading font-black text-white">
                  Đinh Khánh Tùng
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  Y sĩ Y học cổ truyền công tác tại <strong>Phòng Chẩn Trị YHCT Thu Bẩy</strong> (Tổ 10, Quan Triều, Thái Nguyên). Đam mê ứng dụng công nghệ số hiện đại và AI để chia sẻ tri thức Nam dược chữa bệnh bền vững cho cộng đồng.
                </p>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/80 text-xs font-semibold text-slate-300">
              <a
                href="https://maps.google.com/?q=Tổ+10,+Quan+Triều,+Thái+Nguyên"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex-1 truncate">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Địa chỉ phòng khám</div>
                  <div className="text-slate-200 truncate">Tổ 10, Quan Triều, Thái Nguyên</div>
                </div>
              </a>

              <a
                href="tel:0982581222"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Hotline / Zalo</div>
                  <div className="text-white font-bold">0982.581.222</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Giờ làm việc</div>
                  <div className="text-slate-200">8:00 - 18:00 Hàng ngày</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
