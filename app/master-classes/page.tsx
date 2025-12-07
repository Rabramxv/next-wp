// app/master-classes/page.tsx
import Image from "next/image";
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                      src={`/images/master-classes/${i + 1}.jpg`}
                      alt={`Галерея оформление ${i + 1}`}
                      fill
                      className="object-cover"
                  />
              </div>
            ))}
          </div>
  
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Рисование текстурной пастой</h2>
              <p className="text-[#d6c9b0] mb-3">Объёмный мастер-класс «Картина с текстурой» — работа с пастой, холстом и профессиональными материалами.</p>
            </article>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 1 }).map((_, i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                      src={`/images/master-classes/${i + 3}.jpg`}
                      alt={`Галерея оформление ${i + 1}`}
                      fill
                      className="object-cover"
                  />
              </div>
            ))}
          </div>
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Рисование спиртовыми чернилами</h2>
              <p className="text-[#d6c9b0] mb-3">Увлекательный мастер-класс по работе со спиртовыми чернилами — яркие абстрактные работы.</p>
            </article>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                      src={`/images/master-classes/${i + 6}.jpg`}
                      alt={`Галерея оформление ${i + 1}`}
                      fill
                      className="object-cover"
                  />
              </div>
            ))}
          </div>
            <article className="bg-black/60 rounded-2xl p-6 border border-black/30">
              <h2 className="text-xl font-semibold mb-3">Роспись спилов</h2>
              <p className="text-[#d6c9b0] mb-3">Интересный мастер-класс по работе с натуральными материалами — красочные спилы украшение любого интерьера.</p>
            </article>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                      src={`/images/master-classes/${i + 2}.jpg`}
                      alt={`Галерея оформление ${i + 5}`}
                      fill
                      className="object-cover"
                  />
              </div>
            ))}
          </div>
          </section>
          
        </div>
        
      </main>
    );
  }
  