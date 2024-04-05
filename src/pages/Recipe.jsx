import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api";

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
  console.log("recipe", recipe);
  return <div>Recipe</div>;
}

export default Recipe;
