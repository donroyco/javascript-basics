import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = ['Pepsi', 'Lemonade', 'Cola'];
let count = 0;

for (let i = 0; i < drinks.length; i++) {
  const drink = drinks[i];
  if (drink === 'Lemonade') {
    console.log('Pour me a drink');
    continue;
  }
  count++;
}

console.log(count);
