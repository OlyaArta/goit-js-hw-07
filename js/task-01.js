const categoriesList = document.querySelector('#categories');
const categoriesListItem = categoriesList.querySelectorAll('.item');

console.log(`В списке ${categoriesListItem.length} категории.`);

categoriesListItem.forEach((category) => {
  console.log('------------------------');
  console.log('Категория:', category.querySelector('h2').textContent);
  console.log('Количество элементов:', category.querySelectorAll('li').length);
});