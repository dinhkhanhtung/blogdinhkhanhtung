"use client";

import React from "react";
import Link from "next/link";
import { SAMPLE_POSTS } from "@/lib/data";
import { BookOpen, ChevronRight, User, Calendar, Clock, ArrowRight } from "lucide-react";

export default function FeaturedKnowledge() {
  const featuredPosts = SAMPLE_POSTS.slice(0, 3);

  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              <BookOpen className="w-4 h-4" /> Kho Tri Thức Chọn Lọc
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Bài Viết Mới Nhất & Chuyên Sâu
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#15803d] hover:text-[#166534] transition-colors group"
          >
            <span>Tất cả bài viết tri thức</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[#15803d] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/60 shadow-xs">
                  {post.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-[#15803d] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-[#15803d] text-white flex items-center justify-center text-[10px] font-bold">
                      T
                    </div>
                    <span>{post.author}</span>
                  </div>

                  <span className="text-[#15803d] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Đọc tiếp <ArrowRight className="w-3.5 h-3.5" />
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
