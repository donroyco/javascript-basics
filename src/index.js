import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
  id: 'xhs8Pla',
  name: 'Coca-Cola',
  price: {
    sale: 99,
    full: 129,
  },
};

// Nested object fetch value of 'full' key
const { id, name, price: { full } } = drink;

console.log( id, name, full );

// Move this block to line 17
// When duplicate identifier key, you can rename them in destructured object
// const id = 1234;

// Renamed to myId
// const { id: myId, name, price: { full } } = drink;
//
// console.log( id, myId, name, full );
// ---------------


// Use spread operator to get the rest of object keys
// const { id, name, ...rest } = drink;
// console.log( id, name, rest );
