import React from 'react';
import {
    Navbar,
    NavItem,
    Nav
} from 'react-bootstrap';
import {
    Link,
    NavLink,
} from 'react-router-dom';

const navStyle = {
    backgroundColor: '#222',
    border: 'none',
}

export default () => {
    return (
        <Navbar style={navStyle}>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to='/'>
                        Expedia Challenge
                    </NavLink>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    <NavLink to='/facebook'>
                        Facebook
                    </NavLink>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to='/goodreads' >
                        Goodreads
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
