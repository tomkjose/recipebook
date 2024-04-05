import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../redux/actions/savedAction";
import { useNavigate } from "react-router-dom";
import "../styles/saved.css";
import { removeFromSaved } from "../api";
function Saved() {
  const dispatch = useDispatch();

  const savedRecipes = useSelector((state) => state.saved.saved);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log("savedRecipes", savedRecipes);
  useEffect(() => {
    dispatch(fetchSavedRecipes(user.email));
  }, [dispatch, user]);

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="saved">
      <h2 className="saved__recipe__heading">Saved Recipes</h2>
      <div className="saved__recipe__list">
        {savedRecipes.map((recipe) => (
          <div key={recipe.id} className="saved__recipe__item">
            <img src={recipe.image} alt="recipe__img" className="saved__img" />
            <div className="saved__recipe__menu">
              <h3
                className="saved__recipe__title"
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                {recipe.title}
              </h3>
              <span
                class="material-symbols-outlined"
                onClick={() => removeFromSaved(recipe.id, user.email)}
              >
                bookmark_remove
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saved;
