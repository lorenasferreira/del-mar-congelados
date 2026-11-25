import categories from "../../../data/categories";
import styles from "./ProductFilters.module.css";

const filters = [{ id: "todos", name: "Todos" }, ...categories];

function ProductFilters({ activeCategory, onCategoryChange }) {
  return (
    <div
      className={styles.filters}
      role="group"
      aria-label="Filtrar produtos por categoria"
    >
      {filters.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`${styles.filter} ${
            activeCategory === category.id ? styles.active : ""
          }`}
          onClick={() => onCategoryChange(category.id)}
          aria-pressed={activeCategory === category.id}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default ProductFilters;
