import benefits from "../../../data/benefits";

import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <section
      className={styles.benefits}
      aria-label="Diferenciais da Del Mar Congelados"
    >
      <div className={styles.container}>
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article key={benefit.id} className={styles.benefit}>
              <Icon size={30} strokeWidth={1.5} aria-hidden="true" />

              <div>
                <h2>{benefit.title}</h2>
                <p>{benefit.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
