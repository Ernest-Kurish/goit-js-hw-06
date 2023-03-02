const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`There are ${categoriesItems.length} categories:`);

categoriesItems.forEach(item => {
  const header = item.querySelector('h2');
  const itemsList = item.querySelector('ul');
  const itemsCount = itemsList.children.length;
  console.log(`- ${header.textContent}: ${itemsCount} items`);
});



