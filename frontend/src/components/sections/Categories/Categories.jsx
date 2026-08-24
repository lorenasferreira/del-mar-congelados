import { ArrowRight } from "lucide-react";

import categories from "../../../data/categories";

import styles from "./Categories.module.css";

function Categories() {
  return (
    <section
      id="categorias"
      className={styles.categories}
      aria-label="Categorias de produtos"
    >
      <div className={styles.container}>
        {categories.map((category) => (
          <a key={category.id} href={category.href} className={styles.category}>
            <div className={styles.imageWrapper}>
              <img src={category.image} alt="" className={styles.image} />
            </div>

            <h2>{category.name}</h2>

            <span className={styles.link}>
              Ver mais
              <ArrowRight size={15} strokeWidth={1.8} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
