"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, X, Sparkles } from "lucide-react";

interface PopupNotification {
  id: number;
  name: string;
  location: string;
  action: string;
  timeAgo: string;
}

const SAMPLE_NOTIFICATIONS: PopupNotification[] = [
  { id: 1, name: "Anh Hoàng Nam", location: "Thái Nguyên", action: "đã đặt lịch khám YHCT tại Thu Bẩy", timeAgo: "2 phút trước" },
  { id: 2, name: "Chị Minh Phương", location: "Hà Nội", action: "đang đọc bài viết Trà cổ dược dưỡng sinh", timeAgo: "5 phút trước" },
  { id: 3, name: "Bác Thanh Tùng", location: "Bắc Giang", action: "đã xem bài thuốc Nam chữa đau khớp", timeAgo: "8 phút trước" },
  { id: 4, name: "Anh Tuấn Anh", location: "Đà Nẵng", action: "vừa sử dụng công cụ Tạo Topical Map AI", timeAgo: "12 phút trước" },
  { id: 5, name: "Chị Khánh Linh", location: "TP. HCM", action: "đã gửi câu hỏi tư vấn sức khỏe qua Zalo", timeAgo: "15 phút trước" },
];

export default function FakePurchasePopup() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [currentNotification, setCurrentNotification] = useState<PopupNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user or admin disabled popup
    const disabledSetting = localStorage.getItem("fake_popup_enabled");
    if (disabledSetting === "false") {
      setIsEnabled(false);
      return;
    }

    let timer: NodeJS.Timeout;
    const triggerPopup = () => {
      const randomItem = SAMPLE_NOTIFICATIONS[Math.floor(Math.random() * SAMPLE_NOTIFICATIONS.length)];
      setCurrentNotification(randomItem);
      setIsVisible(true);

      // Hide after 5 seconds
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial trigger after 6 seconds
    const initialDelay = setTimeout(triggerPopup, 6000);

    // Loop interval every 18 seconds
    const interval = setInterval(triggerPopup, 18000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isEnabled || !isVisible || !currentNotification) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-4 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-sm">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 relative overflow-hidden group">
        
        {/* Decorative Green Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#15803d]" />

        {/* Icon */}
        <div className="w-9 h-9 rounded-xl bg-[#15803d]/10 text-[#15803d] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>

        {/* Text Details */}
        <div className="flex-1 text-xs pr-4">
          <div className="font-bold text-slate-900 leading-tight">
            {currentNotification.name} <span className="font-normal text-slate-500">({currentNotification.location})</span>
          </div>
          <div className="text-slate-600 font-medium line-clamp-1 mt-0.5">
            {currentNotification.action}
          </div>
          <div className="text-[10px] text-slate-400 font-semibold mt-1">
            {currentNotification.timeAgo} • Đã xác minh
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
