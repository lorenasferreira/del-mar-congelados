import { ArrowUpRight, ChefHat, Clock3, CookingPot } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

export function RecipeImage({ recipe }) {
  if (recipe.image) {
    return <img className={styles.image} src={recipe.image} alt={recipe.name} loading="lazy" />;
  }

  return (
    <div className={styles.placeholder} role="img" aria-label={`Fotografia de ${recipe.name} ainda não disponível`}>
      <CookingPot size={56} strokeWidth={1.2} aria-hidden="true" />
      <span>Na cozinha Del Mar</span>
      <small>Foto em breve</small>
    </div>
  );
}

function RecipeCard({ recipe, headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <article className={styles.card}>
      <div className={styles.visual}><RecipeImage recipe={recipe} /></div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span><Clock3 size={16} aria-hidden="true" />{recipe.prepTime} min</span>
          <span><ChefHat size={16} aria-hidden="true" />{recipe.difficulty}</span>
        </div>
        <Heading>{recipe.name}</Heading>
        <p>{recipe.description}</p>
        <Link to={`/receitas/${recipe.slug}`} className={styles.link} aria-label={`Ver receita de ${recipe.name}`}>
          Ver receita <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default RecipeCard;
