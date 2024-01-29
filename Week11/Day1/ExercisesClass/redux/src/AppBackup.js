import logo from './logo.svg';
import './App.css';
import { createContext, useState, useReducer } from 'react';
import Counter from './Counter';

export const AppContext = createContext();

const initialState = {
  count: 33
}

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {...state, count: state.count+1}
  } else if (action.type === 'decrement') {
    return {...state, count: state.count-1}
  }
  return {...state};
}

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <header className="App-header">
      {/* <button onClick = {() => setCount(count - 1)}> - </button> */}
      <button onClick = {() => dispatch({type: 'decrement'})}> - </button>
        Count: {state.count}
      <button onClick = {() => dispatch({type: 'increment'})}> + </button>
      {/* <button onClick = {() => setCount(count + 1)}> + </button> */}
        {/* <AppContext.Provider value={{count, setCount}}> */}
          {/* <Counter /> */}
        {/* </AppContext.Provider > */}
      </header>
    </div>
  );
}

export default App;
