import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => {
        return (
                <ButtonToolbar>
                    <Button href="#">
                        <Link to='/facebook'>
                            Facebook posts
                        </Link>
                    </Button>
                    <Button>
                        <Link to='/goodreads'>
                            Goodreads
                        </Link>
                    </Button>
                </ButtonToolbar>
        );
    }
