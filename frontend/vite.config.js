import process from "node:process";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { getSiteOrigin, pages, shareImage, shareImageAlt } from "./src/config/seo.js";

function siteMetadata(origin) {
  const { title, description } = pages["/"];
  const image = origin + shareImage;
  const buildTag = (tag, attrs) => ({ tag, attrs, injectTo: "head" });
  const meta = (name, content) => buildTag("meta", { name, content });
  const og = (property, content) => buildTag("meta", { property: `og:${property}`, content });

  return {
    name: "del-mar-site-metadata",
    transformIndexHtml(html) {
      return {
        html: html.replace("<title>Del Mar Congelados</title>", `<title>${title}</title>`),
        tags: [
          meta("description", description),
          meta("robots", origin ? "index, follow" : "noindex, follow"),
          og("title", title),
          og("description", description),
          og("type", "website"),
          og("locale", "pt_BR"),
          og("site_name", "Del Mar Congelados"),
          og("image", image),
          og("image:type", "image/jpeg"),
          og("image:width", "1200"),
          og("image:height", "630"),
          og("image:alt", shareImageAlt),
          meta("twitter:card", "summary_large_image"),
          meta("twitter:title", title),
          meta("twitter:description", description),
          meta("twitter:image", image),
          meta("twitter:image:alt", shareImageAlt),
          ...(origin ? [
            og("url", `${origin}/`),
            buildTag("link", { rel: "canonical", href: `${origin}/` }),
          ] : []),
        ],
      };
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: "User-agent: *\nAllow: /\n" +
          (origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""),
      });
      if (origin) {
        const urls = Object.keys(pages).map((path) => `  <url><loc>${origin}${path}</loc></url>`);
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            ...urls,
            "</urlset>",
            "",
          ].join("\n"),
        });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react(), siteMetadata(getSiteOrigin(env.VITE_SITE_URL))],
  };
});
