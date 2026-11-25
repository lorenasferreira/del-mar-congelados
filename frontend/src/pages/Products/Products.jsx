import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";
import { WHATSAPP_URL } from "../../config/contact";
import categories from "../../data/categories";
import products from "../../data/products";
import ProductCard from "../../components/products/ProductCard/ProductCard";
import ProductFilters from "../../components/products/ProductFilters/ProductFilters";

import styles from "./Products.module.css";

function Products() {
  const [search, setSearch] = useState("");
  const [params, setParams] = useSearchParams();
  const category = params.get("categoria");
  const activeCategory = categories.some(({ id }) => id === category) ? category : "todos";
  const setActiveCategory = (value) => {
    const next = new URLSearchParams(params);
    if (value === "todos") next.delete("categoria");
    else next.set("categoria", value);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = useMemo(() => {
    const normalize = (value) =>
      value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    const query = normalize(search);

    const result = products.filter((product) => {
      const searchableText = normalize(
        `${product.name} ${product.description || ""}`,
      );

      const matchesSearch = searchableText.includes(query);

      const matchesCategory =
        activeCategory === "todos" ||
        (activeCategory === "promocoes" ? product.promotion : product.category === activeCategory);

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOrder === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    }

    return result;
  }, [search, activeCategory, sortOrder]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("todos");
    setSortOrder("default");
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>DEL MAR CONGELADOS</span>

          <h1 className={styles.title}>
            Sabores do <em>Mar</em>
          </h1>

          <p className={styles.subtitle}>
            Explore nossa seleção de peixes e frutos do mar congelados e
            encontre opções para suas receitas.
          </p>

          <p className={styles.confirmationNote}>
            Produtos, disponibilidade e preços sujeitos à confirmação.
          </p>
        </div>
      </section>

      <section className={styles.catalog} aria-labelledby="catalog-title">
        <div className={styles.container}>
          <h2 className="visually-hidden" id="catalog-title">Catálogo de produtos</h2>
          <div className={styles.toolbar}>
            <label className={styles.searchBox}>
              <Search size={20} aria-hidden="true" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar produtos..."
                aria-label="Buscar produtos"
              />
            </label>

            <label className={styles.sortBox}>
              <SlidersHorizontal size={19} aria-hidden="true" />

              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                aria-label="Ordenar produtos"
              >
                <option value="default">Relevância</option>
                <option value="name">Nome: A–Z</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
              </select>
            </label>
          </div>

          <ProductFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <p className={styles.results} aria-live="polite">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "produto encontrado"
              : "produtos encontrados"}
          </p>

          {filteredProducts.length > 0 ? (
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Search size={36} aria-hidden="true" />

              <h3>Nenhum produto encontrado</h3>

              <p>
                Experimente outro termo ou selecione uma categoria diferente.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className={styles.clearButton}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>
      <section className={styles.availability}>
        <div className={styles.container}>
          <h2>{WHATSAPP_URL ? "Consultar disponibilidade pelo WhatsApp" : "Disponibilidade e atendimento"}</h2>
          {WHATSAPP_URL ? (
            <>
              <p>Consulte os produtos disponíveis, os preços atualizados e as condições de atendimento diretamente pelo nosso WhatsApp.</p>
              <a className={styles.clearButton} href={WHATSAPP_URL}>Consultar pelo WhatsApp</a>
            </>
          ) : (
            <>
              <p>O WhatsApp comercial da Del Mar Congelados está em configuração.</p>
              <Link className={styles.clearButton} to="/contato">Ver canais de atendimento</Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Products;
