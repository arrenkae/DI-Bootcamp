import logo from './logo.svg';
import './App.css';
import Garage from './components/Garage.js'
import Car from './components/Car.js'
import Events from './components/Events.js';
import Phone from './components/Phone.js';
import Color from './components/Color.js';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <h1>Exercise 1</h1>
      <Garage size="small" />
      <Car carinfo={carinfo} />
      <h1>Exercise 2</h1>
      <Events />
      <h1>Exercise 3</h1>
      <Phone />
      <h1>Exercise 4</h1>
      <Color />
    </div>
  );
}

export default App;
