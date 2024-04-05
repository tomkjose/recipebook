import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipesRequest,
  fetchRecipesSuccess,
} from "../redux/actions/recipesAction";
import { fetchAllRecipes } from "../api";
import { useNavigate } from "react-router-dom";
import { addToSaved } from "../api/index.jsx";
function Home() {
  const recipes = useSelector((state) => state.recipes.recipes);
  const user = useSelector((state) => state.user.user);
  console.log("user.email", user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToSave = (recipe, userEmail) => {
    addToSaved(recipe, userEmail);
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
    <div>
      <div>
        {recipes ? (
          <div>
            {" "}
            {recipes.map((recipe) => {
              return (
                <div key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <button onClick={() => navigate(`/recipe/${recipe.id}`)}>
                    View
                  </button>
                  <button onClick={() => handleAddToSave(recipe, user.email)}>
                    saved
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
