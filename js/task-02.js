const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;   
  liEl.classList.add('item');
  console.log(liEl);
  listEl.appendChild(liEl);
};