import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

export const metadata = {
  title: "markUp",
  description: "markUp components app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header></Header>
        <div className="m_container">
          <div className="m_row">
            <Sidebar></Sidebar>
            {children}
          </div>
        </div>
        <footer>
          <p>Copyright © 2024 SnagGeon Inc. All rights reserved.</p>
        </footer>
        <div className="mobile_only">
          <div className="mobile_main_title">
            <Image priority={true} src={"/image/icon_main_logo.svg"} width={150} height={40} alt="logo"></Image>
            <p>찾아주셔서 감사해요!</p>
            <p>작업 특성상 PC로 접속 부탁드려요 😊</p>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
