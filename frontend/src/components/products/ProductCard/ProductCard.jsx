import styles from "./ProductCard.module.css";

const formatPrice = (price) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.category}>
          {product.category === "peixes"
            ? "Peixes"
            : product.category === "frutos-do-mar"
              ? "Frutos do Mar"
              : "Combos"}
        </span>

        <h3 className={styles.name}>{product.name}</h3>

        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}

        <div className={styles.priceRow}>
          <strong className={styles.price}>{formatPrice(product.price)}</strong>
          <span className={styles.unit}>/{product.unit}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
