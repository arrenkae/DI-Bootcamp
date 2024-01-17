import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
// import SubHello from './SubHello'
import User from "./components/User";

const arr = [
  {id:1, name:'John', email: 'john@gmail.com' },
  {id:2, name:'Marry', email: 'mmm@gmail.com' },
  {id:3, name:'Anne', email: 'aaa@gmail.com' },
]

/** props */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          arr.map((item, index) => {
            return (
              <User userinfo={item} key={item.index} />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
