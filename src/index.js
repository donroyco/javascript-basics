import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = ['Lemonade', 'Lime', 'Peach'];

// Find a particular element (returns an index)
const index = drinks.indexOf('Lime');
if (index !== -1) {
  console.log(drinks[index]);
}

// Included (returns a boolean)
const included = drinks.includes('Peach');
console.log(included);

// Find in different data structure
const drinksWithId = [
  { id: 1, name: 'Lemonade' },
  { id: 2, name: 'Lime' },
  { id: 3, name: 'Peach' },
];

// findIndex is the same as 'indexOf', but easier for complex data structures
const idIndex = drinksWithId.findIndex(value => value.name === 'Peach');
console.log(drinksWithId[idIndex]);

// find is the same as 'includes', but easier for complex data structures
const foundItem = drinksWithId.find(value => value.name === 'Peach');
console.log(foundItem);
