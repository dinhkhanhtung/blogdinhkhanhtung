"use client";

import React, { useState } from "react";
import { QrCode, Download, Printer, Copy, RotateCcw, Check, Sparkles, Building } from "lucide-react";

interface Bank {
  id: string;
  name: string;
  code: string;
}

const POPULAR_BANKS: Bank[] = [
  { id: "BIDV", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)", code: "bidv" },
  { id: "VCB", name: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)", code: "vietcombank" },
  { id: "TCB", name: "Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank)", code: "techcombank" },
  { id: "CTG", name: "Ngân hàng TMCP Công thương Việt Nam (VietinBank)", code: "vietinbank" },
  { id: "MB", name: "Ngân hàng TMCP Quân đội (MBBank)", code: "mbbank" },
  { id: "AGR", name: "Ngân hàng Nông nghiệp & Phát triển Nông thôn (Agribank)", code: "agribank" },
  { id: "ACB", name: "Ngân hàng TMCP Á Châu (ACB)", code: "acb" },
];

export default function VietQrPage() {
  const [bank, setBank] = useState<string>("BIDV");
  const [accountNo, setAccountNo] = useState<string>("0982581222");
  const [accountName, setAccountName] = useState<string>("DINH KHANH TUNG");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [qrUrl, setQrUrl] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNo || !accountName) {
      triggerToast("Vui lòng điền số tài khoản và tên tài khoản!");
      return;
    }

    // Chuyển đổi tên tài khoản không dấu, chữ hoa
    const formattedName = accountName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toUpperCase();

    // Sinh link VietQR API
    // Template: qr_only (chỉ lấy mã QR), print (có đầy đủ header/footer chuyển khoản)
    const amountParam = amount ? `&amount=${amount}` : "";
    const descParam = description ? `&addInfo=${encodeURIComponent(description)}` : "";
    const nameParam = `&accountName=${encodeURIComponent(formattedName)}`;
    
    const url = `https://img.vietqr.io/image/${bank}-${accountNo}-compact.png?theme=compact${amountParam}${descParam}${nameParam}`;
    
    setQrUrl(url);
    setIsGenerated(true);
    triggerToast("Đã tạo mã VietQR chuyển khoản nhanh!");
  };

  const handleResetToDefault = () => {
    setBank("BIDV");
    setAccountNo("0982581222");
    setAccountName("DINH KHANH TUNG");
    setAmount("");
    setDescription("");
    setIsGenerated(false);
    setQrUrl("");
    triggerToast("Đã khôi phục thông tin BIDV của Đinh Khánh Tùng");
  };

  const handleDownload = () => {
    if (!qrUrl) return;
    const link = document.createElement("a");
    link.href = qrUrl;
    link.target = "_blank";
    link.download = `VietQR-${accountNo}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast("Đang tải ảnh mã QR xuống...");
  };

  const handleCopyLink = () => {
    if (!qrUrl) return;
    navigator.clipboard.writeText(qrUrl);
    triggerToast("Đã sao chép liên kết hình ảnh QR!");
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 min-h-full">
      {/* Header */}
      <div>
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          Tiện ích Tài chính Việt Nam
        </span>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight mt-2.5">
          Tạo Mã VietQR Chuyển Khoản Nhanh
        </h2>
        <p className="text-sm text-slate-500 font-semibold mt-1">
          Sinh mã QR thanh toán Napas247 theo chuẩn ngân hàng Việt Nam. Giúp khách hàng quét mã chuyển tiền nhanh 2 giây không cần nhập số tài khoản.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Nhập liệu (Cột trái) */}
        <form
          onSubmit={handleGenerate}
          className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-7 shadow-sm space-y-6 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
              <Building className="w-5 h-5 text-slate-500" />
              Thông tin thụ hưởng
            </h3>
            <button
              type="button"
              onClick={handleResetToDefault}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 py-1 px-2.5 bg-emerald-50 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Đặt lại mặc định BIDV
            </button>
          </div>

          <div className="space-y-4">
            {/* Chọn ngân hàng */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Ngân hàng thụ hưởng</label>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {POPULAR_BANKS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Số tài khoản & Tên tài khoản */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Số tài khoản</label>
                <input
                  type="text"
                  required
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  placeholder="Nhập số tài khoản ngân hàng..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tên chủ tài khoản (Không dấu)</label>
                <input
                  type="text"
                  required
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  placeholder="Ví dụ: DINH KHANH TUNG"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-base font-semibold uppercase focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Số tiền & Nội dung */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center justify-between">
                  <span>Số tiền chuyển khoản</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Không bắt buộc</span>
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Ví dụ: 100000"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center justify-between">
                  <span>Nội dung chuyển khoản</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Không bắt buộc</span>
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ví dụ: Dinh Khanh Tung thanh toan"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-emerald-500/10 active:scale-95"
          >
            <QrCode className="w-5 h-5 shrink-0" />
            Tạo Mã VietQR Thanh Toán
          </button>
        </form>

        {/* Kết quả QR (Cột phải) */}
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col justify-between items-center text-center space-y-6 hover:shadow-md transition-all duration-300">
          <div className="w-full border-b border-slate-100 pb-4 text-left">
            <h3 className="text-base font-extrabold text-slate-800">Mã QR Thanh Toán</h3>
          </div>

          {isGenerated && qrUrl ? (
            <div className="space-y-6 w-full flex flex-col items-center">
              {/* Khung QR Code */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl inline-block shadow-inner hover:scale-[1.01] transition-transform duration-300 w-full max-w-[260px] mx-auto">
                <img
                  src={qrUrl}
                  alt="VietQR Code"
                  className="w-full max-w-[220px] aspect-square object-contain mx-auto"
                  onError={() => triggerToast("Không thể tải ảnh QR. Vui lòng kiểm tra kết nối mạng!")}
                />
              </div>

              {/* Thông tin hiển thị */}
              <div className="text-sm font-bold text-slate-700 space-y-1">
                <p className="text-slate-800">{bank} - {accountNo}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{accountName}</p>
                {amount && (
                  <p className="text-emerald-600 text-base font-black mt-2">
                    {Number(amount).toLocaleString("vi-VN")} đ
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-1.5 py-3 bg-slate-900 hover:bg-emerald-900/30 text-white font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 px-2"
                >
                  <Download className="w-4 h-4" />
                  Tải Ảnh QR
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-1.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 px-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy Link QR
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 text-slate-400 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-slate-300" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-600">Chưa tạo mã QR</p>
                <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
                  Điền thông tin và nhấn nút bên trái để tạo ảnh QR quét ngân hàng nhanh.
                </p>
              </div>
            </div>
          )}

          {/* Hướng dẫn an toàn */}
          <div className="w-full border-t border-slate-50 pt-4 text-left text-xs text-slate-400 leading-relaxed font-semibold">
            Mã QR được khởi tạo động tuân thủ tiêu chuẩn quốc gia **VietQR (Napas247)** bảo mật, hỗ trợ chuyển tiền tức thời của hơn 40 ngân hàng Việt Nam.
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-emerald-950 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
