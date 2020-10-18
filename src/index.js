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

// Loop over all object keys
// for...in
for (const prop in drink) {
  const value = drink[prop];
  // Check if iterable in nested loop
  if (Object.prototype.toString.call(value) === '[object Object]') {
    for (const key in value) {
      console.log(key);
    }
  }
}
