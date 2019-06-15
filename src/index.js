import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Literal
const literalNumber = 99;
console.log(literalNumber);

// Function syntax
// Perform a type-conversion in a non-constructor context
console.log(Number(55));
console.log(Number('33'));
console.log(Number('44px'));

// Constructor syntax, creates a wrapper object
console.log(new Number('44px')); // Avoid using this
