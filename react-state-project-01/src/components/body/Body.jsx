import { useState } from "react";
import "./Body.css";
import Recipe from "../recipe/Recipe";
import IngredientsList from "../ingredientsList/IngredientsList";
import { getRecipeFromChefClaude } from "@/ai.js";

export default function Body() {
  //
  //Initialises array of ingredients
  const [ingredients, setIngredients] = useState([]);

  //Initialises recipeShow state => false
  // const [recipeShown, setRecipeShown] = useState(false);

  const [recipeMarkdown, setRecipeMarkdown] = useState("");

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

  async function getRecipe() {
    console.log("Button Pressed!");
    console.log("Awaiting Response");
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipeMarkdown(recipeMarkdown);
  }

  // //Toggles whether the recipe suggestion is shown
  // function toggleRecipe() {
  //   setRecipeShown((prevBool) => !prevBool);
  // }
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
      <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      <Recipe recipe={recipeMarkdown} />
    </main>
  );
}
