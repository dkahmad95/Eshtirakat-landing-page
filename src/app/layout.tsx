import type { Metadata } from "next";
import { Tajawal} from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  style: "normal",
  display: "swap",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Eshtirakat",
  description: "Created by Ahmad Dekmak 78/940697",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
