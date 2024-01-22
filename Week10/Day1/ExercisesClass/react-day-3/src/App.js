import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Components/Counter';
// import Parent from './Components/Parent';
// import Child from './Components/Child';
import ErrorBoundary from './ErrorBoundary';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Error Boundary</h1>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
        {/* <Parent auth='admin'>
          <Child />
          <Counter />
        </Parent>
        <Parent auth='user'>
          <Child />
        </Parent> */}
      </header>
    </div>
  );
}

export default App;
