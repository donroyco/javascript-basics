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
  },
};

// Shallow copies
// Reference: Merge all drink object items into a new object. This is only working for top level object keys
// const drinkClone = Object.assign({}, drink);
// const drinkClone = {...drink}; // = the same as Object.assign

// Deep copy
const drinkStringified = JSON.stringify(drink);
const drinkClone = JSON.parse(drinkStringified);
drinkClone.id = 'abcd';
drinkClone.price.sale = 79;

console.log(drinkClone);
