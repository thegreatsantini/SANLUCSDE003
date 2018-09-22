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
        const data = await fetch(`http://localhost:8080/api/v1/facebook`)
        data.json().then( (posts)=> {
            this.setState({
                fetching: false,
                posts
            })
        })
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