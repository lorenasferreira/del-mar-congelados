import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { INSTAGRAM_URL, WHATSAPP_URL } from "../../config/contact";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contato <em>& Pedidos</em></h1>
          <p className={styles.intro}>
            {WHATSAPP_URL
              ? "Consulte a disponibilidade dos produtos, os preços e as condições de atendimento pelo nosso WhatsApp."
              : "Estamos preparando o canal comercial da Del Mar Congelados. Enquanto isso, conheça nossa seleção de produtos."}
          </p>
        </div>
      </section>

      <section className={styles.contactSection} aria-labelledby="channels-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 id="channels-title">Canais de <em>contato</em></h2>
          </div>

          <div className={styles.cards}>
            <article className={styles.card}>
              <span className={styles.iconBox}><MessageCircle size={28} strokeWidth={1.5} aria-hidden="true" /></span>
              <h3>WhatsApp comercial</h3>
              {WHATSAPP_URL ? (
                <a className={styles.cardLink} href={WHATSAPP_URL}>
                  Consultar pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ) : (
                <p>Canal em configuração.</p>
              )}
            </article>

            <article className={styles.card}>
              <span className={styles.iconBox}><FaInstagram size={28} aria-hidden="true" /></span>
              <h3>Instagram da matriz</h3>
              <p>Confira as publicações da Casa Del Mar Meriti.</p>
              <a className={styles.cardLink} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Visitar @casadelmar.meriti <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>
          </div>

          <Link to="/produtos" className={styles.cta}>
            Conhecer produtos <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Contact;
