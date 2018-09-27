import React, { Component } from 'react';
import LoadingScreen from '../Components/LoadingScreen'
import GoodreadQuotes from '../Components/GoodreadsQuotes'
import { Button } from 'react-bootstrap';

    const buttonStyle = {
        marginTop: '20px'
    }

const SERVER_URL = 'http://localhost:8080'

export default class Goodreads extends Component {
    constructor() {
        super()
        this.state = {
            fetching: true,
            quotes: [],
            loggedIn: false
        }
    }

    componentDidMount = async () => {
        this.checkUser()
    }

    checkUser = () => {
        // check localStorage for user
        const inLocalStorage = localStorage.hasOwnProperty('loggedIn')

        // check href if user just logged in
        const authorized = window.location.href

        // if the user just logged in set to localStorage and setState to true
        if (authorized[authorized.length - 1] === '1') {
            this.setState({
                loggedIn: true
            })
            localStorage.setItem('loggedIn', true)
            this.fetchQoutes()
        }
        // check localStorage for authorized user. if true set logged in state to true 
        else if (inLocalStorage) {
            this.setState({
                loggedIn: true
            })
            this.fetchQoutes()
        }
    }


    fetchQoutes = async () => {
        const date = new Date();
        const lastSearch = localStorage.getItem('lastSearch')
        if (localStorage.hasOwnProperty('quotes') && lastSearch >= date.getHours()) {
            const data = JSON.parse(localStorage.getItem('quotes'))
            this.setState({
                fetching: false,
                quotes: data,
            })
        }
        else {
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
        if (!this.state.loggedIn) {
            return (
                <div className='App' >
                    <Button
                        style={buttonStyle}
                        bsStyle='info'
                        href={SERVER_URL + '/auth/login'}>Login with Goodreads</Button>
                </div>
            )
        } else {
            return (
                <div
                    bsStyle='primary'
                    className="App">
                    {
                        this.state.fetching
                            ? <LoadingScreen source='goodreads' item='quotes' />
                            : <GoodreadQuotes data={this.state.quotes} />
                    }
                </div>
            )
        }
    }
}