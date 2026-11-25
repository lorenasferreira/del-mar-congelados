import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import PageMetadata from "./PageMetadata";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import BackToTop from "../../ui/BackToTop/BackToTop";

function MainLayout() {
  const { pathname, hash, key } = useLocation();
  const previousLocation = useRef(null);
  const previousPathname = useRef(null);

  useLayoutEffect(() => {
    const pageChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    // Layout effects run after the Outlet and its section anchors are in the DOM.
    const content = document.querySelector("main");
    if (content) {
      content.id = "conteudo";
      content.tabIndex = -1;
      if (pageChanged && previousLocation.current) content.focus({ preventScroll: true });
    }
    const firstRender = previousLocation.current === null;
    previousLocation.current = key;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView({
        behavior: pageChanged || window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant" : "smooth",
        block: "start",
      });
    } else if (pageChanged || firstRender) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return (
    <div id="inicio">
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <PageMetadata pathname={pathname} />
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainLayout;
