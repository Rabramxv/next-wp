"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/90 sticky top-0 z-50 border-b border-neutral-800">
      <div className="w-full px-6 md:px-8 py-4 flex items-center justify-between max-w-[1400px] mx-auto">

        {/* Лого */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image src={Logo} alt="Logo" width={42} height={26} className="dark:invert" />
          <span className="font-semibold text-lg">{siteConfig.site_name}</span>
        </Link>

        {/* Меню */}
        <div className="flex items-center gap-4">

          {/* Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen((v) => !v)}
            >
              Ещё ▼
            </Button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-neutral-800 rounded-md shadow-lg z-50">
                {Object.entries(mainMenu).map(([name, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm hover:bg-neutral-900 transition"
                    onClick={() => setOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Мобильное меню */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
