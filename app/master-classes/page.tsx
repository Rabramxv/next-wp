// app/master-classes/page.tsx
export default function MasterClassesPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Мастер-классы</h1>
  
          <section className="space-y-8">
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Новогодний мастер-класс</h2>
              <p className="text-[#d6c9b0] mb-3">Уютный мастер-класс «Елочная игрушка». Мы можем также приехать к вам в школу или на праздник.</p>
              <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
                <li>Все материалы в комплекте</li>
                <li>Выездная команда и индивидуальный подход</li>
                <li>Развитие мелкой моторики и творческая радость</li>
              </ul>
            </article>
  
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Рисование текстурной пастой</h2>
              <p className="text-[#d6c9b0] mb-3">Объёмный мастер-класс «Картина с текстурой» — работа с пастой, холстом и профессиональными материалами.</p>
            </article>
  
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Рисование спиртовыми чернилами</h2>
              <p className="text-[#d6c9b0] mb-3">Увлекательный мастер-класс по работе со спиртовыми чернилами — яркие абстрактные работы.</p>
            </article>
          </section>
        </div>
      </main>
    );
  }
  