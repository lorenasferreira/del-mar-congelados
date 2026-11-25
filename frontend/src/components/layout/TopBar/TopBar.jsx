import { useState } from "react";
import { MapPin, Clock3, Pause, Play } from "lucide-react";
import styles from "./TopBar.module.css";

function TopBar() {
  const [paused, setPaused] = useState(false);

  return (
    <div className={styles.topBar}>
      <div className={styles.viewport} tabIndex={0} aria-label="Localização e horários de atendimento">
        <div className={`${styles.track} ${paused ? styles.paused : ""}`}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
              <span className={styles.item}><MapPin size={15} aria-hidden="true" />Barra Olímpica</span>
              <span className={styles.separator} aria-hidden="true">•</span>
              <span className={styles.item}>
                <Clock3 size={15} aria-hidden="true" />
                <span className={styles.hours}>
                  <span>Seg a Sex: 5h às 19h</span>
                  <span><span aria-hidden="true"> | </span>Sáb: 5h às 17h</span>
                  <span><span aria-hidden="true"> | </span>Dom: 5h às 13h</span>
                </span>
              </span>
              <span className={styles.separator} aria-hidden="true">•</span>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className={styles.pauseButton} aria-label={paused ? "Retomar faixa de informações" : "Pausar faixa de informações"} aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>
    </div>
  );
}

export default TopBar;
