import styles from "./ProductFilters.module.css";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "peixes", label: "Peixes" },
  { id: "frutos-do-mar", label: "Frutos do Mar" },
  { id: "combos", label: "Combos" },
];

function ProductFilters({ activeCategory, onCategoryChange }) {
  return (
    <div
      className={styles.filters}
      role="group"
      aria-label="Filtrar produtos por categoria"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`${styles.filter} ${
            activeCategory === category.id ? styles.active : ""
          }`}
          onClick={() => onCategoryChange(category.id)}
          aria-pressed={activeCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default ProductFilters;
