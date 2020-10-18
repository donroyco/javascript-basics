import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drinks = ['Lemonade', 'Lime', 'Peach'];

console.log(drinks);

// Alternative way to declare arrays (not recommended)
console.log(new Array('Lemonade', 'Lime', 'Peach'));
console.log(Array('Lemonade', 'Lime', 'Peach'));
