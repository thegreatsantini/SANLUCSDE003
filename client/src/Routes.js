import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Facebook from './Containers/Facebook';
import Goodreads from './Containers/Goodreads';
import NotFound from './Components/NotFound'

export default () => 
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/facebook' component={Facebook} />
            <Route path='/goodreads' component={Goodreads} />
            <Route component={NotFound} />
        </Switch>
    


