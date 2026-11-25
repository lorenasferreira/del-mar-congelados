import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import facade from "../../../assets/brand-story/market-facade-home.webp";
import styles from "./OurStory.module.css";

function OurStory() {
  return (
    <section id="historia" className={styles.story}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Quem Somos</h2>
          <p className={styles.text}>
            A Del Mar Congelados leva a experiência da Casa Del Mar Meriti no
            comércio de pescados para uma seleção de congelados que facilita o
            preparo das refeições do dia a dia.
          </p>
          <Link to="/quem-somos" className={styles.button}>
            Conheça a Del Mar
            <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
        <figure className={styles.facade}>
          <img src={facade} alt="Ilustração da fachada azul da Casa Del Mar Meriti com balcões voltados para a rua"
            width="1200" height="676" loading="lazy" decoding="async" />
        </figure>
      </div>
    </section>
  );
}

export default OurStory;
