// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/SidebarLayout";
import BottomBar from "@/components/BottomBar";
import Fotter from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "Global Sidebar Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex bg-sky-50 text-gray-900`}
      >
        {/* ✅ Sidebar 全ページ共通 */}
        <SidebarProvider>
          <AppSidebar />

          {/* ✅ メイン領域 */}
          <div className="flex-1 flex flex-col">
            <main className="flex-1 p-6">
              <SidebarTrigger />
              {children}
            </main>

            {/* ✅ フッター共通 */}
            <Fotter />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}