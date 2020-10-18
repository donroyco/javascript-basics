import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
  id: 'xhs8Pla',
  name: 'Coca-Cola',
};

const price = {
  sale: 99,
  full: 129,
};

// Merge objects
// Using Object.assign, { price } is creating an object inside object
// const mergedDrink = Object.assign({}, drink, { price });

// Using spread operator
const mergedDrink = { ...drink, ...{ price } };

console.log(mergedDrink);
