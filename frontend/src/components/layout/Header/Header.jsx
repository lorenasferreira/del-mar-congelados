import { Menu, MessageCircle } from "lucide-react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <a href="/" className={styles.logo}>
          <img
            src="/assets/logos/del-mar-congelados-logo.png"
            alt="Del Mar Congelados"
          />
        </a>

        <a href="#contato" className={styles.whatsappButton} aria-label="Pedir pelo WhatsApp — informações de atendimento">
          <MessageCircle size={19} strokeWidth={1.7} aria-hidden="true" />
          <span>Pedir pelo WhatsApp</span>
        </a>
      </div>

      <nav className={styles.navigation} aria-label="Navegação principal">
        <div className={styles.navContainer}>
          <button type="button" className={styles.menuButton}>
            <Menu size={20} strokeWidth={1.6} />
            Menu
          </button>

          <div className={styles.navLinks}>
            <a href="#categorias">Produtos</a>
            <a href="#destaques">Destaques</a>
            <span className={styles.pendingLink}>Receitas Del Mar</span>
            <a href="#historia">Nossa história</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
