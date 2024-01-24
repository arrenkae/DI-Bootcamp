import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);

  let name = 'John';
  const nameRef = useRef('Dan');
  const inputRef = useRef();
  
  console.log(nameRef);

  const changeJohn = () => {
    name = 'Marry';
    console.log(name);
  };

  const changeDan = () => {
    nameRef.current = 'DanDan';
    console.log(nameRef);
    console.log(inputRef.current.value)
  };

  return (
    <div className="App">
      <header className='App-header'>
        <div>
          <h2>{count}</h2>
          <button onClick={() => setCount(count+1)}>Add</button>
        </div>
        <div>
          <h2>{name}</h2>
          <button onClick={() => changeJohn()}>Change name</button>
        </div>
        <div>
          <h3>{nameRef.current}</h3>
          <button onClick={() => changeDan()}>Change name</button>
        </div>
        <div>
          <input ref={inputRef} />
        </div>
      </header>
    </div>
  );
}

export default App;
