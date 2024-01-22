import logo from './logo.svg';
import './App.css';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulation 1</h1>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <h1>Simulation 2</h1>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <h1>Simulation 3</h1>
        <BuggyCounter />
      </header>
    </div>
  );
}

export default App;
