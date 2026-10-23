import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import products from "../../data/products";
import ProductCard from "../../components/products/ProductCard/ProductCard";
import ProductFilters from "../../components/products/ProductFilters/ProductFilters";

import styles from "./Products.module.css";

function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
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
        activeCategory === "todos" || product.category === activeCategory;

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

          <p className={styles.demoNotice}>
            Catálogo demonstrativo. Produtos, disponibilidade e preços sujeitos
            à confirmação.
          </p>
        </div>
      </section>

      <section className={styles.catalog} aria-label="Catálogo de produtos">
        <div className={styles.container}>
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

              <h2>Nenhum produto encontrado</h2>

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
    </main>
  );
}

export default Products;
