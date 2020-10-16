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

// Delete key with delete, but it is a slow operation
// delete drink.name;

const { price, ...rest } = drink;
console.log(price, rest, drink);
