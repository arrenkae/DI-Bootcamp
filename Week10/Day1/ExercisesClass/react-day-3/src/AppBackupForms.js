import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  // const [number, setNumber] = useState('');
  // const [agree, setAgree] = useState(false);

  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username,email,pass,number,agree);
    console.log(inputs);
  }

  const handleInputs = (e) => {
    const value = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
    const name = e.target.name;
    setInputs({...inputs, [name]:value})
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          Username: <input name="username" type="text" onChange={(e) => handleInputs(e)}/><br />
          Email: <input type="text" name="email" onChange={(e) => handleInputs(e)}/><br />
          Password: <input type="text" name="password" onChange={(e) => handleInputs(e)}/><br />
          First name: <input name="fname" type="text" onChange={(e) => handleInputs(e)}/><br />
          <select name="number" onChange={(e) => handleInputs(e)}>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select><br />
          Agree to everything: <input type="checkbox" name="agree" onChange={(e) => handleInputs(e)} />
          <br />
          <input type="submit" value="Send" />
        </form>
      </header>
    </div>
  );
}

export default App;
