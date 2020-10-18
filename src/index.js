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

// Declarative approach for object iteration
Object.keys(drink).forEach(prop => console.log(drink[prop]));

console.log('-------');
console.log(drink);
