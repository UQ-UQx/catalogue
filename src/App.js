import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export const Notification = (err) => {
  return "Something went wrong. - Please contact UQx/CDD learning tools team"
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      error:false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.error ? <Notification /> : ''}
      </div>
    );
  }
}

export default App;
