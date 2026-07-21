import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dinhkhanhtung.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/blog',
    '/dich-vu',
    '/gioi-thieu',
    '/tools',
    '/chinh-sach-bao-mat',
    '/dieu-khoan-su-dung',
    '/vietqr',
    '/search-intent',
    '/topical-map',
    '/viet-bai-ai',
    '/viet-lai-bai',
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
    '/faq-generator',
    '/word-counter-pro',
    '/markdown-to-html',
    '/qr-code',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/dich-vu' || route === '/blog' ? 0.9 : 0.8,
  }));
}
