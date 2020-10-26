import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399, promo: false },
  { id: '🍟', name: 'Jumbo Fries', price: 199, promo: false },
  { id: '🥤', name: 'Big Slurp', price: 299, promo: true },
];

// Array some: if any element within a array pass a condition

// Syntax Array.some
// returnValue can only be true or false
// const returnValue = items.some((value, index, array) => { ... });

// Simple example
// const greaterThanOne = [1,2,3].some(x => x > 1);
// console.log(greaterThanOne);

// Is one of our items a promo?
const isInPromo = items.some(item => item.promo);

// If promo, price is 600. Start value (0) is needed.
const total = isInPromo ? 600 : items.reduce((prev, next) => prev + next.price, 0);
console.log(total);

console.log(items);
