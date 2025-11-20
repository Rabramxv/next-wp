// app/date-night/page.tsx
export default function DateNightPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-4">Арт-свидание</h1>
          <p className="text-[#e7dcc7] mb-4 leading-relaxed">
            Устали от обычных свиданий? Подарите себе и своей половинке особенный вечер: рисование вином, романтическая атмосфера и профессиональная фотосессия.
          </p>
  
          <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2 mb-4">
            <li>Рисуем вином — легко и весело</li>
            <li>Приглушённый свет и приятная музыка</li>
            <li>Фотосессия в романтическом стиле</li>
          </ul>
  
          <p className="text-[#d6c9b0]">Забронируйте дату — остальное мы возьмём на себя.</p>
        </div>
      </main>
    );
  }
  