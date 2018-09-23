import React, { Component } from 'react';
import LoadingScreen from '../Components/LoadingScreen'
import GoodreadQuotes from '../Components/GoodreadsQuotes'

export default class Goodreads extends Component {
  constructor() {
    super()
        this.state = {
            fetching: true,
            quotes: []
        }
    }

    componentDidMount = async () => {
        const data = await fetch(`http://localhost:8080/api/v1/goodreads`)
        data.json().then( (quotes)=> {
            this.setState({
                fetching: false,
                quotes
            })
        })
    }

    render() {
        return (
            <React.Fragment className="App">
                {
                this.state.fetching 
                    ? <LoadingScreen source='goodreads' item='quotes' />
                    : <GoodreadQuotes data={this.state.quotes} />
                }
            </React.Fragment>
        );
    }
}