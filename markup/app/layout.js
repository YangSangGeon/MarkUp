import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

export const metadata = {
  title: "Knock MarkUp - 쉽게 시작하는 마크업",
  description: "노크마크업으로 웹코딩을 쉽게 해보세요! HTML, CSS, JS를 빠르게 작성하세요.",
  keywords: "노크마크업, 웹코딩, 퍼블리싱, 마크업, 퍼블리싱 학원, 퍼블리싱 인강, HTML, CSS, JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 검색엔진 */}
        <meta name="google-site-verification" content="KVRA1l3kW68HU9Gvq4f0tBRu3lYBwLgbKdjrZJ0mfm8" />
        {/* 네이버 검색엔진 */}
        <meta name="naver-site-verification" content="8d0fa028fca1ca9b14de1a3b11751250282a32fb" />

        {/* 파비콘 */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

        {/* OG 태그 */}
        <meta property="og:title" content="Knock MarkUp - 쉽게 시작하는 마크업" />
        <meta property="og:url" content="https://mark-up-mu.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon/kakao.png" />
        <meta property="og:description" content="노크마크업으로 웹코딩을 쉽게 해보세요! HTML, CSS, JS를 빠르게 작성하세요." />
        <meta property="og:site_name" content="KNOCK MARKUP" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
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
            <Image priority={true} src={"/image/icon_main_logo.svg"} width={240} height={40} alt="logo"></Image>
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
