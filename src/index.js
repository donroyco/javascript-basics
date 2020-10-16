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

// Update existing property
// drink.name = 'Peach';

// Add property, it will automatically create
// drink.brand = 'The Coca Cola Company';

// Update or add property
function propUpdate(prop, value) {
  drink[prop] = value;
}

propUpdate('brand', 'The Coca Cola Company');
propUpdate('name', 'Peach');

console.log(drink);
