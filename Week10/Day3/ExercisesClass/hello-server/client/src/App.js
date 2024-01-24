import logo from './logo.svg';
import {useState} from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [greeting, setGreeting] = useState('');
  const [greetingName, setGreetingName] = useState('');
  const [name, setName] = useState('');

  const greet = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/hello`);
      setGreeting(res.data.msg);
      console.log(greeting);
    } catch (err) {
      console.log(err);
    }
  }

  const greetName = async() => {
    try {
      const res = await axios.get(`${BASE_URL}/hello/${name}`);
      setGreetingName(res.data.msg);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
        <button onClick={greet}>Greet</button>
        <h1>{greetingName}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button onClick={greetName}>Greet me</button>
      </header>
    </div>
  );
}

export default App;
