import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes, removeSaved } from "../redux/actions/savedAction";
import { useNavigate } from "react-router-dom";
import "../styles/saved.css";
import Loading from "../components/Loading/Loading";

function Saved() {
  const dispatch = useDispatch();
  const savedRecipes = useSelector((state) => state.saved.saved);
  const loading = useSelector((state) => state.saved.loading);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchSavedRecipes(user.localId));
    } else {
      navigate("/signin");
    }
  }, [dispatch, navigate, user]);

  const handleRemoveFromSaved = (recipeId, userId) => {
    dispatch(removeSaved(recipeId, userId));
  };

  if (loading) {
    return (
      <div className="saved__loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className="saved">
      <h2 className="saved__recipe__heading">Saved Recipes</h2>

      {savedRecipes && savedRecipes.length > 0 ? (
        <div className="saved__recipe__list">
          {savedRecipes.map((recipe, index) => (
            <div key={index} className="saved__recipe__item">
              <img
                src={recipe.image}
                alt="recipe__img"
                className="saved__img"
              />
              <div className="saved__recipe__menu">
                <h3
                  className="saved__recipe__title"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  {recipe.title}
                </h3>
                <span
                  className="material-symbols-outlined"
                  onClick={() =>
                    handleRemoveFromSaved(recipe.uniqueId, user.localId)
                  }
                  style={{ cursor: "pointer" }}
                >
                  bookmark_remove
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no__saved">No Recipes Saved</div>
      )}
    </div>
  );
}

export default Saved;
