import logo from './logo.svg';
import './App.css';
import React from 'react';

class Child extends React.Component {
  constructor(props) {
      super(props);
  }
  
  componentWillUnmount = () => {
      console.log('The header component is about to be unmounted');
  }

  render() {
      return (
          <h1>Hello World!</h1>
  )};
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  delete = () => {
    this.setState({show: false});
  }

  render() {
    let header;
    if (this.state.show) {
      header = <Child />;
    };
    return (
      <div className="App">
        <header className="App-header">
          {header}
          <button onClick={this.delete}>Delete Header</button>
        </header>
      </div>
    );
  }
}

export default App;