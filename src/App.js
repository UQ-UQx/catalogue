import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const Notification = () => (
  <div>
    Something went wrong. - Please contact UQx/CDD learning tools team
    <a
      style={{
        paddingLeft: '5px',
      }}
      href="mailto:technical@uqx.uq.edu.au?Subject=CDD%20Catalogue%20Error"
      target="_top"
    >
<<<<<<< HEAD
      technical@uqx.uq.edu.au more info
=======
    technical@uqx.uq.edu.au more info
>>>>>>> f478193ecdce34fac4ccff158be9b16dcacf427b
    </a>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
    };
  }

  render() {
    const { error } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        {error ? <Notification /> : ''}
      </div>
    );
  }
}

export default App;
