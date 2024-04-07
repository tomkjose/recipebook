import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipesRequest,
  fetchRecipesSuccess,
} from "../redux/actions/recipesAction";
import { fetchAllRecipes } from "../api";
import { useNavigate } from "react-router-dom";
import { addSaved, removeSaved } from "../redux/actions/savedAction";
import "../styles/home.css";
import Loading from "../components/Loading/Loading";

function Home() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const user = useSelector((state) => state.user.user);
  const saved = useSelector((state) => state.saved.saved);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToSave = (recipe, userId) => {
    dispatch(addSaved(recipe, userId));
  };

  const handleRemoveFromSaved = (recipeId, userId) => {
    // console.log("recipeId", recipeId);
    dispatch(removeSaved(recipeId, userId));
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch(fetchRecipesRequest());
      try {
        const allRecipes = await fetchAllRecipes();
        dispatch(fetchRecipesSuccess(allRecipes));
      } catch (error) {
        dispatch(fetchRecipesSuccess(error.message));
      }
    };
    fetchRecipes();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="home__loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className="home">
      {recipes && (
        <div className="home__list">
          {recipes.map((recipe) => {
            const isSaved = saved.some(
              (savedRecipe) => savedRecipe.id === recipe.id
            );
            const savedRecipe = saved.find(
              (savedRecipe) => savedRecipe.id === recipe.id
            );
            return (
              <div key={recipe.id} className="recipe__card">
                <img
                  src={recipe.image}
                  alt="recipe_img"
                  className="recipe__img"
                />
                <h3
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                  className="recipe__title"
                >
                  {recipe.title}
                </h3>
                {user && (
                  <div className="recipe__menu">
                    <div className="recipe__read__details">
                      <span className="material-symbols-outlined">
                        schedule
                      </span>
                      1 Minute
                    </div>
                    {user && isSaved ? (
                      <span
                        className="material-symbols-outlined"
                        onClick={() =>
                          handleRemoveFromSaved(
                            savedRecipe.uniqueId,
                            user.localId
                          )
                        }
                        style={{ cursor: "pointer" }}
                      >
                        bookmark_remove
                      </span>
                    ) : (
                      <span
                        className="material-symbols-outlined"
                        onClick={() => handleAddToSave(recipe, user.localId)}
                        style={{ cursor: "pointer" }}
                      >
                        bookmark_add
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
