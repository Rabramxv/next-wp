import { Section, Container } from "@/components/craft";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Портфолио — Арт-студия Идея",
  description: "Примеры наших работ в студии декора Идея",
};

export default function PortfolioPage() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
              <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-semibold mb-6">Портфолио</h1>
        
                {/* GALERY */}
                          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {Array.from({ length: 18 }).map((_, i) => (
                              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                                  <Image
                                      src={`/images/portfolio/${i + 1}.jpg`}
                                      alt={`Галерея оформление ${i + 1}`}
                                      fill
                                      className="object-cover"
                                  />
                              </div>
                            ))}
                          </div>  
      
      
      
              </div>
            </main>
  );
}
