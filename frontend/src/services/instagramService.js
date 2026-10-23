import { instagramPosts } from "../data/instagramPosts";

const API_URL = import.meta.env.VITE_API_URL;

export async function getInstagramPosts() {
  if (!API_URL) {
    return instagramPosts;
  }

  try {
    const response = await fetch(
      `${API_URL.replace(/\/$/, "")}/api/instagram/posts`,
      {
        headers: {
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!response.ok) {
      throw new Error("Erro ao carregar publicações do Instagram.");
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Formato de resposta inválido.");
    }

    return data
      .filter(
        (post) =>
          typeof post.id === "string" &&
          typeof post.image === "string" &&
          /^https:\/\//.test(post.image) &&
          typeof post.permalink === "string" &&
          /^https:\/\/(www\.)?instagram\.com\//.test(post.permalink),
      )
      .slice(0, 8);
  } catch (error) {
    console.error("Falha ao carregar Instagram:", error);
    return instagramPosts;
  }
}
