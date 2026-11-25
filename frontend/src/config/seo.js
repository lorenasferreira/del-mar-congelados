import recipes from "../data/recipes.js";

export const shareImage = "/assets/social/del-mar-share.jpg";
export const shareImageAlt = "Del Mar Congelados. Qualidade e praticidade do mar para a sua mesa.";
export const pages = {
  "/": {
    title: "Del Mar Congelados | Qualidade e praticidade",
    description: "Conheça a Del Mar Congelados e sua seleção de pescados congelados para facilitar o preparo das suas refeições.",
  },
  "/produtos": {
    title: "Produtos | Del Mar Congelados",
    description: "Explore o catálogo da Del Mar Congelados com peixes e frutos do mar para diferentes preparos.",
  },
  "/quem-somos": {
    title: "Quem Somos | Del Mar Congelados",
    description: "Conheça a Del Mar Congelados, uma operação ligada à Casa Del Mar Meriti que leva praticidade ao preparo de pescados.",
  },
  "/contato": {
    title: "Contato e Pedidos | Del Mar Congelados",
    description: "Veja os canais da Del Mar Congelados para consultas e encontre o perfil oficial da Casa Del Mar Meriti.",
  },
  "/receitas": {
    title: "Receitas | Del Mar Congelados",
    description: "Encontre ideias de receitas com peixes e frutos do mar para o dia a dia.",
  },
  ...Object.fromEntries(recipes.map(({ slug, name, description }) => [
    `/receitas/${slug}`, { title: `${name} | Del Mar Congelados`, description },
  ])),
};

export function getSiteOrigin(value) {
  if (!value) return "";
  const url = new URL(value);
  if (url.protocol !== "https:" || url.href !== `${url.origin}/`) {
    throw new Error("VITE_SITE_URL deve ser uma origem HTTPS, sem caminho, parâmetros ou credenciais.");
  }
  return url.origin;
}
