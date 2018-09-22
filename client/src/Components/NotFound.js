import React, { Component } from 'react';

export default class NotFound extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Not Found', this.props)
    }

    render() {
        return (
            <div className="App">
                <h1> Here's the NotFound Component </h1>
            </div>
        );
    }
}