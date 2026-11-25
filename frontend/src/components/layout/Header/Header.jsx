import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";

import { WHATSAPP_URL } from "../../../config/contact";

import styles from "./Header.module.css";

function Header() {
  const { pathname, key } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLocation, setMenuLocation] = useState(key);
  if (menuLocation !== key) {
    setMenuLocation(key);
    setMenuOpen(false);
  }
  const headerRef = useRef(null);
  const [idle, setIdle] = useState(false);
  const menuButtonRef = useRef(null);
  const navLinksRef = useRef(null);
  const navigationRef = useRef(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const page = document.documentElement;
    const updateHeight = () => {
      page.style.setProperty("--sticky-header-height", `${header.offsetHeight}px`);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      page.style.removeProperty("--sticky-header-height");
    };
  }, []);

  useEffect(() => {
    const topBar = headerRef.current.previousElementSibling;
    let timer;
    const restartIdleTimer = () => {
      window.clearTimeout(timer);
      setIdle(false);
      const position = window.scrollY;
      if (position <= topBar.offsetHeight) return;

      timer = window.setTimeout(() => {
        if (window.scrollY === position && position > topBar.offsetHeight) {
          setIdle(true);
        }
      }, 1000);
    };

    // The layout may reset scroll on navigation without emitting a new scroll event.
    const initialFrame = window.requestAnimationFrame(restartIdleTimer);
    window.addEventListener("scroll", restartIdleTimer, { passive: true });
    window.addEventListener("resize", restartIdleTimer, { passive: true });
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.clearTimeout(timer);
      window.removeEventListener("scroll", restartIdleTimer);
      window.removeEventListener("resize", restartIdleTimer);
    };
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
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
    const handleOutside = (event) => {
      if (navigationRef.current.contains(event.target)) return;
      if (navLinksRef.current.contains(document.activeElement)) {
        menuButtonRef.current.focus({ preventScroll: true });
      }
      setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current.focus({ preventScroll: true });
    }
  };

  const whatsappButton = (
    <Link
      to={WHATSAPP_URL || "/contato"}
      onClick={closeMenu}
      className={styles.whatsappButton}
      aria-label={WHATSAPP_URL ? "Pedir pelo WhatsApp" : "Pedir pelo WhatsApp — informações de atendimento"}
    >
      <MessageCircle size={19} strokeWidth={1.7} aria-hidden="true" />
      <span>Pedir pelo WhatsApp</span>
    </Link>
  );

  return (
    <header ref={headerRef} className={styles.header} data-idle={idle && !menuOpen}>
      <div className={styles.mainHeader}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img
            src="/assets/logos/del-mar-congelados-logo.webp"
            alt="Del Mar Congelados"
            width="480"
            height="480"
          />
        </Link>

        <div className={styles.mobileCta}>{whatsappButton}</div>
        <nav ref={navigationRef} className={styles.navigation} aria-label="Navegação principal">
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
            {menuOpen
              ? <X size={22} strokeWidth={1.9} aria-hidden="true" />
              : <Menu size={22} strokeWidth={1.9} aria-hidden="true" />}
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
        </nav>

        <div className={styles.desktopCta}>{whatsappButton}</div>
      </div>
    </header>
  );
}

export default Header;
