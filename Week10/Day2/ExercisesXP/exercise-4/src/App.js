import logo from './logo.svg';
import './App.css';

function App() {
  
  const postData = async() => {
    try {
      const res = await fetch('https://webhook.site/246ec51f-886b-469d-9747-85f958b4451c', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27
        })
      });
      if (res.ok) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <button onClick={postData}>Press me to post some data</button>
    </div>
  );
}

export default App;
