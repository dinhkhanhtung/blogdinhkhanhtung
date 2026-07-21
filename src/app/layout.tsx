import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BackToTop from "@/components/shared/BackToTop";
import JsonLdSchema from "@/components/shared/JsonLdSchema";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinhkhanhtung.com"),
  title: {
    default: "Đinh Khánh Tùng | Y Học Cổ Truyền & Công Cụ Tiện Ích Số",
    template: "%s | Đinh Khánh Tùng",
  },
  description: "Kênh tri thức uy tín về Y Học Cổ Truyền (Phòng khám Thu Bẩy Thái Nguyên), Công nghệ AI và bộ công cụ số hữu ích.",
  keywords: [
    "Đinh Khánh Tùng",
    "Y Học Cổ Truyền",
    "Phòng chẩn trị YHCT Thu Bẩy",
    "Đông y Thái Nguyên",
    "Thuốc Nam Thái Nguyên",
    "Công cụ AI",
    "SEO Content",
    "Topical Map Generator",
    "Search Intent AI"
  ],
  authors: [{ name: "Đinh Khánh Tùng", url: "https://dinhkhanhtung.com" }],
  creator: "Đinh Khánh Tùng",
  publisher: "Phòng Chẩn Trị YHCT Thu Bẩy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Đinh Khánh Tùng | Y Học Cổ Truyền & Công Cụ Tiện Ích Số",
    description: "Khám chữa bệnh YHCT Đông Y Thu Bẩy Thái Nguyên, ứng dụng công nghệ AI và bộ tiện ích số miễn phí.",
    url: "https://dinhkhanhtung.com",
    siteName: "Đinh Khánh Tùng",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đinh Khánh Tùng | Y Học Cổ Truyền & Công Cụ Tiện Ích Số",
    description: "Khám chữa bệnh YHCT Đông Y Thu Bẩy Thái Nguyên, ứng dụng công nghệ AI và bộ tiện ích số miễn phí.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "VN-69",
    "geo.placename": "Thái Nguyên",
    "geo.position": "21.6167;105.8333",
    "ICBM": "21.6167, 105.8333",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${lora.variable} antialiased scroll-smooth`}
    >
      <head>
        <JsonLdSchema />
      </head>
      <body className="font-sans bg-[#fbfaf8] text-slate-800">
        <NextTopLoader
          color="#15803d"
          initialPosition={0.15}
          crawlSpeed={300}
          height={3.5}
          crawl={true}
          showSpinner={false}
          easing="cubic-bezier(0.16, 1, 0.3, 1)"
          speed={300}
          shadow="0 0 14px #15803d, 0 0 6px #22c55e"
        />
        <DashboardLayout>
          {children}
        </DashboardLayout>
        <BackToTop />
      </body>
    </html>
  );
}
