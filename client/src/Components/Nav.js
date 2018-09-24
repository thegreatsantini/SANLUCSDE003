import React from 'react';
import {
    NavItem,
    Nav
} from 'react-bootstrap';
import {
    Link,
    NavLink,
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
// import './Nav.css'

const navStyle = {
    backgroundColor: '#222',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '1.6em'
}

export default () => {

    return (
        <Nav style={navStyle}>
            <LinkContainer to='/'>
                <NavItem >
                    Home
            </NavItem>
            </LinkContainer>
            <LinkContainer to='/facebook'>
                <NavItem >
                    facebook
            </NavItem>
            </LinkContainer>
            <LinkContainer to='/goodreads'>
                <NavItem >
                    goodreads
            </NavItem>
            </LinkContainer>
        </Nav>
    );
}
