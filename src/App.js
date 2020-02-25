import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      {name: 'Sylvie'},
      {name: 'Xavier'},
      {name: 'Yannick'},
      {name: 'Maman'},
      {name: 'Papa'}
    ],
  };

  changeNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName},
        {name: 'Xavier'},
        {name: 'Yannick'},
        {name: 'Maman'},
        {name: 'Papa'}
      ],}
    );
  };

  render () {
    return (
      <div className="App">
        <p>Hello</p>
        <UserOutput name={this.state.persons[0].name}/>
        <UserOutput name={this.state.persons[1].name}/>
        <UserOutput name={this.state.persons[2].name}/>
        <UserOutput name={this.state.persons[3].name}/>
        <UserOutput name={this.state.persons[4].name}/>
        <UserInput/>
      </div>
    );
  };
}

export default App;
