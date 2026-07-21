"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, ShoppingBag, Calendar } from "lucide-react";

const PATIENTS = [
  "Chị Nguyễn Thị H. (Thái Nguyên)",
  "Anh Trần Tuấn A. (Thái Nguyên)",
  "Cô Phạm Thanh B. (Phú Thọ)",
  "Chú Ngô Quốc K. (Thái Nguyên)",
  "Anh Hoàng Minh T. (Bắc Giang)",
  "Chị Lê Mỹ L. (TP.HCM)",
  "Bác Vũ Đình S. (Thái Nguyên)",
  "Chị Đỗ Thu T. (Thái Nguyên)",
  "Anh Nguyễn Hữu V. (Hà Nội)"
];

const ACTIONS = [
  { text: "đã đặt lịch khám xương khớp thành công", type: "booking" },
  { text: "đã mua 2 hộp Trà Cổ Dược Dưỡng Sinh", type: "product" },
  { text: "đã đăng ký tư vấn liệu trình châm cứu bấm huyệt", type: "booking" },
  { text: "đã đặt lịch ngâm chân thảo dược trị liệu", type: "booking" },
  { text: "đã mua 1 chai Dầu Thảo Dược Xoa Bóp", type: "product" },
  { text: "đã đăng ký khám bệnh & bốc thuốc Đông Y", type: "booking" }
];

const TIMES = [
  "vừa xong",
  "1 phút trước",
  "3 phút trước",
  "5 phút trước",
  "10 phút trước"
];

export default function FakePurchasePopup() {
  const [show, setShow] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    name: "",
    action: "",
    time: "",
    type: "booking"
  });

  useEffect(() => {
    // Không hiện ngay lập tức, đợi 15 giây đầu tiên
    const initialDelay = setTimeout(() => {
      triggerNotification();
    }, 15000);

    return () => clearTimeout(initialDelay);
  }, []);

  const triggerNotification = () => {
    const randomPatient = PATIENTS[Math.floor(Math.random() * PATIENTS.length)];
    const randomAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    const randomTime = TIMES[Math.floor(Math.random() * TIMES.length)];

    setCurrentNotification({
      name: randomPatient,
      action: randomAction.text,
      time: randomTime,
      type: randomAction.type
    });

    setShow(true);

    // Tự động ẩn sau 6 giây
    const hideTimeout = setTimeout(() => {
      setShow(false);
      
      // Lên lịch cho thông báo tiếp theo sau 25 - 45 giây ngẫu nhiên
      const nextDelay = Math.floor(Math.random() * (45000 - 25000 + 1)) + 25000;
      const nextTimeout = setTimeout(triggerNotification, nextDelay);
      return () => clearTimeout(nextTimeout);
    }, 6000);

    return () => clearTimeout(hideTimeout);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-4 z-50 max-w-[340px] w-[calc(100%-32px)] sm:w-auto bg-white/95 backdrop-blur-md border border-green-100 rounded-2xl p-4 shadow-[0_10px_30px_rgba(21,128,61,0.12)] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex gap-3 items-start">
        {/* Icon đại diện động */}
        <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center border ${
          currentNotification.type === "product" 
            ? "bg-green-50 text-[#15803d] border-green-100" 
            : "bg-blue-50 text-blue-600 border-blue-100"
        }`}>
          {currentNotification.type === "product" ? (
            <ShoppingBag className="w-5 h-5" />
          ) : (
            <Calendar className="w-5 h-5" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center gap-2 mb-0.5">
            <span className="text-xs font-bold text-slate-900 truncate">
              {currentNotification.name}
            </span>
            <span className="text-[10px] font-semibold text-slate-400 shrink-0">
              {currentNotification.time}
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            {currentNotification.action}
          </p>
          <div className="flex items-center gap-1 mt-1.5 text-[9px] font-bold text-[#15803d]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Phòng khám Đông y Thu Bẩy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
