// app/about/page.tsx
export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-4">О нас</h1>
  
          <p className="text-[#e7dcc7] leading-relaxed mb-4">
            Добро пожаловать в студию декора «Идея»! Мы — команда вдохновленных профессионалов, которые с 2015 года превращают важные моменты жизни в настоящую сказку. Наш дом — Нижний Новгород, но мы готовы делиться красотой по всему региону.
          </p>
  
          <p className="text-[#d6c9b0] mb-4">
            Для нас декорирование — это не просто расставить цветы и драпировки. Это искусство создавать атмосферу, в которой рождаются самые искренние эмоции.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-3">Почему нам доверяют</h2>
          <ul className="list-disc ml-5 text-[#d6c9b0] space-y-2">
            <li><strong>Опыт:</strong> более 9 лет работы и тысячи счастливых клиентов.</li>
            <li><strong>Командный подход:</strong> партнёрства с организаторами, фотографами и подрядчиками.</li>
            <li><strong>Гибкость:</strong> подходим с любовью к проектам любого масштаба.</li>
          </ul>
  
          <p className="mt-6 text-[#d6c9b0]">Наша миссия — выслушать ваши мечты и превратить их в идеальную историю.</p>
        </div>
      </main>
    );
  }
  