import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { INSTAGRAM_URL, WHATSAPP_URL } from "../../../config/contact";

import footerLogo from "../../../assets/footer/del-mar-congelados-footer.webp";
import styles from "./Footer.module.css";

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Receitas Del Mar", href: "/receitas" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "/contato" },
  { label: "Instagram da matriz", href: INSTAGRAM_URL, external: true },
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
              <img src={footerLogo} alt="" width="480" height="432" loading="lazy" decoding="async" />
            </Link>
            <p className={styles.description}>
              Qualidade, praticidade e o melhor do mar para a sua mesa.
            </p>
          </div>

          <nav className={styles.column} aria-label="Navegação do rodapé">
            <h2>Navegação</h2>

            <ul className={styles.links}>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
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
            <h2>Conecte-se</h2>

            <p className={styles.instagramLabel}>Instagram da matriz</p>
            <div className={styles.socialLinks}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
                <FaInstagram size={18} aria-hidden="true" />
                @casadelmar.meriti
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              {WHATSAPP_URL && (
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="WhatsApp da Del Mar Congelados" className={styles.socialLink}>
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
              )}
            </div>
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
