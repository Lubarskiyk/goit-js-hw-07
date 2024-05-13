const categories = document.querySelector('#categories');
console.log(`Number of categories ${categories.childElementCount}`);
const item = document.querySelectorAll('.item');
let categoriesName = '';
let categoriesElementCount = '';
for (let i = 0; i < item.length; i++) {
  categoriesName = item[i].querySelector('h2').textContent;
  console.log(`Category: ${categoriesName}`);
  categoriesElementCount = item[i].querySelector('ul').childElementCount;
  console.log(`Elements: ${categoriesElementCount}`);
}
