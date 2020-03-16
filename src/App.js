import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Sylvie'
  };

  usernameChangeHandler = (event) => {
      this.setState({username: event.target.value})
  };

  render () {
    return (
      <div className="App">
        <UserInput
            changed={this.usernameChangeHandler}
            currentName={this.state.username}
        />
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  };
}

export default App;
