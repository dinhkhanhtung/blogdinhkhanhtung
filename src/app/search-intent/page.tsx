"use client";

import React, { useState } from "react";
import { Compass, Sparkles, AlertCircle, LayoutGrid, HelpCircle, Check, Copy } from "lucide-react";

interface KeywordIntent {
  keyword: string;
  intent: "Informational" | "Navigational" | "Commercial" | "Transactional";
  explanation: string;
}

export default function SearchIntentPage() {
  const [keywordsText, setKeywordsText] = useState<string>("");
  const [language, setLanguage] = useState<string>("vi");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<KeywordIntent[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keywordsText.trim()) return;

    // Trích xuất các từ khóa (loại bỏ dòng trống)
    const keywords = keywordsText
      .split("\n")
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    if (keywords.length === 0) return;

    setIsLoading(true);
    setResults(null);
    setError(null);

    try {
      const response = await fetch("/api/search-intent/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keywords, language }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Có lỗi xảy ra khi kết nối tới dịch vụ AI.");
      }

      setResults(data.result);
    } catch (err: any) {
      setError(err.message || "Lỗi không xác định xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const getIntentBadgeStyles = (intent: string) => {
    switch (intent) {
      case "Informational":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Navigational":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Commercial":
        return "bg-purple-50 text-purple-700 border-purple-100";
      case "Transactional":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-100";
    }
  };

  const handleCopyText = () => {
    if (!results) return;
    const textToCopy = results
      .map((r) => `${r.keyword} | Ý định: ${r.intent} | Chi tiết: ${r.explanation}`)
      .join("\n");
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 min-h-full">
      {/* Mô tả ngắn */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow duration-300">
        <p className="text-sm text-slate-500 font-semibold leading-relaxed max-w-2xl">
          Phân tích mục đích tìm kiếm (Search Intent) ẩn sau các cụm từ khóa bằng mô hình ngôn ngữ lớn. Giúp bạn định hướng cấu trúc bài viết và từ khóa đích để gia tăng tỷ lệ chuyển đổi hiệu quả.
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
            Cấu hình phân tích
          </h3>

          <form onSubmit={handleAnalyze} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 flex items-center gap-1.5">
                Danh sách từ khóa (Mỗi dòng một từ)
                <span title="Nhập danh sách các từ khóa cần phân loại ý định tìm kiếm.">
                  <HelpCircle className="w-4.5 h-4.5 text-slate-400 cursor-help" />
                </span>
              </label>
              <textarea
                required
                rows={8}
                placeholder="Ví dụ:&#10;dau xuong khop dung thuoc gi&#10;phong chan tri thu bay thai nguyen&#10;mua thuoc nam xuong khop"
                value={keywordsText}
                onChange={(e) => setKeywordsText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-base font-mono text-slate-700 transition-all resize-y"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">
                Ngôn ngữ giải thích
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-base font-bold transition-all bg-white text-slate-700"
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">Tiếng Anh</option>
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
                  Đang phân loại ý định...
                </>
              ) : (
                <>
                  <Compass className="w-5 h-5 shrink-0" />
                  Phân Tích Ý Định
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
              Kết quả Phân tích Ý định
            </h3>
            {results && (
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Đã Copy" : "Copy kết quả"}
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

            {results ? (
              <div className="space-y-4">
                {results.map((item, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 bg-slate-50/50 p-4.5 rounded-xl space-y-3 hover:border-emerald-200 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="text-base font-extrabold text-slate-800">
                        {item.keyword}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getIntentBadgeStyles(
                          item.intent
                        )}`}
                      >
                        {item.intent}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            ) : !isLoading && !error ? (
              <div className="text-center py-12 px-6 text-slate-400 space-y-3">
                <Compass className="w-12 h-12 text-slate-300 mx-auto" />
                <p className="text-sm font-bold text-slate-600">Chưa có dữ liệu phân tích</p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Nhập danh sách từ khóa đích ở bên trái và nhấn nút Phân Tích để hiển thị phân loại từ AI.
                </p>
              </div>
            ) : null}

            {isLoading && (
              <div className="text-center py-12 space-y-3">
                <div className="w-8 h-8 border-3 border-slate-100 border-t-blue-600 rounded-full animate-spin mx-auto" />
                <p className="text-xs text-slate-500 font-bold">Trí tuệ nhân tạo đang phân tích ý định từ khóa...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
