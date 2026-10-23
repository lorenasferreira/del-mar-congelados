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

        <p className={styles.price}>
          {formattedPrice}
          <span>/{product.unit}</span>
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
