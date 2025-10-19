export default function Recipe({ recipe }) {
  recipe
    ? console.log("Recipe shold be showing")
    : console.log("Recipe should not be showing");
  return (
    <>
      {recipe ? (
        <section>
          {recipe}
          <p>Is Showing</p>
        </section>
      ) : null}
    </>
  );
}
