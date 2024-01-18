import logo from './logo.svg';
import './App.css';
import User from './components/User';
// import users from "./users.json"
import {useState, useEffect} from 'react';

/** inline styling
* classes - external css
* css libraries
*/

/** 
* components - function / class
* hooks
* lifecycle component
* state
* rerender
*/ 

const App = () => {
  const [title, setTitle] = useState('My Title');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('UseEffect');
    if (users)
      changeTitle()
  }, [users])

  const changeTitle = () => {
    setTitle('My Users');
    getUsers();
  }
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUsers(data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
      {
        users.map((item, index) => {
          return <User userinfo={item} key={index} />
        })
      }
    </div>
  );
}

export default App;
