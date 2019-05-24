import React, { Component } from 'react';
import classes from './Navbar.module.css';
import Aux from '../../hoc/AuxWrapper';
import { Link } from 'react-router-dom';

function isLoggedIn(result) {
  if (!result) {
    return (
      <Link className={classes.navBtn} to="/Login">
        Login
      </Link>
    );
  } else {
    return <p className={classes.greeting}>Welcome, Chris</p>;
  }
}

class Navbar extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.topnav}>
          <Link className={classes.navBtn} to="/">
            Home
          </Link>
          <Link className={classes.navBtn} to="/test">
            Test
          </Link>
          <header className={classes.title}>
            <p>Daugherty Skills Tracker!</p>
          </header>
          {isLoggedIn(false)}
        </div>
      </Aux>
    );
  }
}

export default Navbar;
