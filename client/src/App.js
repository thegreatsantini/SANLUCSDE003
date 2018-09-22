import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import Nav from './Components/Nav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      response: "",
      fetching: true
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expedia Take Home Challenge</h1>
        </header>
        <p className="App-intro">
        <Nav />
        </p>
        <Routes />
      </div>
    );
  }
}

export default App;