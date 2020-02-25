import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  render () {
    return (
      <div className="App">
        <p>Hello</p>
        <UserOutput/>
        <UserInput/>
      </div>
    );
  }
}

export default App;
