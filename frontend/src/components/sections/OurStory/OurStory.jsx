import { ArrowRight } from "lucide-react";

import styles from "./OurStory.module.css";

function OurStory() {
  return (
    <section id="historia" className={styles.story}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.script}>Nossa</p>

          <h2>História</h2>

          <p className={styles.text}>
            A Del Mar Congelados nasce como um novo capítulo de uma história
            construída com qualidade, confiança e paixão pelo melhor do mar.
          </p>

          <p className={styles.text}>
            Uma nova forma de levar a experiência da Casa del Mar para mais
            pessoas, unindo produtos selecionados, praticidade e a comodidade de
            receber em casa.
          </p>

          <a href="/nossa-historia" className={styles.button}>
            Conheça nossa história
            <ArrowRight size={17} strokeWidth={1.8} />
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/assets/images/story/nossa-historia.jpg"
            alt="A história por trás da Del Mar Congelados"
            className={styles.image}
          />

          <div className={styles.detail}>
            <span>Del Mar</span>
            <p>Qualidade que atravessa gerações</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
