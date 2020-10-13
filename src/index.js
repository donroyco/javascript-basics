import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// Scope 1
// const anotherID = '32453dsa';
//
// function makeCarPartID(id) {
//   // Scope 2
//   console.log(id, anotherID);
// }
//
// makeCarPartID('x32gf2');



function makeCarPartID(id) {
  const theId = `CAR_PART_${id}`;
  // return function (name) {
  //   return `${theId}_${name.toUpperCase()}`;
  // };
  // Arrow function
  return (name) => `${theId}_${name.toUpperCase()}`;
}

const carPartId = makeCarPartID('x32gf2');
console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));
