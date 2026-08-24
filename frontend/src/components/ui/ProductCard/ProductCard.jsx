import { Plus } from "lucide-react";

import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3>{product.name}</h3>

        <div className={styles.bottom}>
          <p className={styles.price}>
            {formattedPrice}
            <span>/{product.unit}</span>
          </p>

          <button
            type="button"
            className={styles.addButton}
            aria-label={`Adicionar ${product.name}`}
          >
            <Plus size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
