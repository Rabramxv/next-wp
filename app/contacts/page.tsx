import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Арт-студия Идея",
  description: "Контактная информация студии декора Идея",
};

export default function ContactsPage() {
  return (
    <Section>
      <Container>
        <Prose>
          <h1>Контакты</h1>
          <p>Номер телефона для связи: <a href="tel:+79023068909">+8 (902) 306-89-09</a></p>
          <p>Сообщество в VK: <a href="https://vk.com/decoriideya" target="_blank" rel="noopener noreferrer">vk.com/decoriideya</a></p>
          <p>Электронная почта: <a href="mailto:irinakas1@list.ru">irinakas1@list.ru</a></p>
          <p>ООО «Студия декора Идея»</p>
          <p>Юридический и почтовый адрес: 603093 г. Н. Новгород, ул. Родионова, д.192, корп.1</p>
          <p>ИНН 5260491060</p>
          <p>ОГРН 1235200021396</p>
        </Prose>
      </Container>
    </Section>
  );
}
