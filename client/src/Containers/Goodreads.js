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

    componentDidMount = async () => {
        // const data = fetch(`${SERVER_URL}/auth/user`)
        this.fetchQoutes()
    }


    fetchQoutes = async () => {
        const date = new Date();
        const lastSearch = localStorage.getItem('lastSearch')
        if (localStorage.hasOwnProperty('quotes') && lastSearch >= date.getHours()) {
            const data = JSON.parse(localStorage.getItem('quotes'))
            console.log(data)
            this.setState({
                fetching: false,
                quotes: data
            })
        } 
        else {
            console.log('fetching')
            const data = await fetch(`http://localhost:8080/api/v1/goodreads`)
            data.json().then((quotes) => {
                this.setState({
                    fetching: false,
                    quotes
                })
                console.log(quotes)
                localStorage.setItem('quotes', JSON.stringify(quotes));
                localStorage.setItem('lastSearch', date.getHours());
            })
        }
    }

    render() {
        return (
            <React.Fragment className="App">
                {/* <Button href={ SERVER_URL + '/auth/login' }>Link</Button> */} 
                {
                    this.state.fetching
                        ? <LoadingScreen source='goodreads' item='quotes' />
                        : <GoodreadQuotes data={this.state.quotes} />
                } 
            </React.Fragment>
        );
    }
}