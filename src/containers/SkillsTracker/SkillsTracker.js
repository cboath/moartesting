import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Test from '../Test/Test';

class SkillsTracker extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/test" component={Test} />
        </Switch>
      </main>
    );
  }
}

export default SkillsTracker;
