import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../../ui/ProductCard/ProductCard";
import products from "../../../data/products";

import styles from "./FeaturedProducts.module.css";

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    const updateEdges = () => {
      setEdges({
        start: track.scrollLeft <= 1,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
      });
    };
    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      observer.disconnect();
    };
  }, []);

  const move = (direction) => {
    const track = trackRef.current;
    const step = track.firstElementChild.getBoundingClientRect().width
      + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant" : "smooth",
    });
  };

  return (
    <section id="destaques" className={styles.offers}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>Escolhas para você</p>

            <h2 id="featured-title">
              Destaques <span>Del Mar</span>
            </h2>
          </div>

          <a href="/produtos" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.controls} aria-label="Navegação dos destaques">
          <button type="button" aria-label="Produto anterior" aria-controls="featured-products" disabled={edges.start} onClick={() => move(-1)}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Próximo produto" aria-controls="featured-products" disabled={edges.end} onClick={() => move(1)}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div id="featured-products" ref={trackRef} className={styles.grid} role="region" aria-labelledby="featured-title" tabIndex={0}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
