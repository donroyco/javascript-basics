import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// 1: Function declaration
function makeCar() {
  console.log('Making car...');
}

makeCar();

// 2: Function expression
const makeCarExpression = function myFunction() {};
console.log(makeCarExpression.name);

// 3: Arrow functions
const makeCarArrow = () => {
  console.log('Making car inside Arrow...');
};

makeCarArrow();


const makeCarArrowShorthand = () => console.log('Very short');

makeCarArrowShorthand();
