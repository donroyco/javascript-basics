import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = ['Pepsi', 'Lemonade', 'Cola'];

for (let i = 0; i < drinks.length; i++) {
  console.log(`#${i}`)
  const drink = drinks[i];
  if (drink === 'Lemonade') {
    console.log('Pour me a drink');
  }
}

