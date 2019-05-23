import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import classes from './Login.module.css';

class Login extends Component {
  render() {
    return (
      <div className={classes.loginContainer}>
        <Form className={classes.entry}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>Email:</Form.Label>
            <Form.Control
              className={classes.userid}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password:</Form.Label>
            <Form.Control
              className={classes.userid}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
