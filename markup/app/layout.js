import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <SpeedInsights />
      </body>
    </html>
  );
}
