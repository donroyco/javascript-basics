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

// 1. Value exists

if (drink.id) {
  console.log(drink.id);
}

for (const prop in drink) {
  // You can get the value of a key by providing the key in square brackets
  console.log(drink[prop]);
}

// Gives an array of all values on drink object
Object.values(drink);


// 2. Property exists

console.log(drink.hasOwnProperty('name'));
console.log(Object.prototype.hasOwnProperty.call(drink, 'name'));
console.log(Object.keys(drink).includes('name'));
