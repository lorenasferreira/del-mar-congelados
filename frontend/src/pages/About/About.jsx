import { ArrowUpRight, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./About.module.css";

const media = import.meta.glob("../../assets/brand-story/casa-del-mar-*", {
  eager: true,
  query: "?url",
  import: "default",
});

const facade = media["../../assets/brand-story/casa-del-mar-fachada.webp"];
const video = media["../../assets/brand-story/casa-del-mar-video.mp4"];
const poster = media["../../assets/brand-story/casa-del-mar-poster.webp"];
const captions = media["../../assets/brand-story/casa-del-mar-video.pt-BR.vtt"];

function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>QUEM SOMOS</p>
          <h1 className={styles.title}>O melhor do mar, <em>com mais praticidade</em></h1>
          <p className={styles.intro}>
            A Del Mar Congelados nasceu da vontade de aproximar a qualidade dos pescados
            da rotina de quem busca praticidade, sem abrir mão do sabor.
          </p>
        </div>
      </section>

      <section className={styles.origin}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.roots}>
              <Waves size={36} strokeWidth={1.5} aria-hidden="true" />
              <h2>Nossas <em>raízes</em></h2>
              <p>
                A Del Mar Congelados está ligada à Casa Del Mar Meriti, nossa matriz,
                que tem uma loja física em São João de Meriti, no Rio de Janeiro.
              </p>
              <p>
                Com a experiência da Casa Del Mar no comércio de pescados e a demanda
                da região por produtos mais práticos, surgiu uma proposta própria para
                facilitar o preparo das refeições do dia a dia.
              </p>
              {facade && (
                <figure className={styles.facade}>
                  <img src={facade} alt="Fachada da Casa Del Mar Meriti com o nome da loja visível"
                    width="1200" height="900" loading="lazy" decoding="async" />
                  <figcaption>Casa Del Mar Meriti, nossa matriz em São João de Meriti (RJ).</figcaption>
                </figure>
              )}
            </div>
            <div className={styles.principles}>
              <section className={styles.textContent}>
                <h2>Qualidade que começa <em>na seleção</em></h2>
                <p>
                  Uma boa refeição começa pela escolha dos ingredientes. Por isso,
                  valorizamos a qualidade dos produtos e a seleção dos fornecedores,
                  de filés de peixe a camarões descascados e bacalhau.
                </p>
              </section>
              <section className={styles.textContent}>
                <h2>Praticidade para <em>o seu dia a dia</em></h2>
                <p>
                  Queremos tornar o preparo de pescados mais simples com produtos
                  selecionados para uma refeição durante a semana ou uma ocasião especial.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {video && (
        <section className={styles.mediaSection} aria-labelledby="matrix-video-title">
          <div className={styles.container}>
            <h2 id="matrix-video-title">Conheça a Casa Del Mar Meriti</h2>
            <video controls playsInline preload="none" poster={poster}
              aria-labelledby="matrix-video-title">
              <source src={video} type="video/mp4" />
              {captions && <track kind="captions" src={captions} srcLang="pt-BR" label="Português (Brasil)" />}
            </video>
          </div>
        </section>
      )}

      <section className={styles.closing}>
        <div className={styles.container}>
          <div className={styles.closingContent}>
            <h2>Do mar <em>para a sua mesa</em></h2>
            <Link to="/produtos" className={styles.cta}>
              Conhecer produtos <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
