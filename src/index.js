import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = [['Lemonade', 99], ['Lime', 99]];
const newDrinks = [['Peach', 89]];

// concat: Immutable way of merging arrays
// const merged = drinks.concat(newDrinks);

// spread operator: Immutable way of merging arrays
const merged = [...drinks, ...newDrinks];

console.log(merged);
console.log(drinks);
console.log(newDrinks);

