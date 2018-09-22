import React, { Component } from 'react';

export default class Facebook extends Component {
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
                <h1> Here's the Facebook Component </h1>
            </div>
        );
    }
}