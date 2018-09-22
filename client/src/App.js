import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import { Link, withRouter } from "react-router-dom";
import Facebook from './Containers/Facebook';
import Goodreads from './Containers/Goodreads';
import Home from './Containers/Home';
import NotFound from './Components/NotFound'
import { Route, Switch } from "react-router-dom";


class App extends Component {
  constructor() {
    super()
    this.state = {
      response: "",
      fetching: true
    }
  }

  componentDidMount = () => {
    console.log('runing')
    fetch('http://localhost:8080/test').then(response => {
      response.json().then(data => {
        console.log(data)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expedia Take Home Challenge</h1>
        </header>
        <p className="App-intro">
        </p>
        <Routes />
      </div>
    );
  }
}

export default App;