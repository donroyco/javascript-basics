import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = ['Pepsi', 'Lemonade', 'Cola'];

for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}

console.log('-------------');

for(const drink of drinks) {
  console.log(drink);
}
