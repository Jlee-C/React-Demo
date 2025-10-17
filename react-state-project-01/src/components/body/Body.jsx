import { useState } from "react"
import "./Body.css"


export default function Body(){

    const [ingredients, setIngredients] = useState([])

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        
        setIngredients((prevIngredients) => {
            if (newIngredient === ""){
                return prevIngredients
            }
            else{
                return [...prevIngredients, newIngredient]
            }
    
        })
    }

    const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>))
    
    return(
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
            {(ingredients.length > 0) ?
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
            : null }
        </main>
    )
}