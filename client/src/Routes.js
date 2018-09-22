import React from 'react';
import { Route, Switch } from "react-router-dom";
// import AppliedRoute from './Components/AppliedRoute'
import Facebook from './Containers/Facebook';
import Goodreads from './Containers/Goodreads';
import Home from './Containers/Home';
import NotFound from './Components/NotFound'

export default ({}) => 
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/facebook' component={Facebook} />
            <Route path='/goodreads' component={Goodreads} />
            <Route component={NotFound} />
        </Switch>
    


