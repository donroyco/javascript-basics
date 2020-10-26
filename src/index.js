import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
];

// Array map: loop over array and access each individual item resulting in a new array

// Syntax Array.map
// You have to return a value
// const returnValue = items.map((value, index, array) => { ... })

// const mapped = [1, 2, 3, 4, 5].map((x) => x * 2);
// console.log(mapped);

// Declarative style
// Coupon with half price: loop over our items and change only fries
// const halfOfFries = items.map(item => {
//   if (item.id === '🍟') {
//     return {
//       ...item,
//       price: item.price / 2
//     }
//   }
//   return item;
// });
// console.log(halfOfFries);

console.log(items);
