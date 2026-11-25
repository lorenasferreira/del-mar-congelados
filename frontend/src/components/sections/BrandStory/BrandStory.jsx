import styles from "./BrandStory.module.css";

function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.media}>
          <img
            src="/assets/images/home/hero-seafood.webp"
            alt=""
            loading="lazy"
            width="1536"
            height="1024"
            className={styles.image}
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>Do mar para a sua mesa</p>
            <h2>Veja de perto <span>a nossa qualidade</span></h2>
            <p className={styles.description}>Cuidado na escolha dos produtos e fornecedores.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
