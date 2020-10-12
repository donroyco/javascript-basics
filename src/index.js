import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Default function
function makeCarPrice(...params) {
  return params.reduce((prev, next) => prev + next);
}

// Arrow function
const makeCarPriceArrow = (...params) => params.reduce((prev, next) => prev + next);

console.log(`Total: ${makeCarPrice(11, 22, 33, 44, 55)}`);
console.log(`Total Arrow: ${makeCarPriceArrow(21, 88, 33, 44, 55)}`);
