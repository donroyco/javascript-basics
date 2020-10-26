import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399, stock: true },
  { id: '🍟', name: 'Jumbo Fries', price: 199, stock: true },
  { id: '🥤', name: 'Big Slurp', price: 299, stock: false },
];

// Array find: it returns the first matching element of an array given a condition, or it will return undefined if it can't find one.

// Syntax Array.find
// const returnValue = items.find((value, index, array) => { ... });

// Simple example
// const found = ['a', 'b', 'c', 'd', 'e'].find(x => x === 'a');
// console.log(found);

const fries = items.find(item => item.id === '🍟');

console.log(fries);
if (fries) {
  console.log(`${fries.name} ${(fries.price / 100).toFixed(2)}`)
}
console.log(items);
