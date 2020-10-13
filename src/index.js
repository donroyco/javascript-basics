import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

function carPartId(name, fn) {
  const theId = `CAR_PART_x3v0rk4`;
  return fn(`${theId}_${name.toUpperCase()}`);
}

const carPart = carPartId('Left Door', function (id) {
  return `Car Part ID: ${id}`;
});

console.log(carPart);
