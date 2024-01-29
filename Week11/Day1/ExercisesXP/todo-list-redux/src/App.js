import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
// import TodosHooks from './components/TodosHooks';

function App() {
  return (
    <div className="App">
      <Todos />
      {/* <TodosHooks /> */}
    </div>
  );
}

export default App;