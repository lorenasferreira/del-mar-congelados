import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import styles from "./BrandStory.module.css";

const mediaFiles = import.meta.glob("../../../assets/home-brand/casa-del-mar-*", {
  eager: true,
  query: "?url",
  import: "default",
});
const clip = mediaFiles["../../../assets/home-brand/casa-del-mar-background.mp4"];
const photo = "/assets/images/home/hero-seafood.webp";
const poster = mediaFiles["../../../assets/home-brand/casa-del-mar-background-poster.webp"] ?? photo;

function BrandStory() {
  const media = useRef(null);
  const player = useRef(null);
  const [nearby, setNearby] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [preference, setPreference] = useState(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const enabled = preference ?? !reducedMotion;
  const showPlayer = nearby && (enabled || started) && !failed;

  useEffect(() => {
    if (!clip) return;
    const target = media.current;
    const loading = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearby(true);
        loading.disconnect();
      }
    }, { rootMargin: "120px" });
    const playback = new IntersectionObserver(([entry]) => {
      setVisible(entry.intersectionRatio >= 0.2);
    }, { threshold: 0.2 });
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = (event) => setReducedMotion(event.matches);
    loading.observe(target);
    playback.observe(target);
    motion.addEventListener("change", updateMotion);
    return () => {
      loading.disconnect();
      playback.disconnect();
      motion.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    const video = player.current;
    if (!video) return;
    if (!visible || !enabled) {
      video.pause();
      return;
    }

    // A browser can block autoplay. Manual playback remains available.
    video.play().catch(() => {});
  }, [visible, enabled, showPlayer]);

  function togglePlayback() {
    if (playing) {
      player.current.pause();
      setPreference(false);
      return;
    }

    setPreference(true);
    player.current?.play().catch(() => {});
  }

  return (
    <section className={styles.section} aria-labelledby="brand-story-title">
      <div className={styles.container}>
        <div ref={media} className={styles.media}>
          <img src={clip ? poster : photo} alt="" loading="lazy" width="1536" height="1024"
            className={styles.image} />
          {clip && showPlayer && (
            <video ref={player} src={clip} poster={poster} preload="none"
              className={styles.image} muted loop playsInline aria-hidden="true"
              onPlaying={() => { setStarted(true); setPlaying(true); }}
              onPause={() => setPlaying(false)}
              onError={() => { setFailed(true); setPlaying(false); }} />
          )}
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>Do mar para a sua mesa</p>
            <h2 id="brand-story-title">Veja de perto <span>a nossa qualidade</span></h2>
            <p className={styles.description}>Cuidado na escolha dos produtos e fornecedores.</p>
          </div>
          {clip && !failed && (
            <button type="button" className={styles.playback}
              aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"} onClick={togglePlayback}>
              {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
