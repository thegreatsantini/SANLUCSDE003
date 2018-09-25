import React, { Component } from 'react';
import LoadingScreen from '../Components/LoadingScreen'
import GoodreadQuotes from '../Components/GoodreadsQuotes'
import { Button } from 'react-bootstrap';

const SERVER_URL = 'http://localhost:8080'

export default class Goodreads extends Component {
  constructor() {
    super()
        this.state = {
            fetching: true,
            quotes: []
        }
    }

    componentDidMount = async() => {
        // const data = fetch(`${SERVER_URL}/auth/user`)
       this.fetchQoutes()
    }
    

    fetchQoutes = async () => {
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
                {/* <Button href={ SERVER_URL + '/auth/login' }>Link</Button>   */}
                {
                this.state.fetching 
                    ? <LoadingScreen source='goodreads' item='quotes' />
                    : <GoodreadQuotes data={this.state.quotes} />
                }
            </React.Fragment>
        );
    }
}