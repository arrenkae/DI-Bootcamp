import logo from './logo.svg';
import './App.css';
import Language from './components/Language';
import {useState} from 'react';

const App = () => {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const addVote = (e) => {
    setLanguages(languages.map(item => item.name === e.target.id ? { name: item.name, votes: item.votes + 1 } : item ))
  }

  return (
    <div>
      {
        languages.map((item, index) => {
          return (
            <div class='languageBox'>
              <Language languageInfo={item} />
              <span class='clickHere' onClick={addVote} id={item.name}>Click Here</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
