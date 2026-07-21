import React from "react";
import Link from "next/link";
import { FileText, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Điều Khoản Sử Dụng | Đinh Khánh Tùng",
  description: "Điều khoản và quy định sử dụng dịch vụ, tiện ích số trên Blog Đinh Khánh Tùng.",
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
        <Link href="/" className="hover:text-[#15803d] transition-colors">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900">Điều khoản sử dụng</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
        <div className="flex items-center gap-3 text-[#15803d] mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Quy định & Thỏa thuận
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-heading font-bold text-slate-900 mb-4">
          Điều Khoản Sử Dụng
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Chào mừng bạn đến với <strong>Blog Đinh Khánh Tùng</strong>. Khi truy cập và sử dụng các công cụ tiện ích cũng như bài viết trên website, bạn đồng ý tuân thủ các quy định dưới đây.
        </p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            1. Chấp nhận điều khoản
          </h2>
          <p>
            Bằng việc duyệt trang web, đọc bài viết hoặc sử dụng bất kỳ công cụ trực tuyến nào được cung cấp trên hệ thống, bạn xác nhận đã đọc, hiểu và đồng ý bị ràng buộc bởi các điều khoản này.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            2. Quyền sở hữu trí tuệ
          </h2>
          <p>
            Toàn bộ nội dung bài viết chia sẻ về Y Học Cổ Truyền, kinh nghiệm công nghệ, mã nguồn và giao diện thiết kế thuộc bản quyền của <strong>Đinh Khánh Tùng</strong> trừ các thư viện mở được ghi nhận.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Bạn có thể chia sẻ bài viết nếu trích dẫn rõ nguồn và liên kết gốc về website.</li>
            <li>Nghiêm cấm sao chép tự động (crawl/scrape) nội dung nhằm mục đích thương mại khi chưa được sự đồng ý bằng văn bản.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            3. Miễn trừ trách nhiệm về y khoa & công cụ
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>
              <strong>Nội dung y học:</strong> Các bài viết kiến thức y học cổ truyền và bài thuốc Nam mang tính chất tham khảo tri thức. Bạn nên thăm khám trực tiếp với Thầy thuốc hoặc Bác sĩ chuyên khoa tại <strong>Phòng Chẩn Trị YHCT Thu Bẩy</strong> để được chẩn đoán và chỉ định liều lượng phù hợp nhất với thể trạng cá nhân.
            </li>
            <li>
              <strong>Công cụ hỗ trợ:</strong> Các tiện ích số (VietQR, SEO, Minifier, v.v.) được cung cấp hoàn toàn miễn phí phục vụ cộng đồng. Chúng tôi nỗ lực duy trì độ chính xác cao nhất nhưng không chịu trách nhiệm pháp lý với tổn thất gián tiếp do việc sử dụng sai mục đích.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            4. Thay đổi nội dung & điều khoản
          </h2>
          <p>
            Chúng tôi có quyền cập nhật, chỉnh sửa hoặc ngừng cung cấp một phần dịch vụ mà không cần thông báo trước nhằm cải tiến chất lượng hệ thống.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            5. Thông tin liên hệ
          </h2>
          <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200/60 space-y-3 text-sm">
            <div className="font-bold text-slate-900">Blog Đinh Khánh Tùng</div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Địa chỉ: Tổ 10, Quan Triều, Thái Nguyên</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Hotline / Zalo: <strong>0982 581 222</strong></span>
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
