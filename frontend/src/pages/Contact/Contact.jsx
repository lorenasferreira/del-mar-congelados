import { ArrowUpRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

import styles from "./Contact.module.css";

const instagramUrl = "https://www.instagram.com/casadelmar.meriti/";

function Contact() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>FALE COM A GENTE</span>

          <h1 className={styles.title}>
            Contato <em>& Pedidos</em>
          </h1>

          <p className={styles.intro}>
            Quer saber mais sobre nossos produtos ou consultar a disponibilidade
            de algum pescado? Estamos preparando nossos canais de atendimento
            para facilitar seu contato com a Del Mar.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>COMO PODEMOS AJUDAR?</span>

            <h2>
              Estamos aqui para
              <em> conversar.</em>
            </h2>

            <p>
              Escolha uma das opções abaixo para conhecer nossos produtos ou
              acompanhar as novidades.
            </p>
          </div>

          <div className={styles.cards}>
            <article className={styles.card}>
              <span className={styles.iconBox}>
                <MessageCircle size={28} strokeWidth={1.5} />
              </span>

              <h3>Atendimento por WhatsApp</h3>

              <p>
                Em breve, você poderá consultar produtos, disponibilidade e
                informações sobre pedidos diretamente pelo WhatsApp.
              </p>

              <span className={styles.pending}>Canal em configuração</span>
            </article>

            <article className={styles.card}>
              <span className={styles.iconBox}>
                <FaInstagram size={28} aria-hidden="true" />
              </span>

              <h3>Acompanhe nossas novidades</h3>

              <p>
                Confira as publicações e novidades da Casa del Mar no Instagram.
              </p>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Visitar Instagram
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>

            <article className={styles.card}>
              <span className={styles.iconBox}>
                <MapPin size={28} strokeWidth={1.5} />
              </span>

              <h3>Região de atendimento</h3>

              <p>
                Estamos confirmando as informações de localização, entrega e
                retirada para disponibilizá-las aqui.
              </p>

              <span className={styles.pending}>Informações em atualização</span>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoText}>
              <span className={styles.eyebrow}>INFORMAÇÕES IMPORTANTES</span>

              <h2>
                Seu pedido começa
                <em> com uma conversa.</em>
              </h2>

              <p>
                Nossa seleção de pescados pode variar conforme a
                disponibilidade. Para consultar opções e valores atualizados,
                recomendamos confirmar diretamente com o atendimento quando o
                canal estiver disponível.
              </p>

              <Link to="/produtos" className={styles.cta}>
                Conhecer produtos
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.infoPanel}>
              <div className={styles.infoItem}>
                <Clock3 size={24} strokeWidth={1.5} />

                <div>
                  <h3>Horário de atendimento</h3>
                  <p>A confirmar</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MapPin size={24} strokeWidth={1.5} />

                <div>
                  <h3>Entregas e retiradas</h3>
                  <p>Regiões e condições a confirmar</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MessageCircle size={24} strokeWidth={1.5} />

                <div>
                  <h3>Pedidos</h3>
                  <p>Canal comercial em configuração</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
