import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(typeof []);
console.log([] instanceof Array);
console.log(new Array() instanceof Array);
console.log(Array.isArray([1,2,3,4])); // Best way to check if it's an array, new way to do so
console.log(Object.prototype.toString.call([]));

