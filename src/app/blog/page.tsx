"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SAMPLE_POSTS } from "@/lib/data";
import { Post } from "@/types/blog";
import { Search, Calendar, User, BookOpen, ChevronRight } from "lucide-react";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  const categories = useMemo(() => {
    const cats = new Set(SAMPLE_POSTS.map((p) => p.category));
    return ["Tất cả", ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return SAMPLE_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "Tất cả" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-[#fbfaf8] min-h-screen py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#15803d]/10 text-[#15803d] rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" /> Kho Tri Thức Tổng Hợp
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
            Kiến Thức Y Học Cổ Truyền & Công Nghệ Số
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Nơi chia sẻ bài viết chuyên sâu về phương thuốc Nam, dưỡng sinh Đông y kết hợp giải pháp AI và công cụ số nâng cao chất lượng cuộc sống.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#15803d] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm bài viết tri thức..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#15803d] transition-colors"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#15803d] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/40">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-[#15803d] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#15803d]" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#15803d] font-bold group-hover:translate-x-1 transition-transform">
                      Đọc bài <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">Không tìm thấy bài viết phù hợp</h3>
            <p className="text-sm text-slate-500">Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tất cả");
              }}
              className="px-4 py-2 bg-[#15803d] text-white text-xs font-bold rounded-xl hover:bg-[#166534] transition-colors"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
