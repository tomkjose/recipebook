import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api";
import "../styles/recipe.css";
import { useSelector } from "react-redux";
function Recipe() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const [recipe, setRecipe] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 9,
    gaps: "no",
    preparationMinutes: 15,
    cookingMinutes: 25,
    aggregateLikes: 11,
    healthScore: 64,
    creditsText: "Jen West",
    sourceName: "Pink When",
    pricePerServing: 481.76,
    extendedIngredients: [
      {
        id: 10211821,
        aisle: "Produce",
        image: "bell-pepper-orange.png",
        consistency: "SOLID",
        name: "bell pepper",
        nameClean: "bell pepper",
        original: "1/2 cup diced bell pepper",
        originalName: "diced bell pepper",
        amount: 0.5,
        unit: "cup",
        meta: ["diced"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 74.5,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 10211821,
        aisle: "Produce",
        image: "yellow-bell-pepper.jpg",
        consistency: "SOLID",
        name: "bell pepper",
        nameClean: "bell pepper",
        original: "1/2 cup diced bell pepper",
        originalName: "diced bell pepper",
        amount: 0.5,
        unit: "cup",
        meta: ["diced"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 74.5,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.png",
        consistency: "SOLID",
        name: "garlic",
        nameClean: "garlic",
        original: "1 clove garlic diced",
        originalName: "garlic diced",
        amount: 1,
        unit: "clove",
        meta: ["diced"],
        measures: {
          us: {
            amount: 1,
            unitShort: "clove",
            unitLong: "clove",
          },
          metric: {
            amount: 1,
            unitShort: "clove",
            unitLong: "clove",
          },
        },
      },
      {
        id: 5662,
        aisle: "Meat",
        image: "meat-ground.jpg",
        consistency: "SOLID",
        name: "ground turkey",
        nameClean: "ground turkey",
        original: "1 1/2 pounds lean ground turkey",
        originalName: "lean ground turkey",
        amount: 1.5,
        unit: "pounds",
        meta: ["lean"],
        measures: {
          us: {
            amount: 1.5,
            unitShort: "lb",
            unitLong: "pounds",
          },
          metric: {
            amount: 680.389,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 4053,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "olive-oil.jpg",
        consistency: "LIQUID",
        name: "olive oil",
        nameClean: "olive oil",
        original: "olive oil",
        originalName: "olive oil",
        amount: 4,
        unit: "servings",
        meta: [],
        measures: {
          us: {
            amount: 4,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 4,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
      {
        id: 11282,
        aisle: "Produce",
        image: "brown-onion.png",
        consistency: "SOLID",
        name: "onion",
        nameClean: "onion",
        original: "1/2 cup diced onion",
        originalName: "diced onion",
        amount: 0.5,
        unit: "cup",
        meta: ["diced"],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 80,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1102047,
        aisle: "Spices and Seasonings",
        image: "salt-and-pepper.jpg",
        consistency: "SOLID",
        name: "salt and pepper",
        nameClean: "salt and pepper",
        original: "salt and pepper to taste",
        originalName: "salt and pepper to taste",
        amount: 4,
        unit: "servings",
        meta: ["to taste"],
        measures: {
          us: {
            amount: 4,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 4,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
      {
        id: 11507,
        aisle: "Produce",
        image: "sweet-potato.png",
        consistency: "SOLID",
        name: "sweet potatoes",
        nameClean: "sweet potato",
        original: "4 large sweet potatoes",
        originalName: "sweet potatoes",
        amount: 4,
        unit: "large",
        meta: [],
        measures: {
          us: {
            amount: 4,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 4,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 11887,
        aisle: "Pasta and Rice",
        image: "tomato-paste.jpg",
        consistency: "SOLID",
        name: "tomato paste",
        nameClean: "tomato paste",
        original: "6 ounces tomato paste",
        originalName: "tomato paste",
        amount: 6,
        unit: "ounces",
        meta: [],
        measures: {
          us: {
            amount: 6,
            unitShort: "oz",
            unitLong: "ounces",
          },
          metric: {
            amount: 170.097,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 11549,
        aisle: "Canned and Jarred",
        image: "tomato-sauce-or-pasta-sauce.jpg",
        consistency: "SOLID",
        name: "tomato sauce",
        nameClean: "canned tomato sauce",
        original: "14 ounces tomato sauce",
        originalName: "tomato sauce",
        amount: 14,
        unit: "ounces",
        meta: [],
        measures: {
          us: {
            amount: 14,
            unitShort: "oz",
            unitLong: "ounces",
          },
          metric: {
            amount: 396.893,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 14412,
        aisle: "Beverages",
        image: "water.png",
        consistency: "LIQUID",
        name: "water",
        nameClean: "water",
        original: "1 cup water",
        originalName: "water",
        amount: 1,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 1,
            unitShort: "cup",
            unitLong: "cup",
          },
          metric: {
            amount: 236.588,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
    ],
    id: 1046982,
    title: "How to Make the Perfect Sweet Potato Sloppy Joes",
    readyInMinutes: 40,
    servings: 4,
    sourceUrl:
      "https://www.pinkwhen.com/how-to-make-the-perfect-sweet-potato-sloppy-joes/",
    image: "https://img.spoonacular.com/recipes/1046982-556x370.jpg",
    imageType: "jpg",
    taste: {
      sweetness: 42.01,
      saltiness: 100,
      sourness: 17.04,
      bitterness: 14.14,
      savoriness: 66.21,
      fattiness: 65.43,
      spiciness: 7450,
    },
    summary:
      'The recipe How to Make the Perfect Sweet Potato Sloppy Joes is ready <b>in roughly 40 minutes</b> and is definitely a super <b>gluten free, dairy free, paleolithic, and primal</b> option for lovers of American food. This recipe serves 4. This main course has <b>679 calories</b>, <b>49g of protein</b>, and <b>18g of fat</b> per serving. For <b>$4.82 per serving</b>, this recipe <b>covers 46%</b> of your daily requirements of vitamins and minerals. This recipe from Pink When has 11 fans. Head to the store and pick up salt and pepper, garlic, ground turkey, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/how-to-make-the-perfect-sweet-potato-sloppy-joes-1363971">How to Make the Perfect Sweet Potato Sloppy Joes</a>, <a href="https://spoonacular.com/recipes/just-perfect-sloppy-joes-82826">Just Perfect Sloppy Joes</a>, and <a href="https://spoonacular.com/recipes/how-to-make-classic-sloppy-joes-471307">How to Make Classic Sloppy Joes</a>.',
    cuisines: ["American"],
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    diets: ["gluten free", "dairy free", "paleolithic", "primal", "whole 30"],
    occasions: [],
    instructions:
      "Instructions\n\n\n\nPreheat the oven to 425 degrees. Pierce the sweet potatoes all over the skin with a fork. Rub the outside of the potatoes with olive oil and cover with foil. Bake in the oven for 1 hour until fully cooked.\n\n\nBrown the ground turkey in a skillet on medium heat. Once it's finished cooking, add the onion, bell pepper, and garlic. Mix well. Cook until the mixture is fully cooked and starts to crumble.\n\n\nStir in the garlic, water, tomato paste, and tomato sauce. Stir until mixed well. Turn heat down to low and simmer for 20 minutes, stirring occasionally.\n\n\nRemove the sweet potatoes from the foil and slice down the middle. Mash up the insides with a fork and pour the sloppy joe mix over sweet potatoes. Serve and enjoy!",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat the oven to 425 degrees. Pierce the sweet potatoes all over the skin with a fork. Rub the outside of the potatoes with olive oil and cover with foil.",
            ingredients: [
              {
                id: 11507,
                name: "sweet potato",
                localizedName: "sweet potato",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/sweet-potato.png",
              },
              {
                id: 4053,
                name: "olive oil",
                localizedName: "olive oil",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
              },
              {
                id: 11352,
                name: "potato",
                localizedName: "potato",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png",
              },
              {
                id: 1012034,
                name: "dry seasoning rub",
                localizedName: "dry seasoning rub",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png",
              },
            ],
            equipment: [
              {
                id: 404765,
                name: "aluminum foil",
                localizedName: "aluminum foil",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png",
              },
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Bake in the oven for 1 hour until fully cooked.",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Brown the ground turkey in a skillet on medium heat. Once it's finished cooking, add the onion, bell pepper, and garlic.",
            ingredients: [
              {
                id: 5662,
                name: "ground turkey",
                localizedName: "ground turkey",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/meat-ground.jpg",
              },
              {
                id: 10211821,
                name: "bell pepper",
                localizedName: "bell pepper",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
              },
            ],
          },
          {
            number: 4,
            step: "Mix well. Cook until the mixture is fully cooked and starts to crumble.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Stir in the garlic, water, tomato paste, and tomato sauce. Stir until mixed well. Turn heat down to low and simmer for 20 minutes, stirring occasionally.",
            ingredients: [
              {
                id: 11887,
                name: "tomato paste",
                localizedName: "tomato paste",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/tomato-paste.jpg",
              },
              {
                id: 11549,
                name: "tomato sauce",
                localizedName: "tomato sauce",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/water.png",
              },
            ],
            equipment: [],
            length: {
              number: 20,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step: "Remove the sweet potatoes from the foil and slice down the middle. Mash up the insides with a fork and pour the sloppy joe mix over sweet potatoes.",
            ingredients: [
              {
                id: 11507,
                name: "sweet potato",
                localizedName: "sweet potato",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/sweet-potato.png",
              },
            ],
            equipment: [
              {
                id: 404765,
                name: "aluminum foil",
                localizedName: "aluminum foil",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png",
              },
            ],
          },
          {
            number: 7,
            step: "Serve and enjoy!",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 93.90286254882812,
    spoonacularSourceUrl:
      "https://spoonacular.com/how-to-make-the-perfect-sweet-potato-sloppy-joes-1046982",
  });
  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     const currentRecipe = await fetchRecipeDetails(id);
  //     setRecipe(currentRecipe);
  //   };
  //   fetchRecipe();
  // }, [id]);
  return (
    <div className="recipe">
      <div className="recipe__image__container">
        <img src={recipe.image} alt="recipe__img" className="recipe__image" />
      </div>
      <div className="recipe__details__container">
        <div className="recipe__title__container">
          <h1 className="recipe__title">{recipe.title}</h1>
          {user ? (
            <button className="recipe__button">
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                bookmark_add
              </span>{" "}
              Save
            </button>
          ) : (
            ""
          )}
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
