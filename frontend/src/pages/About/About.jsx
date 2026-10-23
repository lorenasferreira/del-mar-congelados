import { ArrowUpRight, Waves, Fish, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>CONHEÇA A DEL MAR</span>

          <h1 className={styles.title}>
            Nossa <em>História</em>
          </h1>

          <p className={styles.intro}>
            Uma história ligada ao universo do mar, à escolha dos produtos e ao
            prazer de reunir pessoas ao redor da mesa.
          </p>
        </div>
      </section>

      <section className={styles.origin}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.imageWrapper}>
              <img
                src="/assets/images/nossa-historia.jpg"
                alt="Universo dos pescados e frutos do mar"
                loading="lazy"
              />
            </div>

            <div className={styles.textContent}>
              <span className={styles.eyebrow}>NOSSAS ORIGENS</span>

              <h2>
                Uma conexão que
                <em> vem do mar.</em>
              </h2>

              <p>
                A Del Mar Congelados tem suas raízes ligadas à Casa del Mar, uma
                história construída em torno dos pescados e frutos do mar.
              </p>

              <p>
                Essa conexão inspira uma nova forma de apresentar produtos do
                mar, aproximando variedade e praticidade do dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>O QUE NOS INSPIRA</span>

            <h2>
              O mar faz parte
              <em> da nossa essência.</em>
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <Waves size={30} strokeWidth={1.4} />

              <h3>Conexão com o mar</h3>

              <p>
                O universo dos pescados e frutos do mar está no centro da nossa
                proposta.
              </p>
            </article>

            <article className={styles.valueCard}>
              <Fish size={30} strokeWidth={1.4} />

              <h3>Variedade</h3>

              <p>
                Diferentes opções para explorar sabores e preparar novas
                receitas.
              </p>
            </article>

            <article className={styles.valueCard}>
              <Heart size={30} strokeWidth={1.4} />

              <h3>Momentos à mesa</h3>

              <p>
                Acreditamos no prazer de preparar uma boa refeição e
                compartilhá-la.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.container}>
          <div className={styles.closingContent}>
            <span className={styles.eyebrow}>DEL MAR CONGELADOS</span>

            <h2>
              Do mar para
              <em> a sua mesa.</em>
            </h2>

            <p>Conheça nossa seleção de peixes e frutos do mar congelados.</p>

            <Link to="/produtos" className={styles.cta}>
              Explorar produtos
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
