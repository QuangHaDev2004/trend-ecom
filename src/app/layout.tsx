import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "TrendEcom - Thời trang tốt nhất",
  description:
    "TrendEcom mang đến bộ sưu tập thời trang hiện đại, chất lượng và giá tốt. Khám phá quần áo, giày dép, phụ kiện phong cách mới nhất dành cho bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Toaster richColors duration={3000} />
      </body>
    </html>
  );
}
