import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(1 == '1');
console.log(1 === '1');

// Truthy values
console.log('Boolean value true', !!true);
console.log('Same as !!true', Boolean(true));
console.log('Empty object', !!{});
console.log('Empty array', !![]);
console.log('New date', !!new Date());
console.log('Zero', !!0);
console.log('String with zero', !!'0');
console.log('Number 42', !!42);
console.log('Number -42', !!-42);
console.log('Number Pi', !!3.14);
console.log('Number Min Pi', !!-3.14);

// Falsy values
console.log('Boolean value false', !!false);
console.log('Boolean value null', !!null);
console.log('Undefined', !!undefined);
console.log('Zero', !!0);
console.log('Not a number', !!NaN);
console.log('Empty string', !!'');
