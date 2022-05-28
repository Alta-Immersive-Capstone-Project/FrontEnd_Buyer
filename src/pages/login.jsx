import React from "react";
import { Form, Button, Link } from "react-bootstrap";
import "../styles/login.css";

function login() {
  return (
    <div className="container">
      <div className="login-body">
        <div className="login-border">
          <div className="login-wrap">
            <div className="login-title">
              <h2>Logo</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password!" />
              </Form.Group>

              <div className="login-forgot">
                <p>Forgot Password?</p>
              </div>

              <Button className="login-button" size="l">
                Login
              </Button>

              <div className="login-register">
                <p>Don't have an account?</p>
                <span className="login-regis"> Register</span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
