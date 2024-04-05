import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipesRequest,
  fetchRecipesSuccess,
} from "../redux/actions/recipesAction";
import { fetchAllRecipes, removeFromSaved } from "../api";
import { useNavigate } from "react-router-dom";
import { addToSaved } from "../api/index.jsx";
import "../styles/home.css";
function Home() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const user = useSelector((state) => state.user.user);
  const saved = useSelector((state) => state.saved.saved);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToSave = (recipe, userEmail) => {
    addToSaved(recipe, userEmail);
  };

  const handleRemoveFromSaved = (id, userEmail) => {
    removeFromSaved(id, userEmail);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch(fetchRecipesRequest());
      try {
        const allRecipes = await fetchAllRecipes();
        console.log("allRecipes", allRecipes);
        dispatch(fetchRecipesSuccess(allRecipes));
      } catch (error) {
        dispatch(fetchRecipesSuccess(error.message));
      }
    };
    fetchRecipes();
  }, [dispatch]);

  return (
    <div className="home">
      {recipes ? (
        <div className="home__list">
          {recipes.map((recipe) => {
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
                <div className="recipe__menu">
                  <div className="recipe__read__details">
                    <span class="material-symbols-outlined">schedule</span>1
                    Minute
                  </div>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleAddToSave(recipe, user.email)}
                    style={{ cursor: "pointer" }}
                  >
                    bookmark_add
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
