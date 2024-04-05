import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../redux/actions/savedAction";

function Saved() {
  const dispatch = useDispatch();

  const savedRecipes = useSelector((state) => state.saved.saved);
  const loading = useSelector((state) => state.saved.loading);
  const error = useSelector((state) => state.saved.error);
  const user = useSelector((state) => state.user.user);
  console.log("savedRecipes", savedRecipes);
  useEffect(() => {
    dispatch(fetchSavedRecipes(user.email));
  }, [dispatch, user]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h2>Saved Recipes</h2>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Saved;
