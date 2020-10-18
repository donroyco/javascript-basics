import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 99]];

// Array destructuring
const [ drinkOne, drinkTwo ] = drinks;
console.log(drinkOne, drinkTwo);

// Destructure deeper arrays and give the rest (...rest) back in a separate array
const [one, [a, b], ...rest ] = drinks;

console.log(one, a, b, rest );
