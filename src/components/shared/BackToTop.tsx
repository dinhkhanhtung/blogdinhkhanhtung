"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-40 p-3 bg-[#15803d] hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-in fade-in zoom-in-75 duration-200"
      aria-label="Quay lại đầu trang"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
