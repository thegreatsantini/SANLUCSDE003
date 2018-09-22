import React, { Component } from 'react';

export default class Goodreads extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount = () => {
    console.log('Goodreads', this.props)
  }

  render() {
    return (
      <div className="App">
        <h1> Here's the good reads Component </h1>
      </div>
    );
  }
}