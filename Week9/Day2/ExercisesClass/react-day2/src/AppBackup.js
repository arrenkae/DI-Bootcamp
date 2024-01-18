import logo from './logo.svg';
import './App.css';
import User from './components/User';
// import users from "./users.json"
import React from 'react';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello',
      users: []
    }
    // this.title = 'Robots';
    console.log(constructor);
  }
  showRobots = () => {
    this.setState({title: 'My Robots'})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({users:data})
    })
    .catch(err => {
      console.log(err);
    });
  }
  componentDidMount = () => {
    // this.showRobots();
    console.log('componentDidMount');
  }
  componentDidUpdate = (prevProps, presState) => {
    console.log('prevProps=>', prevProps);
    console.log('presState=>', presState);
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.showRobots}>Change Title</button><br />
          {
            this.state.users.map((item, index) => {
              return <User userinfo={item} key={index} />
            })
          }
      </div>
    );
  }
}

// export default App;
