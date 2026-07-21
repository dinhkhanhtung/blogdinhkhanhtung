"use client";

import React from "react";
import { User, MapPin, Phone, Clock, Award, ShieldCheck } from "lucide-react";

export default function AuthorBio() {
  return (
    <section className="py-16 bg-[#fbfaf8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Avatar Badge */}
            <div className="w-28 h-28 rounded-full bg-[#15803d] text-white flex items-center justify-center text-4xl font-bold font-heading shrink-0 shadow-lg border-4 border-emerald-50">
              T
            </div>

            {/* Info */}
            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-[#15803d] rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Thầy thuốc YHCT & Chuyên Gia Số
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                Đinh Khánh Tùng
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Y sĩ Y học cổ truyền công tác tại <strong>Phòng Chẩn Trị YHCT Thu Bẩy</strong> (Thái Nguyên). Kết hợp tri thức y học dân tộc chân truyền với công nghệ số hiện đại để chia sẻ những bài học dưỡng sinh chữa bệnh bền vững và hỗ trợ giải pháp kỹ thuật cho cộng đồng.
              </p>
            </div>
          </div>

          {/* Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <MapPin className="w-5 h-5 text-[#15803d] shrink-0" />
              <span>Tổ 10, Quan Triều, TP. Thái Nguyên</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Phone className="w-5 h-5 text-[#15803d] shrink-0" />
              <span>Hotline/Zalo: <strong>0982.581.222</strong></span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Clock className="w-5 h-5 text-[#15803d] shrink-0" />
              <span>Giờ làm việc: 8:00 - 18:00 hàng ngày</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
