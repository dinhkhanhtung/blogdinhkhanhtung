"use client";

import React, { useState } from "react";
import { Network, Sparkles, AlertCircle, LayoutGrid, HelpCircle, Check, Copy } from "lucide-react";

interface Topic {
  topic: string;
  subtopics: string[];
}

export default function TopicalMapPage() {
  const [keyword, setKeyword] = useState<string>("");
  const [targetAudience, setTargetAudience] = useState<string>("general");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Topic[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword) return;

    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch("/api/topical-map/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword, targetAudience }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Không thể khởi tạo sơ đồ.");
      }

      setResult(data.result);
    } catch (err: any) {
      setError(err.message || "Lỗi không xác định xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = () => {
    if (!result) return;
    const textToCopy = result
      .map((t) => `${t.topic}:\n` + t.subtopics.map((s) => `  - ${s}`).join("\n"))
      .join("\n\n");
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 min-h-full">
      {/* Mô tả ngắn */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow duration-300">
        <p className="text-sm text-slate-500 font-semibold leading-relaxed max-w-2xl">
          Công cụ hỗ trợ xây dựng bản đồ chủ đề (Topical Map) toàn diện bằng AI. Giúp tối ưu hóa cấu trúc bài viết và nâng cao uy tín chuyên môn (Topical Authority) của website trên công cụ tìm kiếm.
        </p>
        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wide">
          Gemini AI Engine
        </span>
      </div>

      {/* Bố cục 2 cột */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Cột cấu hình (Trái) */}
        <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-base font-black text-slate-800 mb-5 pb-3 border-b border-slate-100 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-emerald-500" />
            Thông số sơ đồ
          </h3>

          <form onSubmit={handleGenerate} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 flex items-center gap-1.5">
                Từ khóa hạt giống (Seed Keyword)
                <span title="Từ khóa đại diện cho chủ đề chính của website.">
                  <HelpCircle className="w-4.5 h-4.5 text-slate-400 cursor-help" />
                </span>
              </label>
              <input
                type="text"
                required
                placeholder="Ví dụ: SEO Website, Đông Y..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-base font-semibold transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">
                Đối tượng độc giả
              </label>
              <select
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-base font-bold transition-all bg-white text-slate-700"
              >
                <option value="general">Mọi đối tượng</option>
                <option value="beginner">Người mới bắt đầu</option>
                <option value="expert">Chuyên gia / Nâng cao</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-blue-400 text-white font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-emerald-500/10 active:scale-95 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Đang khởi tạo cấu trúc...
                </>
              ) : (
                <>
                  <Network className="w-5 h-5 shrink-0" />
                  Tạo Sơ Đồ Chủ Đề
                </>
              )}
            </button>
          </form>
        </div>

        {/* Cột hiển thị kết quả (Phải) */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm min-h-[350px] flex flex-col hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5 shrink-0">
            <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              Kết quả Sơ đồ Chủ đề
            </h3>
            {result && (
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Đã Copy" : "Copy danh sách"}
              </button>
            )}
          </div>

          <div className="flex-1 min-h-0 flex flex-col justify-center">
            {error && (
              <div className="flex gap-3 bg-red-50 border border-red-200 p-4 rounded-xl text-red-700 text-sm font-semibold max-w-xl mx-auto">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {result ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.map((topic, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl space-y-2.5 hover:border-emerald-200 hover:bg-white transition-all duration-300"
                  >
                    <h4 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
                      {topic.topic}
                    </h4>
                    <ul className="space-y-1.5">
                      {topic.subtopics.map((sub, j) => (
                        <li key={j} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 font-medium">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : !isLoading && !error ? (
              <div className="text-center py-12 px-6 text-slate-400 space-y-3">
                <Network className="w-12 h-12 text-slate-300 mx-auto" />
                <p className="text-sm font-bold text-slate-600">Chưa có sơ đồ nào được tạo</p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Vui lòng nhập từ khóa chính bên trái và nhấn nút Tạo để xem kết quả.
                </p>
              </div>
            ) : null}

            {isLoading && (
              <div className="text-center py-12 space-y-3">
                <div className="w-8 h-8 border-3 border-slate-100 border-t-blue-600 rounded-full animate-spin mx-auto" />
                <p className="text-xs text-slate-500 font-bold">Trí tuệ nhân tạo đang phân tích chủ đề...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
