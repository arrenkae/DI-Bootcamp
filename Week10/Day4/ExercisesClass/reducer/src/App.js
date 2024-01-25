import logo from './logo.svg';
import {useState, useReducer} from 'react';
import './App.css';

const initialState = {
  count: 10
}

const INC = 'increment';
const DEC = 'decrement';

const reducer = (state, action) => {
  switch (action.type) {
    case INC:
      return {...state, count: state.count + action.by}
    case DEC:
      return {...state, count: state.count - action.by}
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <header className="App-header">
        <h2>useState</h2>
        <button onClick={() => setCount(count + 1)}> + </button>
        {count}
        <button onClick={() => setCount(count - 1)}> - </button>
        <h2>useReducer</h2>
        <button onClick={() => dispatch({type: INC, by: 1})}> + </button>
        {state.count}
        <button onClick={() => dispatch({type: DEC, by: 1})}> + </button>
      </header>
    </div>
  );
}

export default App;
