// app/girls-night/page.tsx
export default function GirlsNightPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-4">Арт-девичник</h1>
          <p className="text-[#e7dcc7] mb-6 leading-relaxed">
            Подарите себе и подругам незабываемый вечер, где творчество, отдых и красота сливаются воедино!
          </p>
  
          <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2 mb-4">
            <li>Рисование текстурной пастой или спиртовыми чернилами</li>
            <li>Гламурная фотосессия в стильной фотозоне</li>
            <li>Все материалы включены</li>
            <li>Вы можете принести еду и напитки</li>
          </ul>
  
          <p className="text-[#d6c9b0]">Готовы творить? Забронируйте место для себя и своих подруг.</p>
        </div>
      </main>
    );
  }
  