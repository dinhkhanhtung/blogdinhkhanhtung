"use client";

import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import {
  FileText,
  Eye,
  Code,
  Copy,
  Download,
  Trash2,
  Heading1,
  Bold,
  Italic,
  Link as LinkIcon,
  Code as CodeIcon,
  Table as TableIcon,
  Check,
  FileDown,
} from "lucide-react";

export default function MarkdownToHtmlPage() {
  const [markdown, setMarkdown] = useState<string>(
    `# Tiêu đề Markdown mẫu\n\nĐây là một ví dụ về **Markdown** được chuyển đổi trực tiếp sang **HTML**.\n\n## Danh sách các tính năng:\n- Chuyển đổi thời gian thực (Real-time)\n- Trình xem trước (Preview) trực quan\n- Sao chép mã HTML nhanh\n- Xuất file HTML tải về\n\n### Bảng dữ liệu minh họa:\n| Công cụ | Trạng thái | Hiệu năng |\n| :--- | :---: | ---: |\n| Blog Đinh Khánh Tùng | Đang chạy | Cực nhanh |\n| Khác | Đang chờ | Trung bình |\n\n> "Sử dụng Markdown giúp việc soạn thảo nội dung chuẩn SEO trở nên nhanh chóng và chuyên nghiệp hơn rất nhiều." - Đinh Khánh Tùng`
  );
  const [html, setHtml] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Convert Markdown sang HTML mỗi khi markdown thay đổi
  useEffect(() => {
    try {
      // marked.parse trả về string đồng bộ theo mặc định
      const parsedHtml = marked.parse(markdown) as string;
      setHtml(parsedHtml);
    } catch (error) {
      console.error("Error parsing markdown:", error);
      setHtml("<p class='text-red-500'>Lỗi cú pháp Markdown không thể biên dịch.</p>");
    }
  }, [markdown]);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
    triggerToast("Đã sao chép mã HTML vào bộ nhớ tạm!");
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted-markdown.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast("Đã tải file HTML về máy thành công!");
  };

  const insertAtCursor = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);
    const replacement = before + (selected || "văn bản") + after;

    setMarkdown(
      text.substring(0, start) + replacement + text.substring(end)
    );

    // Đưa con trỏ chuột về vị trí sau khi chèn
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + (selected || "văn bản").length
      );
    }, 50);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 min-h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">
            Tiện ích soạn thảo
          </p>
          <h2 className="text-xl font-black text-slate-800 mt-1">
            Markdown sang HTML Converter
          </h2>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">
            Soạn thảo văn bản bằng định dạng Markdown gọn nhẹ và xuất mã HTML sạch chuẩn SEO.
          </p>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        {/* Cột trái: Markdown Editor */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm flex flex-col overflow-hidden h-[550px] lg:h-auto lg:min-h-[500px]">
          {/* Editor Toolbar */}
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between flex-wrap gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-400" />
              Soạn thảo Markdown
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => insertAtCursor("# ", "")}
                title="Tiêu đề (Heading)"
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
              >
                <Heading1 className="w-4 h-4" />
              </button>
              <button
                onClick={() => insertAtCursor("**", "**")}
                title="Chữ đậm (Bold)"
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                onClick={() => insertAtCursor("*", "*")}
                title="Chữ nghiêng (Italic)"
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
              >
                <Italic className="w-4 h-4" />
              </button>
              <span className="w-px h-4 bg-slate-200 mx-1" />
              <button
                onClick={() => insertAtCursor("[", "](url)")}
                title="Chèn liên kết (Link)"
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => insertAtCursor("```\n", "\n```")}
                title="Khối code (Code Block)"
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
              >
                <CodeIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  insertAtCursor(
                    "\n| Cột 1 | Cột 2 |\n| :--- | :---: |\n| Dòng 1 | Nội dung 1 |\n| Dòng 2 | Nội dung 2 |\n"
                  )
                }
                title="Chèn bảng (Table)"
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors"
              >
                <TableIcon className="w-4 h-4" />
              </button>
              <span className="w-px h-4 bg-slate-200 mx-1" />
              <button
                onClick={() => setMarkdown("")}
                title="Xóa hết"
                className="p-1.5 hover:bg-red-50 hover:text-red-600 rounded-lg text-slate-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Textarea */}
          <div className="flex-1 min-h-0 relative">
            <textarea
              ref={textareaRef}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Nhập hoặc dán văn bản Markdown của bạn tại đây..."
              className="absolute inset-0 w-full h-full p-4 text-base font-mono text-slate-700 bg-transparent resize-none border-none outline-none focus:ring-0 focus:ring-offset-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-900/50"
            />
          </div>
          
          <div className="px-4 py-2 bg-slate-50/40 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0 flex justify-between">
            <span>Dùng cú pháp Markdown chuẩn</span>
            <span>{markdown.length} ký tự</span>
          </div>
        </div>

        {/* Cột phải: HTML Preview & Code */}
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm flex flex-col overflow-hidden h-[550px] lg:h-auto lg:min-h-[500px]">
          {/* Tab Selector & Actions */}
          <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between shrink-0">
            <div className="flex bg-slate-200/60 p-0.5 rounded-xl">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "preview"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Xem trước
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "code"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                Mã HTML
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopy}
                title="Sao chép mã HTML"
                className="p-2 hover:bg-slate-200 active:scale-95 rounded-xl text-slate-600 transition-all"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownload}
                title="Tải file HTML về máy"
                className="p-2 hover:bg-slate-200 active:scale-95 rounded-xl text-slate-600 transition-all"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Output Content */}
          <div className="flex-1 min-h-0 relative p-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-900/50">
            {activeTab === "preview" ? (
              <div
                className="prose prose-slate max-w-none text-sm text-slate-700 space-y-4
                  prose-headings:font-black prose-headings:text-slate-800 prose-headings:mt-4 prose-headings:mb-2
                  prose-h1:text-xl prose-h2:text-lg prose-h3:text-base
                  prose-p:leading-relaxed
                  prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5
                  prose-strong:font-bold prose-strong:text-slate-800
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-500
                  prose-code:font-mono prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-red-500 prose-code:text-xs
                  prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto
                  prose-table:w-full prose-table:border-collapse prose-th:border-b-2 prose-th:border-slate-200 prose-th:p-2 prose-th:text-left prose-th:font-bold prose-td:border-b prose-td:border-slate-100 prose-td:p-2"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <pre className="absolute inset-0 p-4 text-xs font-mono text-slate-600 bg-slate-50 overflow-auto select-all whitespace-pre-wrap leading-relaxed">
                {html}
              </pre>
            )}
          </div>

          <div className="px-4 py-2 bg-slate-50/40 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0 flex justify-between">
            <span>Mã HTML sạch, chuẩn SEO</span>
            <span>{html.length} ký tự</span>
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
