// app/[slug]/page.tsx
import { getPageBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPageBySlug(params.slug);
  if (!page) return notFound();

  return (
    <main className="mx-auto max-w-4xl py-12">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}

export async function generateStaticParams() {
  const { getAllPages } = await import("@/lib/data");
  const pages = await getAllPages();
  return pages.map((p: any) => ({ slug: p.slug }));
}
