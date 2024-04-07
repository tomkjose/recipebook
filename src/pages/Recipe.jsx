import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api";
import "../styles/recipe.css";
import Loading from "../components/Loading/Loading";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      const currentRecipe = await fetchRecipeDetails(id);
      setRecipe(currentRecipe);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe || Object.keys(recipe).length === 0) {
    return (
      <div className="recipe__loading">
        <Loading />
      </div>
    );
  }
  return (
    <div className="recipe">
      <div className="recipe__image__container">
        <img src={recipe.image} alt="recipe__img" className="recipe__image" />
      </div>
      <div className="recipe__details__container">
        <div className="recipe__title__container">
          <h1 className="recipe__title__heading">{recipe.title}</h1>
        </div>
        <div className="recipe__count__details">
          <div className="recipe__count">
            <div className="recipe__value">
              {recipe.extendedIngredients.length}
            </div>
            <div className="recipe__caption">Ingredients</div>
          </div>
          <div className="recipe__count">
            <div className="recipe__value">{recipe.cookingMinutes}</div>
            <div className="recipe__caption">Minutes</div>
          </div>
          <div className="recipe__count">
            <div className="recipe__value">{recipe.healthScore}</div>
            <div className="recipe__caption">Health Score</div>
          </div>
        </div>
        <div>
          <div className="recipe__subtitle">
            <div className="recipe__subtitle__main">Ingredients</div>
            <div className="">For {recipe.servings} servings</div>
          </div>
          <hr className="recipe__hr" />
          <ul className="recipe__ingredients__list">
            {recipe.extendedIngredients.map((ingredient, index) => {
              return (
                <li className="recipe__ingredients__item" key={index}>
                  {ingredient.original}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recipe__subtitle">
          <div className="recipe__subtitle__main instructions">
            Instructions
          </div>
        </div>
        <div className="recipe__instructions">{recipe.instructions}</div>
      </div>
    </div>
  );
}

export default Recipe;
