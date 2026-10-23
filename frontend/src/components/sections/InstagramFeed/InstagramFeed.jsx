import { useEffect, useState } from "react";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { getInstagramPosts } from "../../../services/instagramService";

import styles from "./InstagramFeed.module.css";

const INSTAGRAM_URL = "https://www.instagram.com/casadelmar.meriti/";

function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      try {
        const data = await getInstagramPosts();

        if (active) {
          setPosts(data);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      active = false;
    };
  }, []);

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
          <p className={styles.eyebrow}>Acompanhe nosso dia a dia</p>

          <h2 id="instagram-title">Siga-nos no Instagram</h2>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.username}
          >
            @casadelmar.meriti
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        {loading ? (
          <div className={styles.grid} aria-busy="true">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className={styles.skeleton} aria-hidden="true" />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.post}
                aria-label={`Ver publicação: ${post.alt || "Casa del Mar"}`}
              >
                <img
                  src={post.image}
                  alt={post.alt || "Publicação da Casa del Mar"}
                  loading="lazy"
                  className={styles.image}
                />

                {post.mediaType === "VIDEO" && (
                  <Clapperboard
                    size={22}
                    className={styles.videoIcon}
                    aria-hidden="true"
                  />
                )}

                <div className={styles.overlay}>
                  <FaInstagram size={27} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            Acompanhe nossas novidades diretamente no Instagram.
          </p>
        )}

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <FaInstagram size={18} aria-hidden="true" />
          Acompanhar no Instagram
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default InstagramFeed;
