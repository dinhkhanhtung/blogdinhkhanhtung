"use client";

import React from "react";
import Link from "next/link";
import { SAMPLE_POSTS } from "@/lib/data";
import { BookOpen, ChevronRight, User, Calendar } from "lucide-react";

export default function FeaturedKnowledge() {
  const featuredPosts = SAMPLE_POSTS.slice(0, 3);

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#15803d] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Nguồn Tri Thức Nổi Bật
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
              Bài Viết Mới Nhất & Chuyên Sâu
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#15803d] hover:text-[#166534] transition-colors"
          >
            Xem tất cả bài viết <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[#fbfaf8] border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[16/10] bg-slate-200 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#15803d] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/50">
                  {post.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-[#15803d] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{post.author}</span>
                  <span className="text-[#15803d] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    Đọc ngay <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
