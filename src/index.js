import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Old way of doing this
function makeCarPrice() {
  const totalPrice = Array.from(arguments).reduce((prev, next) => prev + next);
  console.log(`Total: ${totalPrice} USD`);
}

makeCarPrice(11, 44, 55, 99);

// New way of doing this, less code

// ...params = rest parameter; gives the rest of the arguments as Array

function makeCarPriceRest(...params) {
  const totalPrice = params.reduce((prev, next) => prev + next);
  console.log(`Total Rest: ${totalPrice} USD`);
}

makeCarPriceRest(34, 76, 43, 23);
