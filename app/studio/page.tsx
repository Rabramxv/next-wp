// app/studio/page.tsx
import Image from "next/image";
export default function StudioPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Студия фотосъёмки</h1>
  
          <p className="text-[#e7dcc7] mb-6 leading-relaxed">
            Мечтаете о съемке в стильной обстановке, но нет времени на подготовку локации? Наши готовые фотозоны — это идеальное решение для фотографов, моделей, блогеров и всех, кто ценит эстетику и свое время.
          </p>
  
          <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
            <li>Разнообразие зон в разном стиле</li>
            <li>Профессиональное студийное освещение включено</li>
            <li>Возможность аренды всей студии или отдельной зоны</li>
          </ul>
          <section className="space-y-8">
          <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Новогодняя фотозона</h2>
              <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
                <li>Подходит для 4-5 человек</li>
                <li>1000 рублей — 30 минут</li>
                <li>2000 рублей — 1 час</li>
                </ul>
          </article>

          <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Зимняя сказка</h2>
          <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
            <li>Подходит для 1-2 человек</li>
            <li>1000 рублей — 30 минут</li>
            <li>2000 рублей — 1 час</li>
          </ul>
          </article>
          </section>
          {/* GALERY */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                            <Image
                                src={`/images/studio/${i + 1}.jpg`}
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
  