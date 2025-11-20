// app/events/page.tsx
export default function EventsPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Оформление мероприятий</h1>
  
          <p className="text-[#e7dcc7] leading-relaxed mb-6">
            Мы верим, что гениальное оформление — это не просто декор, а атмосфера, которую гости почувствуют с порога.
            Это язык, на котором говорит ваш праздник, и те эмоции, которые останутся на каждой фотографии.
            Забудьте о хлопотах и бесконечных списках — мы возьмем на себя все, чтобы вы могли полностью погрузиться в свой великий день.
          </p>
  
          {/* TABS / SUBSECTIONS */}
          <section className="mt-8 space-y-8">
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Свадебное оформление</h2>
              <p className="text-[#d6c9b0] mb-3">
                Ваша свадьба — это уникальная история, и ее визуальное воплощение должно быть безупречным. Мы превращаем места в пространства, где каждая деталь говорит о ваших чувствах.
              </p>
              <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
                <li><strong>Оформление церемонии:</strong> Арки, дорожка лепестков, изящные скамьи.</li>
                <li><strong>Декор банкетной зоны:</strong> Элегантные столы, центральные композиции, мягкий свет.</li>
                <li><strong>Свадебный фотобэкдор:</strong> Живая часть вашей истории для идеальных кадров.</li>
                <li><strong>Акцентные зоны:</strong> Welcome, candy-бар, зона для подарков и т.д.</li>
              </ul>
              <p className="mt-4 text-[#d6c9b0]">Мы слушаем вашу историю, чувствуем вашу эстетику и создаем целостный мир.</p>
            </article>
  
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Тематические фотозоны</h2>
              <p className="text-[#d6c9b0] mb-3">
                Хотите, чтобы гости не выпускали телефоны из рук, а лента в соцсетях взорвалась от ярких снимков? Наша фотозона станет центром притяжения и главным развлечением любого мероприятия.
              </p>
              <p className="text-[#d6c9b0] mb-3"><strong>Что мы предлагаем:</strong></p>
              <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
                <li>Разработка концепции — уникальная идея под ваше событие.</li>
                <li>Профессиональный реквизит — мебель, аксессуары, декор.</li>
                <li>Разные форматы — бэкдропы, интерактивные зоны и пр.</li>
              </ul>
              <p className="mt-4 text-[#d6c9b0]">Забронируйте фотозону для своего мероприятия!</p>
            </article>
          </section>
  
          {/* TODO: добавить изображения в public/images/events/ и вставить галерею ниже */}
          <div className="mt-10">
            <p className="text-sm text-[#b8ad98]">/* TODO: галерея — положить картинки в /public/images/events/ и вставить здесь */</p>
          </div>
        </div>
      </main>
    );
  }
  