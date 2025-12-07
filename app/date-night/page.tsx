// app/date-night/page.tsx
import Image from "next/image";
export default function DateNightPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-4">Арт-свидание</h1>
          <section className="bg-black/60 rounded-2xl p-6 border border-black/30 space-y-3 text-[#d6c9b0]">
              <p className="text-[#e7dcc7] mb-4 leading-relaxed">
                Устали от обычных свиданий? Подарите себе и своей половинке особенный вечер: рисование спиртовыми чернилами, романтическая атмосфера и профессиональная фотосессия.
              </p>
      
              <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2 mb-4">
                <li>Рисование спиртовыми чернилами — легко и весело</li>
                <li>Приглушённый свет и приятная музыка</li>
                <li>Фотосессия в романтическом стиле</li>
              </ul>
            </section>
          {/* GALERY */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                      src={`/images/date-night/${i + 1}.jpg`}
                      alt={`Галерея оформление ${i + 1}`}
                      fill
                      className="object-cover"
                  />
              </div>
            ))}
          </div>
  
          <p className="text-[#d6c9b0]">Забронируйте дату — остальное мы возьмём на себя.</p>
        </div>
      </main>
    );
  }
  