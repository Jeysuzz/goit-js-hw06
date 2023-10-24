const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ingredientsList = document.querySelector("#ingredients");

// ingredientsList.insertAdjacentHTML('beforebegin', '<h1>Ingredients</h1>');

// const ingredientsArray = ingredients.map((ingredient) => {

//   const ingredientElement = document.createElement("li");
//   ingredientElement.classList.add("item");
//   ingredientElement.textContent = ingredient;

//   return ingredientElement;
// }
// );

// ingredientsList.append(...ingredientsArray);


const ingredientsList = document.querySelector("#ingredients");

ingredientsList.insertAdjacentHTML('beforebegin', '<h1>Ingredients</h1>');

ingredients.forEach ((el) => {
  const ingredientsElement = document.createElement("li");
  ingredientsElement.textContent = el;
  ingredientsElement.classList.add("item");
  ingredientsList.appendChild(ingredientsElement);
});

