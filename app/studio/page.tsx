// app/studio/page.tsx
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
  
          <div className="mt-8 text-sm text-[#b8ad98">/* TODO: вставить каталог фотозон: изображения в /public/images/studio/ */</div>
        </div>
      </main>
    );
  }
  