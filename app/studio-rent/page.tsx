// app/rental/page.tsx
import Image from "next/image";

export default function RentalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Аренда помещения</h1>

        <section className="space-y-8">

          <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
            <p className="text-[#d6c9b0] mb-3">
              В нашей студии вы можете арендовать уютное, стильное пространство для мастер-классов,
              камерных мероприятий, творческих и образовательных проектов.
            </p>
            <p className="text-[#d6c9b0]">
              Пространство оснащено всем необходимым для комфортной работы.
            </p>
          </article>

          <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
            <h2 className="text-xl font-semibold mb-3">Что доступно</h2>
            <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
              <li>Зал со стильным интерьером в стиле «лофт»</li>
              <li>Столы и стулья (12 штук)</li>
              <li>Отдельные туалеты</li>
            </ul>
          </article>

          <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
            <h2 className="text-xl font-semibold mb-3">Стоимость</h2>
            <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
              <li>1 час: 700 ₽</li>
              <li>2 часа: 1400 ₽</li>
              <li>3+ часов: 600 ₽ / час</li>
            </ul>
          </article>

          <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
            <p className="text-[#d6c9b0] mb-3">
              Чтобы забронировать время или задать вопросы, свяжитесь с нами — мы поможем подобрать
              идеальный формат и подготовим помещение для вашего проекта.
            </p>

            <a
              href="/contacts"
              className="inline-block px-5 py-3 rounded-xl border border-black/40 hover:border-black/60 transition-colors text-sm font-medium"
            >
              Связаться с нами
            </a>
          </article>

        </section>

       
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src={`/images/studio-rent/${i + 1}.jpg`}
                alt={`Фото аренды ${i + 1}`}
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
