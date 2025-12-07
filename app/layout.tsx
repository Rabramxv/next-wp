// app/layout.tsx
import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { Footer }  from "@/components/nav/Footer";
import Header from "@/components/nav/Header";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.site_name,
  description: siteConfig.site_description,
  metadataBase: new URL(siteConfig.site_domain),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased bg-black text-[#f5e6d0]", font.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

          <Header />

          {/* Контент центрирован, но ширина страницы — на всю */}
          <main className="w-full ">
            <div className="w-full">

              {children}
            </div>
          </main>

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
