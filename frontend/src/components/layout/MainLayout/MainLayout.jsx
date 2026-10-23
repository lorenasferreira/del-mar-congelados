import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackToTop from "../../ui/BackToTop/BackToTop";

function MainLayout() {
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef(null);

  useLayoutEffect(() => {
    const pageChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    // Layout effects run after the Outlet and its section anchors are in the DOM.
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView({
        behavior: pageChanged || window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant" : "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return (
    <div id="inicio">
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainLayout;
