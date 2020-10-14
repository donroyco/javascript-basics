import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const drink = {
  id: 'xhs8Pla',
  name: 'Coca-Cola',
  price: 99,
  getDrinkDetails() {
    return `Drink ${this.name} (${this.price})`;
  },
  // Arrow function
  // getDrinkDetails: () => `Drink ${drink.name} (${drink.price})`,
  //
  // Every key is converted to a string
  'abc 123': 'I am the value!',
  100: 'I am a number'
};

console.log(drink.getDrinkDetails());
