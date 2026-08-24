import { ArrowRight, Play } from "lucide-react";

import styles from "./BrandStory.module.css";

function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.media}>
          <img
            src="/assets/images/brand/casa-del-mar.jpg"
            alt="Casa del Mar"
            className={styles.image}
          />

          <div className={styles.overlay} />

          <button
            type="button"
            className={styles.playButton}
            aria-label="Assistir vídeo sobre a Casa del Mar"
          >
            <Play size={25} fill="currentColor" />
          </button>

          <div className={styles.content}>
            <p className={styles.eyebrow}>De Meriti para o Rio</p>

            <h2>
              Uma história de confiança,
              <span> agora mais perto de você.</span>
            </h2>

            <p className={styles.description}>
              A experiência da Casa del Mar ganha um novo capítulo com a Del Mar
              Congelados.
            </p>

            <a href="/nossa-historia" className={styles.link}>
              Conheça nossa história
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
