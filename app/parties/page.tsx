// app/parties/page.tsx
export default function PartiesPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Праздники под ключ</h1>
  
          <p className="text-[#e7dcc7] mb-6 leading-relaxed">
            Представьте свой идеальный праздник. А теперь позвольте нам его создать.
          </p>
  
          <section className="space-y-8">
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Детский день рождения</h2>
              <p className="text-[#d6c9b0] mb-3">
                Мы берем все организационные заботы на себя и дарим незабываемый день рождения, где каждая минута наполнена радостью и волшебством!
              </p>
              <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
                <li>Увлекательный квест по теме праздника.</li>
                <li>Встреча с ростовыми куклами.</li>
                <li>Яркая фотозона и зажигательная дискотека.</li>
                <li>Гибкость формата — вы можете принести еду и торт.</li>
              </ul>
            </article>
  
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Взрослый день рождения</h2>
              <p className="text-[#d6c9b0] mb-3">
                Мы организуем активность, фотозону, ведущего и музыкальное сопровождение — всё, чтобы вечер получился живым и запоминающимся.
              </p>
              <p className="text-[#d6c9b0]">Формат адаптируется под ваши пожелания — от камерных вечеров до больших торжеств.</p>
            </article>
          </section>
        </div>
      </main>
    );
  }
  