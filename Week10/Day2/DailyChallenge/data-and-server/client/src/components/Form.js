import {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
    const [userMessage, setUserMessage] = useState('');
    const [response, setResponse] = useState('');
  
    const inputMessage = (e) => {
      setUserMessage(e.target.value);
    }
  
    const postMessage = async(e) => {
      e.preventDefault();
      console.log(userMessage);
      try {
        const res = await axios.post('http://localhost:5000/api/world', {message: userMessage})
        setResponse(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  
    return (
      <>
      <form onSubmit={postMessage}>
            <h2>Post to Server:</h2>
            <input type="text" onChange={inputMessage}/>
            <input type="submit" value="Submit" />
      </form>
      <h3>{response}</h3>
      </>
    )
}

export default Form;