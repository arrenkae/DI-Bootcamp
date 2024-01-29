import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux</h1>
        <Counter count={count} setCount={setCount}/>
      </header>
    </div>
  );
}

export default App;
