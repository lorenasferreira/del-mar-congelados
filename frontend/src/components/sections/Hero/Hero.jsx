import { MessageCircle, ChevronDown } from "lucide-react";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <img
          src="/assets/images/home/hero-seafood.png"
          alt="Peixes e frutos do mar frescos da Del Mar Congelados"
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>
          O sabor do mar
          <span>direto para sua mesa</span>
        </h1>

        <p>
          Pescados e frutos do mar congelados, selecionados com qualidade e
          entregues até você.
        </p>

        <a href="/contato" className={styles.cta}>
          <MessageCircle size={18} strokeWidth={1.8} />
          Fazer pedido pelo WhatsApp
        </a>
      </div>

      <a
        href="#categorias"
        className={styles.scroll}
        aria-label="Ver categorias"
      >
        <ChevronDown size={22} />
      </a>

      <div className={styles.wave} aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
        M0,55
        C140,10 260,15 390,55
        C520,95 650,100 780,55
        C920,5 1060,10 1180,50
        C1290,85 1370,80 1440,55
        L1440,120
        L0,120
        Z
      "
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
