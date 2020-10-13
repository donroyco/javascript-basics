import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// IIFE - Immediately-Invoked Function Expressions

const carPartId = (function (id) {
  const theId = `CAR_PART_${id}`;
  return function (name) {
    return `${theId}_${name.toUpperCase()}`;
  }
}('x23f23f3yjnu'));

console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));
