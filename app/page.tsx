// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased">
      {/* HERO */}
      <section id="hero" className="relative flex items-center justify-center text-center min-h-[64vh] lg:min-h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#2b2118]/40" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">Арт-студия «Идея»</h1>
          <p className="text-base md:text-lg text-[#e7dcc7] mb-6">Место, где рождается креатив и творчество</p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="/events" className="px-5 py-2 rounded-full border border-[#f5e6d0] text-[#f5e6d0] hover:bg-[#f5e6d0] hover:text-black transition">Наши услуги</a>
            <a href="/portfolio" className="px-5 py-2 rounded-full bg-[#7dd3fc] text-black font-medium hover:opacity-95 transition">Портфолио</a>
          </div>
        </div>
      </section>

      {/* SHORT INTRO / SERVICES LINKS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <a href="/events" className="block p-6 bg-black/60 rounded-2xl border border-black/30 hover:scale-[1.01] transition">
            <h3 className="font-semibold">Оформление мероприятий</h3>
            <p className="mt-2 text-sm text-[#d6c9b0]">Мы создаем не просто декор, а атмосферу, которую будут помнить.</p>
          </a>

          <a href="/parties" className="block p-6 bg-black/60 rounded-2xl border border-black/30 hover:scale-[1.01] transition">
            <h3 className="font-semibold">Праздники под ключ</h3>
            <p className="mt-2 text-sm text-[#d6c9b0]">Представьте свой идеальный праздник. А теперь позвольте нам его создать.</p>
          </a>

          <a href="/girls-night" className="block p-6 bg-black/60 rounded-2xl border border-black/30 hover:scale-[1.01] transition">
            <h3 className="font-semibold">Арт-девичник</h3>
            <p className="mt-2 text-sm text-[#d6c9b0]">Хватит однотипных посиделок! Создайте эмоции, которые останутся на холсте.</p>
          </a>

          <a href="/date-night" className="block p-6 bg-black/60 rounded-2xl border border-black/30 hover:scale-[1.01] transition">
            <h3 className="font-semibold">Арт-свидание</h3>
            <p className="mt-2 text-sm text-[#d6c9b0]">Тихий разговор, кисти в руках и шедевр, который будет помнить ваше сердце.</p>
          </a>
        </div>
      </section>

      {/* CTA: master-classes / studio */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-black/60 rounded-2xl border border-black/30">
          <h3 className="text-xl font-semibold">Мастер-классы</h3>
          <p className="mt-3 text-[#d6c9b0]">Надоело сидеть без дела? Создайте то, что можно потрогать руками!</p>
          <a href="/master-classes" className="inline-block mt-4 px-4 py-2 bg-[#f5e6d0] text-black rounded-md">Узнать больше</a>
        </div>
        <div className="p-6 bg-black/60 rounded-2xl border border-black/30">
          <h3 className="text-xl font-semibold">Студия фотосъемки</h3>
          <p className="mt-3 text-[#d6c9b0]">Место, где картинка оживает!</p>
          <a href="/studio" className="inline-block mt-4 px-4 py-2 bg-[#f5e6d0] text-black rounded-md">Посмотреть зоны</a>
        </div>
      </section>

      {/* FOOTER SPACER */}
      <div className="py-12" />
    </main>
  );
}
