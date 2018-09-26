import React, { Component } from 'react';
import LoadingScreen from '../Components/LoadingScreen'
import FacebookPosts from '../Components/FacebookPosts'

export default class Facebook extends Component {
    constructor() {
        super()
        this.state = {
            fetching: true,
            posts: []
        }
    }

    componentDidMount = async () => {
        this.fetchPosts()
    }

    fetchPosts = async () => {
        const date = new Date();
        const lastSearch = localStorage.getItem('lastSearch')
        if (localStorage.hasOwnProperty('posts') && lastSearch >= date.getHours()) {
            const data = JSON.parse(localStorage.getItem('posts'))
            this.setState({
                fetching: false,
                posts: data
            })
        }
        else {
            const data = await fetch(`http://localhost:8080/api/v1/facebook`)
            data.json().then((posts) => {
                this.setState({
                    fetching: false,
                    posts
                })
                localStorage.setItem('posts', JSON.stringify(posts));
                localStorage.setItem('lastSearch', date.getHours());
            })
        }
    }

    render() {
        return (
            <React.Fragment className="App">
                {
                    this.state.fetching
                        ? <LoadingScreen source='facebook' item='posts' />
                        : <FacebookPosts data={this.state.posts} />
                }
            </React.Fragment>
        );
    }
}