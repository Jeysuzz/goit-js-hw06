const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

ingredientsList.insertAdjacentHTML('beforebegin', '<h1>Ingredients</h1>');

const ingredientsArray = ingredients.map((ingredient) => {

  const ingredientElement = document.createElement("li");
  ingredientElement.classList.add("item");
  ingredientElement.textContent = ingredient;

  return ingredientElement;
}
);

ingredientsList.append(...ingredientsArray);

