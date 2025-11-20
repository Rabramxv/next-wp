// lib/data.ts
export type Page = {
    slug: string;
    title: string;
    description?: string;
    content: string; // html или markdown (мы рендерим как HTML)
    ogImage?: string;
    lastModified?: string;
  };
  
  const PAGES: Page[] = [
    {
      slug: "about",
      title: "О нас",
      description: "Наша студия декора — текст для SEO.",
      content: `<h2>Наша студия</h2><p>Короткий абзац о студии, опыте и услугах.</p>`,
      lastModified: new Date().toISOString(),
    },
    {
      slug: "portfolio",
      title: "Портфолио",
      description: "Подборка выполненных проектов.",
      content: `<h2>Портфолио</h2><p>Примеры работ и кейсы.</p>`,
      lastModified: new Date().toISOString(),
    },
  ];
  
  export async function getAllPages(): Promise<Page[]> {
    return PAGES;
  }
  
  export async function getPageBySlug(slug: string): Promise<Page | null> {
    return PAGES.find((p) => p.slug === slug) ?? null;
  }
  