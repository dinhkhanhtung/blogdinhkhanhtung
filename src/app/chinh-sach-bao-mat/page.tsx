import React from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Chính Sách Bảo Mật | Đinh Khánh Tùng",
  description: "Chính sách bảo mật thông tin cá nhân của người dùng trên website Blog Đinh Khánh Tùng.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#15803d] transition-colors">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900">Chính sách bảo mật</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
        <div className="flex items-center gap-3 text-[#15803d] mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Quyền riêng tư & Bảo mật
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-heading font-bold text-slate-900 mb-4">
          Chính Sách Bảo Mật
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Chúng tôi tại <strong>Blog Đinh Khánh Tùng & Phòng Chẩn Trị YHCT Thu Bẩy</strong> cam kết bảo vệ tuyệt đối quyền riêng tư và thông tin cá nhân của độc giả cũng như người dùng các tiện ích số trên website.
        </p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            1. Thu thập thông tin cá nhân
          </h2>
          <p>
            Khi bạn sử dụng các công cụ tiện ích (như tạo mã VietQR, nén ảnh, kiểm tra từ khóa, tính lãi suất) hoặc gửi form tư vấn sức khỏe, chúng tôi có thể thu thập các thông tin sau:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Họ và tên, số điện thoại, thông tin liên hệ (khi bạn chủ động gửi yêu cầu tư vấn).</li>
            <li>Dữ liệu nhập vào các công cụ tiện ích trực tuyến (dữ liệu này chỉ xử lý trực tiếp trên trình duyệt client của bạn).</li>
            <li>Thông tin truy cập kỹ thuật cơ bản: địa chỉ IP, loại thiết bị, hệ điều hành, trình duyệt web nhằm mục đích tối ưu trải nghiệm người dùng.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            2. Mục đích sử dụng thông tin
          </h2>
          <p>Thông tin thu thập được sử dụng nhằm mục đích:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Cung cấp và vận hành các dịch vụ, công cụ hỗ trợ người dùng một cách chính xác.</li>
            <li>Tư vấn chẩn trị và hỗ trợ sức khỏe khi bạn đăng ký tư vấn với Phòng Chẩn Trị YHCT Thu Bẩy.</li>
            <li>Cải thiện chất lượng nội dung bài viết và tối ưu hóa giao diện trải nghiệm người dùng.</li>
            <li>Đảm bảo an toàn hệ thống và ngăn chặn các hành vi phá hoại hoặc gian lận trực tuyến.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            3. Cam kết bảo mật dữ liệu
          </h2>
          <p>
            Chúng tôi áp dụng các tiêu chuẩn an toàn bảo mật nghiêm ngặt (mã hóa SSL/HTTPS, hạ tầng bảo mật đám mây). Các công cụ xử lý tệp tin hoặc dữ liệu cá nhân đều ưu tiên thực thi trực tiếp tại phía máy khách (Client-side), không lưu trữ trái phép nội dung riêng tư của bạn trên máy chủ.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            4. Chia sẻ thông tin với bên thứ ba
          </h2>
          <p>
            Chúng tôi <strong>tuyệt đối không kinh doanh, mua bán hay chia sẻ</strong> thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích thương mại. Thông tin chỉ được tiết lộ khi có yêu cầu hợp pháp từ cơ quan có thẩm quyền theo quy định của pháp luật Việt Nam.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            5. Thông tin liên hệ giải đáp
          </h2>
          <p>Nếu bạn có bất kỳ thắc mắc hay đóng góp ý kiến nào về chính sách bảo mật, xin vui lòng liên hệ:</p>
          <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200/60 space-y-3 text-sm">
            <div className="font-bold text-slate-900">Phòng Chẩn Trị YHCT Thu Bẩy - Đinh Khánh Tùng</div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Địa chỉ: Tổ 10, Quan Triều, Thái Nguyên</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Điện thoại / Zalo: <strong>0982 581 222</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Email: dinhkhanhtung@outlook.com</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
