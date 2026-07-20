import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BackToTop from "@/components/shared/BackToTop";

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
  title: "Đinh Khánh Tùng | Y Học Cổ Truyền & Công Cụ Tiện Ích Số",
  description: "Kênh chia sẻ tri thức về Y Học Cổ Truyền, Công nghệ, AI và những câu chuyện thú vị trong cuộc sống.",
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
      <body className="font-sans bg-slate-50 text-slate-800">
        <DashboardLayout>
          {children}
        </DashboardLayout>
        <BackToTop />
      </body>
    </html>
  );
}
