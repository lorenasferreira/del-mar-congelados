import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, MessageCircle, Waves } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import styles from "./Footer.module.css";

const INSTAGRAM_URL = "https://www.instagram.com/casadelmar.meriti/";

const WHATSAPP_NUMBER = "";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Del Mar Congelados e gostaria de fazer um pedido.",
);

const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
  : null;

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Receitas Del Mar", href: "/receitas" },
  { label: "Nossa História", href: "/nossa-historia" },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    external: true,
    disabled: !WHATSAPP_URL,
  },
  { label: "Instagram", href: INSTAGRAM_URL, external: true },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link
              to="/"
              className={styles.brandLink}
              aria-label="Del Mar Congelados — voltar ao início"
            >
              <Waves size={30} strokeWidth={1.5} aria-hidden="true" />

              <span className={styles.brandName}>
                DEL MAR
                <span>CONGELADOS</span>
              </span>
            </Link>

            <p className={styles.description}>
              Qualidade, praticidade e o melhor do mar para a sua mesa.
            </p>

            <div className={styles.socialLinks}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Casa del Mar Meriti"
                className={styles.socialLink}
              >
                <FaInstagram size={19} aria-hidden="true" />
              </a>

              {WHATSAPP_URL && (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Del Mar Congelados"
                  className={styles.socialLink}
                >
                  <MessageCircle size={19} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <nav className={styles.column} aria-label="Navegação do rodapé">
            <h3>Navegação</h3>

            <ul className={styles.links}>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  {link.disabled ? (
                    <span aria-disabled="true">
                      {link.label}
                    </span>
                  ) : link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div id="contato" className={styles.column}>
            <h3>Atendimento</h3>

            <div className={styles.contactItem}>
              <MapPin size={18} aria-hidden="true" />
              <span>
                Barra Olímpica
                <small>Rio de Janeiro — RJ</small>
              </span>
            </div>

            {WHATSAPP_URL ? (
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Faça seu pedido pelo WhatsApp</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <div className={styles.contactItem}>
                <MessageCircle size={18} aria-hidden="true" />
                <span>Pedidos e atendimento pelo WhatsApp</span>
              </div>
            )}
          </div>

          <div className={styles.column}>
            <h3>Conecte-se</h3>

            <p className={styles.connectText}>
              Acompanhe nossas novidades, produtos e inspirações do mar.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              @casadelmar.meriti
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Del Mar Congelados. Todos os direitos reservados.
          </p>

          <p className={styles.credit}>
            Desenvolvido por{" "}
            <a
              href="https://lorenaferreira.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorena Ferreira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
