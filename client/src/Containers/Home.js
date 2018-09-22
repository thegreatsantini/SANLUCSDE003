import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Facebook', this.props)
    }

    render() {
        return (
            <div className="App">
                <h1> Here's the Home Component </h1>
            </div>
        );
    }
}