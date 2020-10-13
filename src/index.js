import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const firstCar = { id: '5tb4gb4nj3k' };
const secondCar = { id: 'h4ln3fbfk4' };
const thirdCar = { id: 'rg4rn4l990' };

function carPartId(name, quantity) {
  console.log(`${this.id}_${name.toUpperCase()}_${quantity}`);
}

const boundThirdCar = carPartId.bind(thirdCar);
boundThirdCar('Windscreen', 99);
boundThirdCar('Exhaust', 9);

carPartId.call(firstCar, 'Left Door', 12);
carPartId.apply(secondCar, ['Right Door', 21]);
