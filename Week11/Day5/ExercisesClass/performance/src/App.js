import logo from './logo.svg';
import { useState, useCallback, useMemo } from 'react';
import ToDo from './ToDo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount(c => c + 1);
  }

  // const addTask = () => {
  //   setTodos((todos) => [...todos, 'new todo']);
  // };

  const addTask = useCallback(() => {
    setTodos((todos) => [...todos, 'new todo']);
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={increment}>+</button>
        <ToDo todos={todos} addTask={addTask}/>
      </header>
    </div>
  );
}

export default App;