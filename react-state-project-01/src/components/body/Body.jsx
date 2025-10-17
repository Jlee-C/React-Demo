import { useState } from "react";
import "./Body.css";
import Recipe from "../recipe/Recipe";
import IngredientsList from "../ingredientsList/IngredientsList";

export default function Body() {
  //
  //Initialises array of ingredients
  const [ingredients, setIngredients] = useState([]);

  //Initialises recipeShow state => false
  const [recipeShown, setRecipeShown] = useState(false);

  //Adds user input into ingredients array (does not check to see if its an ingredient)
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => {
      if (newIngredient === "") {
        return prevIngredients;
      } else {
        return [...prevIngredients, newIngredient];
      }
    });
  }

  //Toggles whether the recipe suggestion is shown
  function toggleRecipeShown() {
    setRecipeShown((prevBool) => !prevBool);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {/** conditional rendering for ingredient dislay and recipe generator */}
      <IngredientsList
        ingredients={ingredients}
        handleOnClick={toggleRecipeShown}
      />
      {recipeShown ? <Recipe /> : null}
    </main>
  );
}
