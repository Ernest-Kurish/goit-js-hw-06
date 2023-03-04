const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');

//   listItem.textContent = ingredient;

//   listItem.classList.add('item');

//   ingredientsList.appendChild(listItem);
// });

const ingredientsList = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

ingredientsList.append(...liElements);


