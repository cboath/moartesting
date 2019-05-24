import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login';

export default () =>
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
        </Switch>
    </BrowserRouter>
