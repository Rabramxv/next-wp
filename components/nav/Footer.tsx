import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";
import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="w-full bg-black/90 mt-12 border-t border-neutral-800">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6 md:px-8 py-10 grid md:grid-cols-[1.5fr_1fr_1fr] gap-8">

          {/* Брендинг */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={42} height={26} className="dark:invert" />
              <span className="font-semibold">{siteConfig.site_name}</span>
            </Link>
            <p><Balancer>{siteConfig.site_description}</Balancer></p>
          </div>

          {/* Меню */}
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium">Страницы</h5>
            {Object.entries(mainMenu).map(([name, href]) => (
              <Link key={href} href={href} className="hover:underline underline-offset-4">
                {name}
              </Link>
            ))}
          </div>

          {/* Контент */}
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium">Контент</h5>
            {Object.entries(contentMenu).length === 0 ? (
              <span className="text-neutral-500">Нет страниц</span>
            ) : (
              Object.entries(contentMenu).map(([name, href]) => (
                <Link key={href} href={href} className="hover:underline underline-offset-4">
                  {name}
                </Link>
              ))
            )}
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-800 mt-6 flex justify-center">
        <div className="w-full max-w-6xl px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} {siteConfig.site_name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
