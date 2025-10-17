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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}