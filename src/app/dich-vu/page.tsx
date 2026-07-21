"use client";

import React, { useState } from "react";
import { 
  HeartPulse, 
  Leaf, 
  BookOpen, 
  Activity, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Award,
  ShieldCheck
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Phòng khám YHCT Thu Bẩy có châm cứu tại nhà không?",
    answer: "Hiện tại phòng khám ưu tiên thực hiện châm cứu, bấm huyệt trị liệu trực tiếp tại phòng khám (Tổ 10, Quan Triều, Thái Nguyên) để đảm bảo đầy đủ trang thiết bị y tế chuyên dụng và không gian vô trùng đạt chuẩn. Đối với trường hợp bệnh nhân đi lại khó khăn, vui lòng liên hệ hotline 0982581222 để thầy thuốc đánh giá và sắp xếp phương án hỗ trợ phù hợp."
  },
  {
    question: "Một liệu trình châm cứu xoa bóp kéo dài bao lâu?",
    answer: "Thông thường một liệu trình điều trị đau xương khớp, phục hồi chức năng kéo dài từ 7 đến 10 ngày liên tục. Mỗi buổi trị liệu diễn ra từ 45 đến 60 phút bao gồm các bước khám bệnh, châm cứu ôn châm hoặc điện châm, xoa bóp bấm huyệt và chiếu đèn hồng ngoại giảm đau."
  },
  {
    question: "Thuốc Đông y của phòng khám có dễ uống không và nguồn gốc từ đâu?",
    answer: "Dược liệu tại phòng khám Thu Bẩy 100% là dược liệu sạch tự nhiên, được lựa chọn kỹ lưỡng, làm sạch và sấy khô theo quy chuẩn, hoàn toàn không chứa chất bảo quản độc hại. Thuốc được bào chế dưới dạng thang tự sắc hoặc hỗ trợ sắc sẵn đóng túi vô trùng tiện lợi. Vị thuốc được thầy thuốc cân bằng gia giảm để tối ưu hóa hiệu quả điều trị và hạn chế tối đa vị đắng khó uống."
  },
  {
    question: "Tôi có cần đặt lịch trước khi đến khám không?",
    answer: "Để không phải chờ đợi lâu và được thầy thuốc Đinh Khánh Tùng trực tiếp thăm khám kỹ lưỡng, khuyến khích quý bệnh nhân nên đặt lịch hẹn trước ít nhất 1 buổi qua hotline/Zalo 0982581222 hoặc biểu mẫu đăng ký trực tuyến trên trang web này."
  }
];

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // Mở sẵn mục đầu tiên
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Khám bệnh & Kê đơn thuốc");
  const [desc, setDesc] = useState("");

  const handleSendZalo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Vui lòng nhập đầy đủ Họ tên và Số điện thoại!");
      return;
    }
    const message = `Chào thầy thuốc Đinh Khánh Tùng, tôi muốn đặt lịch khám dịch vụ: ${service}.\n- Họ tên: ${name}\n- Số điện thoại: ${phone}\n- Triệu chứng/Yêu cầu: ${desc || "Không có"}`;
    window.open(`https://zalo.me/0982581222?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-950 to-slate-900 text-white py-10 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs sm:text-sm font-bold text-green-300 uppercase tracking-wider">
              Phòng Chẩn Trị YHCT Thu Bẩy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              Dịch Vụ Khám Chữa Bệnh <br/>
              <span className="text-emerald-400">Y Học Cổ Truyền</span> Toàn Diện
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              Kết hợp lý luận y học cổ phương bí truyền với phương pháp trị liệu khoa học. Thăm khám tỉ mỉ, trị bệnh tận gốc, mang lại cuộc sống vui khỏe an lành cho quý bệnh nhân.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#dat-lich"
                className="px-6 py-4 bg-primary hover:bg-emerald-800 text-white font-bold text-base rounded-xl transition-all shadow-lg active:scale-95 text-center min-w-[160px] sm:min-w-fit"
              >
                Đặt Lịch Khám Ngay
              </a>
              <a 
                href="tel:0982581222"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base rounded-xl transition-all active:scale-95 text-center min-w-[160px] sm:min-w-fit flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Gọi Hotline
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/10 rounded-[32px] blur-2xl"></div>
            <div className="relative border border-primary/30 rounded-[32px] overflow-hidden shadow-2xl bg-slate-800 p-8 text-left space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center border border-primary/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Lương Y Chuyên Nghiệp</h3>
                  <p className="text-xs text-slate-400">Thầy thuốc Đinh Khánh Tùng trực tiếp chẩn trị</p>
                </div>
              </div>

              <div className="space-y-3.5 border-t border-slate-700/60 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm font-semibold">Tổ 10, Quan Triều, TP. Thái Nguyên</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm font-semibold">Mở cửa: 08:00 - 17:30 (Tất cả các ngày trong tuần)</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm font-semibold">Dược liệu chuẩn sạch 100% tự nhiên không lưu huỳnh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-4">Các Dịch Vụ Trị Liệu Tại Phòng Khám</h2>
          <div className="w-16 h-1 bg-[#15803d] mx-auto rounded-full"></div>
          <p className="text-base text-slate-600 font-semibold mt-4">
            Được thiết kế chuyên biệt cho từng mặt bệnh, hỗ trợ điều trị hiệu quả các chứng bệnh về cơ xương khớp, mất ngủ kinh niên, suy nhược thần kinh và phục hồi thể trạng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dịch vụ 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[#15803d]/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-50 text-[#15803d] rounded-2xl flex items-center justify-center border border-green-100 group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">1. Khám Bệnh & Bốc Thuốc Đông Y</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Áp dụng thuần thục 4 phép chẩn bệnh Tứ Chẩn (Vọng - Văn - Vấn - Thiết) để tìm ra căn nguyên sinh bệnh. Các bài thuốc gia truyền được gia giảm linh hoạt, phù hợp với thể trạng từng người, sử dụng nguồn thảo dược chuẩn sạch cao cấp giúp bồi bổ tạng phủ, bài trừ phong hàn thấp, thông kinh hoạt lạc.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Đặc trị đau xương khớp, viêm khớp, thoái hóa.
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Trị mất ngủ kinh niên, đau đầu, suy nhược cơ thể.
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
              <span className="text-slate-400 text-sm font-bold">Chi phí khám: Miễn phí</span>
              <a 
                href="#dat-lich"
                onClick={() => setService("Khám bệnh & Kê đơn thuốc")}
                className="px-5 py-3 border border-[#15803d] text-[#166534] hover:bg-[#15803d] hover:text-white font-bold text-sm rounded-xl transition-all active:scale-95"
              >
                Đặt khám ngay
              </a>
            </div>
          </div>

          {/* Dịch vụ 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[#15803d]/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-50 text-[#15803d] rounded-2xl flex items-center justify-center border border-green-100 group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">2. Châm Cứu & Bấm Huyệt Trị Liệu</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Phương pháp ôn châm, điện châm kết hợp xoa bóp bấm huyệt chuyên sâu do chính thầy thuốc Đinh Khánh Tùng thực hiện. Tác động trực tiếp vào các huyệt vị chiến lược giúp giải phóng chèn ép dây thần kinh, tăng tuần hoàn máu cục bộ, giãn cơ và phục hồi tầm vận động của cột sống, khớp vai, đầu gối.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Hỗ trợ giảm đau vai gáy, đau thần kinh tọa tức thì.
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Kim châm cứu vô trùng dùng 1 lần duy nhất cho mỗi ca.
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
              <span className="text-slate-900 text-base font-black">Giá chỉ từ: 150.000đ / buổi</span>
              <a 
                href="#dat-lich"
                onClick={() => setService("Châm cứu & Bấm huyệt")}
                className="px-5 py-3 border border-[#15803d] text-[#166534] hover:bg-[#15803d] hover:text-white font-bold text-sm rounded-xl transition-all active:scale-95"
              >
                Đặt lịch hẹn
              </a>
            </div>
          </div>

          {/* Dịch vụ 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[#15803d]/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-50 text-[#15803d] rounded-2xl flex items-center justify-center border border-green-100 group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">3. Vật Lý Trị Liệu & Phục Hồi Chức Năng</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Ứng dụng trang thiết bị đèn chiếu hồng ngoại, máy điện xung giảm đau kết hợp các bài tập vận động thụ động và chủ động. Rất hiệu quả cho bệnh nhân sau tai biến mạch máu não, liệt nửa người, liệt dây thần kinh số VII ngoại biên (méo miệng, mắt nhắm không kín), hoặc sau chấn thương xương khớp.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Thiết bị hiện đại, liệu trình thiết kế riêng cho mỗi người.
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Theo dõi sát sao tiến trình phục hồi hàng ngày.
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
              <span className="text-slate-900 text-base font-black">Giá chỉ từ: 120.000đ / buổi</span>
              <a 
                href="#dat-lich"
                onClick={() => setService("Vật lý trị liệu")}
                className="px-5 py-3 border border-[#15803d] text-[#166534] hover:bg-[#15803d] hover:text-white font-bold text-sm rounded-xl transition-all active:scale-95"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>

          {/* Dịch vụ 4 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[#15803d]/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-50 text-[#15803d] rounded-2xl flex items-center justify-center border border-green-100 group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">4. Ngâm Chân Thảo Dược & Trị Liệu Dưỡng Sinh</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Liệu pháp sử dụng bồn ngâm chân bằng gỗ bách và gói cốt thảo dược độc quyền chứa các vị muối khoáng, ngải cứu, gừng già, hồng hoa... Giúp thông hoạt kinh mạch vùng chân, làm ấm cơ thể, tăng lưu thông khí huyết, bài độc tố. Thích hợp cho người lớn tuổi hay bị lạnh chân tay, mất ngủ, đau nhức xương gót.
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Cốt ngâm chân được bào chế hoàn toàn tự nhiên.
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                  Thư giãn sâu, hỗ trợ điều trị hôi chân, nứt gót chân.
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
              <span className="text-slate-900 text-base font-black">Giá chỉ từ: 80.000đ / buổi</span>
              <a 
                href="#dat-lich"
                onClick={() => setService("Ngâm chân thảo dược")}
                className="px-5 py-3 border border-[#15803d] text-[#166534] hover:bg-[#15803d] hover:text-white font-bold text-sm rounded-xl transition-all active:scale-95"
              >
                Đặt chỗ dưỡng sinh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form & Contact Section */}
      <section id="dat-lich" className="py-8 md:py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
          {/* Booking Form Info */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              Đăng Ký Đặt Lịch & Nhận Tư Vấn Miễn Phí
            </h2>
            <div className="w-16 h-1 bg-[#15803d] rounded-full"></div>
            <p className="text-base text-slate-300 leading-relaxed font-medium">
              Quý bệnh nhân vui lòng điền đầy đủ thông tin hoặc gửi nhanh qua Zalo. Thầy thuốc Đinh Khánh Tùng sẽ liên hệ lại ngay trong vòng 30 phút để xác nhận và sắp xếp thời gian đón tiếp chu đáo nhất.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#15803d]/10 rounded-xl flex items-center justify-center text-[#15803d] border border-[#15803d]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Điện thoại / Zalo tư vấn</div>
                  <a href="https://zalo.me/0982581222" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-[#15803d] transition-colors">0982.581.222</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#15803d]/10 rounded-xl flex items-center justify-center text-[#15803d] border border-[#15803d]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Địa chỉ phòng khám</div>
                  <div className="text-sm font-semibold text-slate-200">Tổ 10, Quan Triều, Thái Nguyên</div>
                </div>
              </div>
            </div>
            
            {/* Direct Zalo Chat Button HD */}
            <div className="pt-4">
              <a
                href="https://zalo.me/0982581222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#15803d] hover:bg-[#166534] text-white px-6 py-4 rounded-2xl text-base font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <img
                  src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
                  alt="Zalo"
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
                Chat Zalo Tư Vấn Trực Tiếp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-left">
            <form onSubmit={handleSendZalo} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-300">Họ và tên bệnh nhân <span className="text-red-400">*</span></label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#15803d]/40 focus:border-[#15803d]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-300">Số điện thoại liên hệ <span className="text-red-400">*</span></label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Ví dụ: 0982xxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#15803d]/40 focus:border-[#15803d]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service-select" className="block text-sm font-bold text-slate-300">Dịch vụ cần tư vấn / Đặt khám</label>
                <select
                  id="service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold text-base focus:outline-none focus:ring-2 focus:ring-[#15803d]/40 focus:border-[#15803d]"
                >
                  <option value="Khám bệnh & Kê đơn thuốc">Khám bệnh & Kê đơn thuốc (Miễn phí)</option>
                  <option value="Châm cứu & Bấm huyệt">Châm cứu & Bấm huyệt trị liệu</option>
                  <option value="Vật lý trị liệu">Vật lý trị liệu & Phục hồi chức năng</option>
                  <option value="Ngâm chân thảo dược">Ngâm chân thảo dược dưỡng sinh</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="desc" className="block text-sm font-bold text-slate-300">Triệu chứng lâm sàng / Ghi chú (Nếu có)</label>
                <textarea
                  id="desc"
                  rows={3}
                  placeholder="Mô tả triệu chứng đau nhức xương khớp, mất ngủ bao lâu, hoặc vấn đề bạn đang gặp phải..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#15803d]/40 focus:border-[#15803d]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-base rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" /> Gửi Đăng Ký Đặt Lịch
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 text-[#15803d] rounded-full mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">Giải Đáp Thắc Mắc Thường Gặp</h2>
          <div className="w-16 h-1 bg-[#15803d] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base md:text-lg">{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#15803d] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-base border-t border-slate-100/60 leading-relaxed font-medium bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Google Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.2319082393356!2d105.81222!3d21.615376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135272a5a22c92b%3A0xea8cfc6a8581e222!2zVOG7lSAxMCwgUXVhbiBUcmnhu4d1LCBUUC4gVGjDoWkgTmd1ecOqbg!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí Phòng Chẩn Trị YHCT Thu Bẩy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
