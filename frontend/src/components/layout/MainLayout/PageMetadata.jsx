import { useEffect } from "react";
import { getSiteOrigin, pages } from "../../../config/seo";

const siteOrigin = getSiteOrigin(import.meta.env.VITE_SITE_URL);
const notFound = {
  title: "Página não encontrada | Del Mar Congelados",
  description: "Explore o catálogo, as receitas e os canais da Del Mar Congelados.",
};

function PageMetadata({ pathname }) {
  useEffect(() => {
    const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";
    const page = Object.hasOwn(pages, path) ? pages[path] : null;
    const { title, description } = page ?? notFound;
    document.title = title;

    for (const name of ["description", "twitter:title", "twitter:description", "robots"]) {
      const content = {
        description,
        "twitter:title": title,
        "twitter:description": description,
        robots: page && siteOrigin ? "index, follow" : "noindex, follow",
      }[name];
      document.head.querySelector(`meta[name="${name}"]`).content = content;
    }
    document.head.querySelector('meta[property="og:title"]').content = title;
    document.head.querySelector('meta[property="og:description"]').content = description;

    const canonical = document.head.querySelector('link[rel="canonical"]');
    const socialUrl = document.head.querySelector('meta[property="og:url"]');
    if (page && siteOrigin) {
      const link = canonical ?? document.createElement("link");
      link.rel = "canonical";
      link.href = `${siteOrigin}${path}`;
      document.head.append(link);
      socialUrl.content = link.href;
    } else {
      canonical?.remove();
      if (socialUrl) socialUrl.content = siteOrigin ? `${siteOrigin}/` : "";
    }
  }, [pathname]);

  return null;
}

export default PageMetadata;
