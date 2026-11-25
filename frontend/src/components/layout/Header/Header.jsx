import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "../../../config/contact";

import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 769px)");
    const handleLayoutChange = () => {
      if (desktop.matches) {
        setMenuOpen(false);
        if (document.activeElement === menuButtonRef.current) {
          navLinksRef.current.querySelector("a")?.focus({ preventScroll: true });
        }
      } else if (navLinksRef.current.contains(document.activeElement)) {
        menuButtonRef.current.focus({ preventScroll: true });
      }
    };
    desktop.addEventListener("change", handleLayoutChange);
    return () => desktop.removeEventListener("change", handleLayoutChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current.focus({ preventScroll: true });
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img
            src="/assets/logos/del-mar-congelados-logo.webp"
            alt="Del Mar Congelados"
            width="480"
            height="480"
          />
        </Link>

        <Link
          to={WHATSAPP_URL || "/contato"}
          onClick={closeMenu}
          className={styles.whatsappButton}
          aria-label={WHATSAPP_URL ? "Consultar pelo WhatsApp" : "Atendimento"}
        >
          <MessageCircle size={19} strokeWidth={1.7} aria-hidden="true" />
          <span>{WHATSAPP_URL ? "Consultar pelo WhatsApp" : "Atendimento"}</span>
        </Link>
      </div>

      <nav className={styles.navigation} aria-label="Navegação principal">
        <div className={styles.navContainer}>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={
              menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
            }
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={20} strokeWidth={1.6} aria-hidden="true" />
            Menu
          </button>

          <div
            ref={navLinksRef}
            id="primary-navigation"
            className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
          >
            <NavLink to="/" end onClick={closeMenu}>
              Início
            </NavLink>
            <NavLink to="/produtos" onClick={closeMenu}>
              Produtos
            </NavLink>
            <NavLink to="/receitas" onClick={closeMenu}>
              Receitas Del Mar
            </NavLink>
            <NavLink to="/quem-somos" onClick={closeMenu}>
              Quem Somos
            </NavLink>
            <NavLink to="/contato" onClick={closeMenu}>
              Contato
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
