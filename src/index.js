import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399, stock: true },
  { id: '🍟', name: 'Jumbo Fries', price: 199, stock: true },
  { id: '🥤', name: 'Big Slurp', price: 299, stock: false },
];

// Array every: if every element within a array passes a condition

// Syntax Array.every
// returnValue can only be true or false
// const returnValue = items.every((value, index, array) => { ... });

// Simple example
// const isEveryValueTrue = [true, true, false].every(Boolean);
// console.log(isEveryValueTrue);

const isInStock = items.every(item => item.stock);
if (!isInStock) {
  console.log(
    `Sorry, ${items.find(item => !item.stock).name} is out of stock. Try again later.`
  )
}
console.log(items);
