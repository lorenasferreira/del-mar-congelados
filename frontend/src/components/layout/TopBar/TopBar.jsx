import { MapPin, Clock3, MessageCircle } from "lucide-react";

import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <span>
          <MapPin size={15} />
          Barra Olímpica
        </span>

        <span>
          <Clock3 size={15} />
          Seg a Sex: 5h às 19h | Sáb: 5h às 17h | Dom: 5h às 13h
        </span>

        <a href="#" className={styles.whatsapp}>
          <MessageCircle size={15} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default TopBar;
