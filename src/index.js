import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = [
  { name: 'Lemonade', price: 79 },
  { name: 'Peach', price: 99 },
  { name: 'Lime', price: 89 },
];

// Reverse array
// const drinksReverse = drinks.reverse();

// Sort array (by price)
const drinksSort = drinks.sort((a, b) => a.price - b.price);
console.log(drinksSort);

