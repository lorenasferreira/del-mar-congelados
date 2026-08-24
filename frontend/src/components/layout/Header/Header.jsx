import { Search, UserRound, ShoppingCart, Menu } from "lucide-react";

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

        <div className={styles.search}>
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />

          <button type="button" aria-label="Buscar">
            <Search size={21} strokeWidth={1.7} />
          </button>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.action}>
            <UserRound size={24} strokeWidth={1.5} />
            <span>Minha conta</span>
          </button>

          <button type="button" className={styles.action}>
            <span className={styles.cartIcon}>
              <ShoppingCart size={25} strokeWidth={1.5} />
              <span className={styles.cartCount}>0</span>
            </span>

            <span>Meu carrinho</span>
          </button>
        </div>
      </div>

      <nav className={styles.navigation} aria-label="Navegação principal">
        <div className={styles.navContainer}>
          <button type="button" className={styles.menuButton}>
            <Menu size={20} strokeWidth={1.6} />
            Menu
          </button>

          <div className={styles.navLinks}>
            <a href="#produtos">Produtos</a>
            <a href="#ofertas">Ofertas</a>
            <a href="#receitas">Receitas</a>
            <a href="#historia">Nossa história</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
