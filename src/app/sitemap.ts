import { MetadataRoute } from 'next';
import { SAMPLE_POSTS } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blogdinhkhanhtung.com';

  // Core static pages
  const staticPages = [
    '',
    '/blog',
    '/dich-vu',
    '/tools',
    '/gioi-thieu',
    '/chinh-sach-bao-mat',
    '/dieu-khoan-su-dung',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Tools pages
  const toolRoutes = [
    '/topical-map',
    '/search-intent',
    '/viet-bai-ai',
    '/viet-lai-bai',
    '/viet-bai-mxh',
    '/schema-markup',
    '/gui-index-bing',
    '/gui-index-google',
    '/kiem-tra-google-index',
    '/kiem-tra-tu-khoa',
    '/keyword-cannibalization',
    '/metadata-geotag',
    '/nen-anh-hang-loat',
    '/tao-anh-ai',
    '/find-uid-facebook',
    '/tai-video-tiktok',
    '/tai-video-fb-reels',
    '/vietqr',
    '/tinh-lai-suat-vay',
    '/lich-van-nien',
    '/chu-khong-dau-vn',
    '/json-formatter',
    '/sql-formatter',
    '/css-js-minifier',
    '/cron-generator',
    '/html-entities',
    '/port-checker',
    '/ip-address-search',
    '/ipv4-to-ipv6',
    '/security-headers',
    '/continue-writing',
    '/youtube-name-gen',
    '/faq-generator',
    '/word-counter-pro',
    '/markdown-to-html',
    '/tao-khung-avatar',
    '/qr-code',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic blog post pages
  const blogPosts = SAMPLE_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...blogPosts, ...toolRoutes];
}
