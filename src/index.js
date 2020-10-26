import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = ['Lemonade', 'Lime', 'Peach'];

// Beginning of array
drinks.shift(); // mutable: changes original
const newDrinksArray = [ ...drinks.slice()]; // immutable: new array
console.log(newDrinksArray);

// Middle of array (anywhere)
const index = drinks.length - 1;
const newDrinks = [...drinks.slice(0, index), ...drinks.slice(index + 1)];
console.log(newDrinks);

// End of array
const removed = drinks.pop();
console.log(removed);

console.log(drinks);
