import React from 'react';
import {
    NavItem,
    Nav
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navStyle = {
    backgroundColor: '#222',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '1.6em',
    paddingTop: '5px',
}

const nav__item = {
    fontFamily: 'Lato, sans-serif',
    fontWeight: '700'
}


export default () => {

    return (
        <Nav style={navStyle}>
            <LinkContainer style={nav__item} to='/'>
                <NavItem >
                    Home
            </NavItem>
            </LinkContainer>
            <LinkContainer style={nav__item} to='/facebook'>
                <NavItem >
                    Facebook
            </NavItem>
            </LinkContainer>
            <LinkContainer style={nav__item} to='/goodreads'>
                <NavItem >
                    Goodreads
            </NavItem>
            </LinkContainer>
        </Nav>
    );
}
