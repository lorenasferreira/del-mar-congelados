import ProductCard from "../../ui/ProductCard/ProductCard";
import products from "../../../data/products";

import styles from "./FeaturedProducts.module.css";

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section id="destaques" className={styles.offers}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>Escolhas para você</p>

            <h2>
              Destaques <span>Del Mar</span>
            </h2>
          </div>

          <a href="/produtos" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
