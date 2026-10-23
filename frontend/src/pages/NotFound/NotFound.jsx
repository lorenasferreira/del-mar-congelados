import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <main className={styles.page}>
      <p>404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe.</p>
      <Link to="/">Voltar ao início</Link>
    </main>
  );
}

export default NotFound;
