import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { instagramPosts } from "../../../data/instagramPosts";
import { INSTAGRAM_URL } from "../../../config/contact";

import styles from "./InstagramFeed.module.css";

function InstagramFeed() {
  return (
    <section
      id="instagram"
      className={styles.instagram}
      aria-labelledby="instagram-title"
    >
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0 35 C180 35 180 85 360 60 S600 20 760 48 S1040 85 1200 42 S1350 28 1440 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 id="instagram-title">Instagram da matriz</h2>

          <p className={styles.empty}>
            Acompanhe as novidades e inspirações da Casa Del Mar Meriti, nossa matriz.
          </p>
        </div>

        {instagramPosts.length > 0 && (
          <div className={styles.grid}>
            {instagramPosts.map(({ image, alt, permalink, width, height }) => {
              const photo = (
                <img src={image} alt={alt} width={width} height={height}
                  loading="lazy" decoding="async" className={styles.image} />
              );
              return permalink ? (
                <a key={image} href={permalink} target="_blank" rel="noopener noreferrer"
                  className={styles.post} aria-label={`Ver publicação: ${alt}`}>
                  {photo}
                  <div className={styles.overlay} aria-hidden="true"><FaInstagram size={27} /></div>
                </a>
              ) : (
                <div key={image} className={styles.post}>{photo}</div>
              );
            })}
          </div>
        )}

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <FaInstagram size={18} aria-hidden="true" />
          Visitar @casadelmar.meriti
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default InstagramFeed;
