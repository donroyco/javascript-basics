import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
];

// Array reduce: create a new array with values of the values that meet a certain condition

// Syntax Array.reduce
// 0 here is the initial value
// const reducedValue = items.reduce((prev, next, index, array) => {}, 0);

// Simple example
// const reducedValue = [1,2,3,4,5].reduce((prev, next) => prev + next);
// console.log(reducedValue);

// Array of numbers, they can be chained
// const reduced = items.map(item => item.price).reduce((prev, next) => prev + next);
// console.log(reduced);

// Array of objects
const reducedPrices = items. reduce((prev, next) => prev + next.price, 0);
console.log(reducedPrices);
console.log(items);
