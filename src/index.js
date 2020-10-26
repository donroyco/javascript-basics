import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
];

// Array filter: create a new array with values of the values that meet a certain condition

// Syntax Array.filter
// const returnValue = items.filter((value, index, array) => { ... })

// Simple example
// const filtered = [true, false, true].filter(Boolean);
// console.log(filtered);

// Filter all items in array with at least certain price
const expensiveItems = items.filter(item => item.price > 199) ;
console.log(expensiveItems);
console.log(items);
