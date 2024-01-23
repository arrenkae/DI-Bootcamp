import {useState, useEffect} from 'react';
import axios from 'axios';

const Message = (props) => {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      getMessage();
    }, [])
  
    const getMessage = async() => {
      try {
          const res = await axios.get('http://localhost:5000/api/hello');
          setMessage(res.data);
      } catch (err) {
          console.log(err);
      }
    }
  
    return (
      <h1>{message}</h1>
    )
}

export default Message;