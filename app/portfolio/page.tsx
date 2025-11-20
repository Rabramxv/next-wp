import { Section, Container } from "@/components/craft";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Портфолио — Арт-студия Идея",
  description: "Примеры наших работ в студии декора Идея",
};

export default function PortfolioPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold mb-8">Портфолио</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Пример изображений */}
          <Image src="/portfolio/image1.jpg" alt="Пример работы 1" width={400} height={300} className="rounded-lg" />
          <Image src="/portfolio/image2.jpg" alt="Пример работы 2" width={400} height={300} className="rounded-lg" />
          <Image src="/portfolio/image3.jpg" alt="Пример работы 3" width={400} height={300} className="rounded-lg" />
          {/* Добавляй остальные картинки сюда */}
        </div>
      </Container>
    </Section>
  );
}
