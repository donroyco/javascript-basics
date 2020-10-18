import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Terminology: Item in array = element
const drinks = ['Lemonade', 'Lime', 'Peach'];

console.log(drinks);
console.log('----------');

// Access last item in array
const itemIndex = drinks.length - 1;
console.log(drinks[itemIndex]);

// How to empty array
drinks.length = 0;
// Remove elements from array
drinks.splice(0, drinks.length);
console.log(drinks);
