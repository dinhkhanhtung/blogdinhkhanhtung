"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { PenTool, Loader2 } from "lucide-react";

export default function VietBaiAiPage() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Chuyên gia");
  const [language, setLanguage] = useState("Tiếng Việt");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setError("");
    const apiKey = localStorage.getItem("api_key_OpenAI API Key");
    
    if (!apiKey) {
      setError("Vui lòng cấu hình OpenAI API Key để sử dụng tính năng này!");
      return;
    }

    if (!topic) {
      setError("Vui lòng nhập chủ đề / từ khóa!");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `Bạn là một chuyên gia SEO và Copywriter chuyên nghiệp. Hãy viết một bài viết chuẩn SEO dựa trên chủ đề được cung cấp. Giọng văn: ${tone}. Ngôn ngữ: ${language}. Cấu trúc bài viết cần có H1, H2, H3 rõ ràng, tối ưu từ khóa và dễ đọc.`
            },
            {
              role: "user",
              content: `Viết bài về chủ đề: "${topic}"`
            }
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Có lỗi xảy ra khi kết nối với OpenAI");
      }

      setResult(data.choices[0].message.content);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GenericToolLayout
      title="Viết Bài AI"
      description="Sử dụng trí tuệ nhân tạo để viết bài chuẩn SEO tự động."
      icon={<PenTool className="w-5 h-5" />}
      requiresApi={true}
      apiName="OpenAI API Key"
    >
      <div className="p-6 md:p-8 flex flex-col gap-4">
        {error && (
          <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700">Chủ đề / Từ khóa</label>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ví dụ: Lợi ích của việc tập yoga mỗi ngày" 
            className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-700" 
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Giọng văn (Tone)</label>
            <select 
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"
            >
              <option>Chuyên gia</option>
              <option>Thân thiện</option>
              <option>Hài hước</option>
              <option>Trang trọng</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Ngôn ngữ</label>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"
            >
              <option>Tiếng Việt</option>
              <option>English</option>
            </select>
          </div>
        </div>
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="w-full sm:w-auto self-start px-6 py-3 bg-[#15803d] hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? "Đang viết bài..." : "Tạo Bài Viết AI"}
        </button>
        
        <div className="mt-4 flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700">Kết quả (Bản nháp)</label>
          <textarea 
            readOnly 
            value={result}
            placeholder="Nội dung bài viết sẽ xuất hiện ở đây..." 
            className="w-full min-h-[400px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y leading-relaxed"
          ></textarea>
        </div>
      </div>
    </GenericToolLayout>
  );
}
