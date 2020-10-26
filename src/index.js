import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
];

// Syntax forEach
// items.forEach((value, index, array) => { ... });

// ['a', 'b', 'c', 'd'].forEach((item, index) => {
//   console.log(item, index);
// });

// items.forEach((item) => {
//   app.innerHTML += `
//     <li>
//         ${item.id} ${item.name} - ${item.price}
//     </li>
//   `
// });

// forEach without forEach
// for(let i = 0; i < items.length; i++) {
//   const item = items[i];
//   app.innerHTML += `
//     <li>
//         ${item.id} ${item.name} - ${item.price}
//     </li>
//   `
// }
