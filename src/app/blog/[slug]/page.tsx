import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SAMPLE_POSTS } from "@/lib/data";
import { Post } from "@/types/blog";
import { User, ChevronRight, BookOpen, ArrowLeft, Calendar, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SAMPLE_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại | Đinh Khánh Tùng",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blogdinhkhanhtung.com";

  return {
    title: `${post.title} | Đinh Khánh Tùng`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Blog Đinh Khánh Tùng",
      images: [
        {
          url: post.imageUrl.startsWith("http") ? post.imageUrl : `${baseUrl}${post.imageUrl}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "vi_VN",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Parse Table of Contents & Clean Headings
  const toc: { id: string; title: string; level: number }[] = [];
  let headingIndex = 0;
  const processedContent = post.content.replace(/<h([234])>(.*?)<\/h\1>/g, (match, level, title) => {
    const id = `heading-${headingIndex++}`;
    const cleanTitle = title.replace(/<[^>]*>?/gm, "");
    toc.push({ id, title: cleanTitle, level: Number(level) });
    return `<h${level} id="${id}" class="scroll-mt-28">${title}</h${level}>`;
  });

  // Related posts
  const relatedPosts = SAMPLE_POSTS.filter((p) => p.id !== post.id && p.category === post.category)
    .concat(SAMPLE_POSTS.filter((p) => p.id !== post.id && p.category !== post.category))
    .slice(0, 3);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blogdinhkhanhtung.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.imageUrl.startsWith("http") ? post.imageUrl : `${baseUrl}${post.imageUrl}`],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${baseUrl}/gioi-thieu`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Blog Đinh Khánh Tùng",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.ico`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#fbfaf8] min-h-screen py-8 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
              <Link href="/" className="hover:text-slate-900 transition-colors">Trang chủ</Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <Link href="/blog" className="hover:text-slate-900 transition-colors">Kiến thức</Link>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-[#15803d] font-bold truncate max-w-[150px] sm:max-w-xs">{post.category}</span>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-slate-600 hover:text-[#15803d] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 text-left">
            <div className="inline-block px-3 py-1 bg-[#15803d]/10 text-[#15803d] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 leading-[1.25] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 font-semibold border-y border-slate-200 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#15803d] text-white flex items-center justify-center font-bold text-xs">
                  T
                </div>
                <span className="text-slate-900 font-bold">{post.author}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          {post.imageUrl && (
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Summary Box */}
          {post.excerpt && (
            <div className="bg-slate-100/80 border-l-4 border-[#15803d] p-6 rounded-r-xl mb-10">
              <h3 className="text-xs font-bold text-[#15803d] uppercase tracking-wider mb-2">Tóm tắt bài viết</h3>
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Table of Contents Widget */}
          {toc.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-10 shadow-xs">
              <h4 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <BookOpen className="w-5 h-5 text-[#15803d]" />
                Mục lục nội dung
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base font-semibold text-slate-700">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className="hover:text-[#15803d] transition-colors"
                    style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
                  >
                    <a href={`#${item.id}`}>- {item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Main Body Content */}
          <article
            className="prose prose-slate max-w-none text-base sm:text-lg text-slate-800 leading-[1.85]
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2
              prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#15803d]
              prose-p:mb-6 prose-a:text-[#15803d] prose-a:font-bold hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-sm prose-img:mx-auto prose-img:my-8
              prose-strong:text-slate-900 prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* Social Share & Bottom Metadata */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#15803d]" /> Chia sẻ bài viết tri thức này:
            </span>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Facebook
              </a>
              <a
                href={`https://zalo.me/share?url=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Zalo
              </a>
            </div>
          </div>

          {/* Author Box & Medical Disclaimer */}
          <div className="mt-12 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start gap-6 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#15803d] text-white flex items-center justify-center text-2xl font-bold shrink-0">
              T
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900">Về tác giả: {post.author}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Blogger & Y sĩ Y học cổ truyền tại Phòng Chẩn Trị YHCT Thu Bẩy Thái Nguyên. Đam mê nghiên cứu thảo dược Nam dược, giải pháp công nghệ AI và ứng dụng tiện ích số nâng cao chất lượng cuộc sống.
              </p>
              <div className="pt-2 text-[11px] text-slate-400 italic">
                * Khuyến cáo: Các bài viết y học mang tính chất tham khảo tri thức. Người bệnh nên tham khảo ý kiến thầy thuốc chuyên khoa trước khi áp dụng.
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">
                Bài viết tri thức liên quan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group block bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <span className="text-[10px] font-bold text-[#15803d] uppercase tracking-wider block">
                        {related.category}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-[#15803d] transition-colors">
                        {related.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
