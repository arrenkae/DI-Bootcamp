import logo from './logo.svg';
import './App.css';
import User from './components/User';
import GetUsersButton from './components/GetUsersButton';
import SearchUsers from './components/SearchUsers';
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
  const [usersFiltered, setUsersFiltered] = useState();

  // useEffect(() => {
  //   console.log('UseEffect');
  //   if (users)
  //     changeTitle()
  // }, [users])

  useEffect(() => {
    getUsers();
  }, []);

  // const changeTitle = () => {
  //   setTitle('My Users');
  //   getUsers();
  // }

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUsers(data);
      setUsersFiltered(data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const search = (searchText) => {
    const filter = users.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    })
    setUsersFiltered(filter);
  }

  return (
    <div>
      <h1>{title}</h1>
      {/* <button onClick={changeTitle}>Change Title</button><br /> */}
      {/* <GetUsersButton getUsersFunc = {getUsers}/> */}
      <SearchUsers searchFunc={search} />
      {usersFiltered ? 
        usersFiltered.map((item) => {
          return <User userinfo={item} key={item.id} />;
        })
      : null}
    </div>
  );
}

export default App;
