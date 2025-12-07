export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-[#1b140d] text-[#f5e6d0] antialiased py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Контакты</h1>

        <section className="bg-black/60 rounded-2xl p-6 border border-black/30 space-y-3 text-[#d6c9b0]">
          <p>Номер телефона: <a className="text-[#f5e6d0] underline" href="tel:+79023068909">+8 (902) 306-89-09</a></p>
          <p>Сообщество в VK: <a className="text-[#f5e6d0] underline" href="https://vk.com/decoriideya" target="_blank" rel="noopener noreferrer">vk.com/decoriideya</a></p>
          <p>Сообщество в TG: <a className="text-[#f5e6d0] underline" href="https://t.me/decorstudioidea" target="_blank" rel="noopener noreferrer">https://t.me/decorstudioidea</a></p>
          <p>Email: <a className="text-[#f5e6d0] underline" href="mailto:irinakas1@list.ru">irinakas1@list.ru</a></p>
          <p>ООО «Студия декора Идея»</p>
          <p>Юридический и почтовый адрес: 603093 г. Н. Новгород, ул. Родионова, д.192, корп.1</p>
          <p>ИНН 5260491060</p>
          <p>ОГРН 1235200021396</p>
        </section>
      </div>
    </main>
  );
}
