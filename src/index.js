import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 89]];

// Shallow clone = one level down
// const drinksClone = [...drinks];
// const drinksClone = drinks.slice();
// const drinksClone = Array.from(drinks);

// Deep clone
const drinksClone = JSON.parse(JSON.stringify(drinks));

drinksClone[0][1] = 1000;

console.log(drinks);
console.log(drinksClone);

