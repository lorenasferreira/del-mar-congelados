import { ArrowLeft, ArrowUpRight, ChefHat, Clock3, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import recipes from "../../data/recipes";
import RecipeCard, { RecipeImage } from "../../components/recipes/RecipeCard/RecipeCard";
import styles from "./RecipeDetail.module.css";

function RecipeDetail() {
  const { slug } = useParams();
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    return (
      <main className={styles.notFound}>
        <p className={styles.eyebrow}>RECEITAS DEL MAR</p>
        <h1>Receita não encontrada</h1>
        <p>Não encontramos uma receita neste endereço.</p>
        <Link to="/receitas" className={styles.back}><ArrowLeft size={18} aria-hidden="true" />Voltar às receitas</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div className={styles.container}>
            <Link to="/receitas" className={styles.back}><ArrowLeft size={18} aria-hidden="true" />Todas as receitas</Link>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>RECEITAS DEL MAR</p>
                <h1>{recipe.name}</h1>
                <p className={styles.description}>{recipe.description}</p>
                <dl className={styles.facts}>
                  <div><dt><Clock3 size={18} aria-hidden="true" />Preparo</dt><dd>{recipe.prepTime} min</dd></div>
                  <div><dt><Users size={18} aria-hidden="true" />Porções</dt><dd>{recipe.servings} porções</dd></div>
                  <div><dt><ChefHat size={18} aria-hidden="true" />Dificuldade</dt><dd>{recipe.difficulty}</dd></div>
                </dl>
                <p className={styles.notice}>Receita demonstrativa, sujeita à revisão. Tempos aproximados, considerando os pescados já descongelados.</p>
              </div>
              <div className={styles.visual}><RecipeImage recipe={recipe} /></div>
            </div>
          </div>
        </header>
        <div className={`${styles.container} ${styles.preparation}`}>
          <section className={styles.ingredients} aria-labelledby="ingredients-title">
            <h2 id="ingredients-title">Ingredientes</h2>
            <ul>{recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
          </section>
          <section className={styles.method} aria-labelledby="method-title">
            <h2 id="method-title">Modo de preparo</h2>
            <ol>{recipe.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
        </div>
      </article>
      <section className={styles.productCta}>
        <div className={styles.container}>
          <h2>Do preparo <em>à sua mesa.</em></h2>
          <p>Conheça os peixes e frutos do mar do nosso catálogo.</p>
          <Link to="/produtos" className={styles.cta}>Conhecer produtos <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className={`${styles.container} ${styles.related}`} aria-labelledby="related-title">
        <h2 id="related-title">Mais ideias para cozinhar</h2>
        <div className={styles.relatedGrid}>
          {recipes.filter((item) => item.id !== recipe.id).map((item) => <RecipeCard key={item.id} recipe={item} headingLevel="h3" />)}
        </div>
      </section>
    </main>
  );
}

export default RecipeDetail;
