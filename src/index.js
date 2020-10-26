import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = ['Lemonade', 'Lime', 'Peach'];

// Beginning of array
// drinks.unshift('Water'); // mutable: changes original
// const newDrinksStartArray = ['Water', ...drinks]; // immutable: new array

// Middle of array
const index = 1;
drinks.splice(index, 0, 'Cola'); // mutable: changes original
const newDrinksMiddleArray = [...drinks.splice(0, index), 'Mojito', ...drinks.splice(index -1)]; // immutable: new array
console.log(newDrinksMiddleArray);

// End of array
// drinks.push('Cola'); // mutable: changes original
// const newDrinksEndArray = [...drinks, 'Cola']; // immutable: new array
// console.log(newDrinksEndArray);

console.log(drinks);
