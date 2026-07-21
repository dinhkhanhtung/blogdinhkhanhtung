"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SAMPLE_POSTS } from '@/lib/data';
import { Post } from '@/types/blog';
import Link from 'next/link';

import {
  Calendar,
  User,
  Search,
  ChevronRight,
  ArrowLeft,
  BookOpen
} from "lucide-react";

function BlogPostDetail({ post, allPosts, onBack }: { post: Post; allPosts: Post[]; onBack: () => void }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post.id]);

  const latestPosts = allPosts.slice(0, 5);

  // Xử lý nội dung: Thêm TOC, Tóm tắt, và chèn bài liên quan vào giữa bài viết
  const processContent = () => {
    let currentHtml = post.content;
    const toc: { id: string; title: string; level: number }[] = [];
    
    // 1. Tạo TOC
    let i = 0;
    currentHtml = currentHtml.replace(/<h([234])>(.*?)<\/h\1>/g, (match, level, title) => {
      const id = `heading-${i++}`;
      const cleanTitle = title.replace(/<[^>]*>?/gm, '');
      toc.push({ id, title: cleanTitle, level: Number(level) });
      return `<h${level} id="${id}" class="scroll-mt-28">${title}</h${level}>`;
    });

    // 2. Chèn bài liên quan
    const pParts = currentHtml.split('</p>');
    if (pParts.length > 3) {
      const inlinePost = allPosts.find(p => p.id !== post.id && p.category === post.category) || allPosts.find(p => p.id !== post.id);
      if (inlinePost) {
        const inlineHtml = `
          </p>
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 border-l-4 border-l-primary rounded-r-lg shadow-sm not-prose group cursor-pointer hover:shadow-md transition-all" onclick="window.location.href='/blog?post=${inlinePost.slug}'">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Đang xem nhiều
            </div>
            <a href="/blog?post=${inlinePost.slug}" className="text-lg font-heading font-bold text-slate-900 group-hover:text-primary transition-colors block">
              ${inlinePost.title}
            </a>
          </div>
        `;
        currentHtml = pParts[0] + '</p>' + pParts[1] + inlineHtml + pParts.slice(2).join('</p>');
      }
    }

    return { html: currentHtml, toc };
  };

  const { html: processedHtml, toc } = processContent();

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cột Nội dung chính (Title, Image, Content) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-10 shadow-sm">
            
            {/* Header article */}
            <div className="mb-8">
              {/* Breadcrumb */}
              <div className="mb-6 flex flex-wrap items-center text-xs md:text-sm text-slate-500 font-bold gap-2 uppercase tracking-widest">
                <Link href="/" className="hover:text-slate-900 transition-colors whitespace-nowrap">Trang chủ</Link>
                <ChevronRight className="w-3 h-3 shrink-0" />
                <button onClick={onBack} className="text-[#15803d] hover:text-emerald-700 transition-colors whitespace-nowrap">Kiến thức</button>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-[1.3] mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-slate-200">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-900 font-bold text-sm">{post.author}</div>
                    <div className="text-xs text-slate-500">{post.date}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden relative shadow-sm border border-slate-200 mb-10">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-white/50">
                {post.category}
              </div>
            </div>
          
          {/* Tóm tắt bài viết */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8 border-l-4 border-slate-400">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Tóm tắt nội dung</h3>
            <p className="text-lg text-slate-700 font-medium leading-relaxed italic">
              {post.excerpt}
            </p>
          </div>

          {/* Mục lục bài viết tự động (TOC Widget) */}
          {toc.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-10">
              <h4 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Nội dung chính trong bài
              </h4>
              <ul className="space-y-3 text-base font-semibold text-primary">
                {toc.map((item) => (
                  <li key={item.id} className="hover:underline" style={{ marginLeft: `${(item.level - 2) * 1}rem` }}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      - {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nội dung bài viết */}
          <article
            className="prose lg:prose-lg max-w-none text-lg text-slate-700 leading-[1.85]
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:border-l-4 prose-h3:border-primary prose-h3:pl-4
              prose-p:mb-6 prose-p:text-[1.125rem] prose-p:text-left
              prose-a:text-primary prose-a:font-bold hover:prose-a:underline
              prose-img:rounded-lg prose-img:shadow-sm prose-img:border prose-img:border-slate-200 prose-img:mx-auto prose-img:my-10
              prose-strong:text-slate-900 prose-strong:font-bold prose-li:text-[1.125rem]"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />

          {/* Share Block ở đáy bài */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-bold text-slate-900 text-lg">Chia sẻ bài viết này:</span>
            <div className="flex gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm" aria-label="Share on Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={`https://twitter.com/intent/tweet?url=`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm" aria-label="Share on X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm" aria-label="Share on LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-white shrink-0 overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center">
              <User className="w-10 h-10 text-slate-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Về tác giả: {post.author}</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Một người đam mê nghiên cứu và chia sẻ những kiến thức giá trị về Y học cổ truyền, công nghệ số và đời sống. Hy vọng bài viết này mang lại cho bạn những thông tin hữu ích!
              </p>
              <a href="https://zalo.me/0982581222" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-800 transition-colors shadow-sm">
                <User className="w-4 h-4" /> Theo dõi tác giả
              </a>
            </div>
          </div>

          {/* Bài viết liên quan (Related Articles) */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold text-slate-900 border-b border-slate-200 pb-4 mb-8">Bài Viết Liên Quan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {allPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .concat(allPosts.filter(p => p.id !== post.id && p.category !== post.category))
                .slice(0, 2)
                .map((related) => (
                <a key={related.id} href={`/blog?post=${related.slug}`} className="group block bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="w-full aspect-[16/9] bg-slate-200 overflow-hidden">
                    <img src={related.imageUrl} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{related.category}</div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-primary line-clamp-2 transition-colors">
                      {related.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-heading font-bold text-slate-900 border-b-2 border-primary pb-2 mb-5 inline-block">
              Bài viết mới nhất
            </h4>
            <div className="space-y-5">
              {latestPosts.map((lPost) => (
                <a key={lPost.id} href={`/blog?post=${lPost.slug}`} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-slate-200 rounded-md shrink-0 overflow-hidden">
                    <img src={lPost.imageUrl} alt={lPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {lPost.title}
                    </h5>
                    <span className="text-xs text-slate-500 font-medium">{lPost.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function BlogListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const activeCategory = searchParams.get("category");
  const activePostSlug = searchParams.get("post");

  const filteredPosts = SAMPLE_POSTS.filter((post) => {
    const matchesCategory = activeCategory
      ? post.category.toLowerCase() === activeCategory.toLowerCase()
      : true;
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const activePost = activePostSlug
    ? SAMPLE_POSTS.find((post) => post.slug === activePostSlug)
    : null;

  if (activePost) {
    return (
      <BlogPostDetail
        post={activePost}
        allPosts={SAMPLE_POSTS}
        onBack={() => {
          const params = new URLSearchParams(searchParams.toString());
          params.delete("post");
          router.push(`/blog?${params.toString()}`);
        }}
      />
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Danh sách */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            {activeCategory ? `Chuyên mục: ${activeCategory}` : "Tất Cả Bài Viết Kiến Thức"}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Nơi tổng hợp những kiến thức giá trị về Y Học Cổ Truyền, các bài thuốc Nam hữu ích và những thông tin sức khỏe đời sống.
          </p>

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-full focus:outline-none focus:border-[#15803d] focus:bg-white bg-slate-50 transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Danh sách bài viết */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.set("post", post.slug);
                  router.push(`/blog?${params.toString()}`);
                }}
                className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 cursor-pointer hover:shadow-md hover:border-[#15803d] transition-all"
              >
                <div className="w-full md:w-64 h-48 bg-slate-200 rounded-md overflow-hidden shrink-0">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="inline-block bg-[#15803d]/10 text-[#15803d] px-3 py-1 rounded-full text-sm font-bold mb-3 w-max">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3 hover:text-[#15803d]">
                    {post.title}
                  </h2>
                  <p className="text-base text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold mt-auto border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Không có kết quả</h3>
              <p className="text-slate-600">Không tìm thấy bài viết nào phù hợp với từ khóa của bạn.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xl text-slate-500 font-bold">Đang tải dữ liệu...</div>}>
      <BlogListContent />
    </Suspense>
  );
}
