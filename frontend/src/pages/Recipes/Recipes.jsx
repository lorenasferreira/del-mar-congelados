import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import recipes from "../../data/recipes";
import RecipeCard from "../../components/recipes/RecipeCard/RecipeCard";
import styles from "./Recipes.module.css";

function Recipes() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>INSPIRAÇÃO À MESA</span>
          <h1 className={styles.title}>Receitas <em>Del Mar</em></h1>
          <p className={styles.intro}>Ideias para transformar peixes e frutos do mar em bons momentos à mesa. Escolha uma receita e descubra seu próximo preparo.</p>
          <p className={styles.notice}>Receitas demonstrativas, sujeitas à revisão. Fotografias dos pratos em breve.</p>
        </div>
      </section>
      <section className={styles.section} aria-label="Receitas para preparar em casa">
        <div className={styles.container}>
          <div className={styles.grid}>
            {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </div>
      </section>
      <section className={styles.closing}>
        <div className={styles.container}>
          <h2>Seu próximo preparo <em>começa aqui.</em></h2>
          <p>Explore o catálogo de peixes e frutos do mar da Del Mar.</p>
          <Link to="/produtos" className={styles.cta}>Conhecer produtos <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}

export default Recipes;
