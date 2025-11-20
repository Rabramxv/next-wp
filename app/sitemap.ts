// app/sitemap.ts
import { getAllPages } from "@/lib/data";
import { siteConfig } from "@/site.config";

export default async function sitemap() {
  const base = siteConfig.site_domain.replace(/\/$/, "");
  const pages = await getAllPages();

  const routes = pages.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: p.lastModified ?? new Date().toISOString(),
  }));

  return [
    {
      url: base,
      lastModified: new Date().toISOString(),
    },
    ...routes,
  ];
}
