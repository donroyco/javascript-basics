import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Terminology: Item in array = element
const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 99]];

console.log(`Drink: ${drinks[0][0]}, Price: ${drinks[0][1]}`);
