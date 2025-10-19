import ReactMarkdown from "react-markdown";

export default function Recipe({ recipe }) {
  recipe
    ? console.log("Recipe shold be showing")
    : console.log("Recipe should not be showing");
  return <>{recipe ? <ReactMarkdown children={recipe} /> : null}</>;
}
