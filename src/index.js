import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
  id: 'xhs8Pla',
  name: 'Coca-Cola',
  price: {
    sale: 99,
    full: 129,
  }
};

// Effective check for an object
console.log(Object.prototype.toString.call(drink));

// In function
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(getType(drink));
