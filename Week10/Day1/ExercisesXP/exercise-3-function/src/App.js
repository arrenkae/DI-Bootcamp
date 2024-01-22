import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const Child = (props) => {
  return(
    <h1>Hello World!</h1>
  )
}

function App() {
  const [show, setShow] = useState(true);
  const [header, setHeader] = useState(<Child />)

  const deleteHeader = () => {
    setShow(false);
  }

  useEffect(() => {
    if (!show) {
      console.log('The header component is about to be unmounted');
      setHeader('');
    }
}, [show]);

  return (
    <div className="App">
      <header className="App-header">
          {header}
          <button onClick={deleteHeader}>Delete Header</button>
        </header>
    </div>
  );
}

export default App;