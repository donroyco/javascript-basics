import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

// name = parameter
// default value = 'Fiat';
function makeCar(name = 'Fiat') {
  // name = name || 'Porsche';

  // if (!name) {
  //   name = 'Porsche';
  // }

  // return name ? console.log(`Making car: ${name.toUpperCase()}`) : '';
  console.log(`Making car: ${name.toUpperCase()}`);
}

// strings = arguments
makeCar('Porsche');
makeCar('Ferrari');
makeCar();
