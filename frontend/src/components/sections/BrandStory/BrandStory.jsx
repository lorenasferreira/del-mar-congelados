import styles from "./BrandStory.module.css";

function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.media}>
          <img
            src="/assets/images/home/hero-seafood.png"
            alt="Seleção de peixes e frutos do mar da Del Mar Congelados"
            className={styles.image}
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>Do mar para a sua mesa</p>
            <h2>Veja de perto <span>a nossa qualidade</span></h2>
            <p className={styles.description}>Uma seleção feita com cuidado, todos os dias.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
