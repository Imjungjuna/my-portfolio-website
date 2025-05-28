import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";
import type React from "react";

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "임정준 프론트엔드 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gothicA1.className} antialiased`}>{children}</body>
    </html>
  );
}
