import React from "react";
import { Form, Button, Link } from "react-bootstrap";
import "../styles/reset.css";

function Reset() {
  return (
    <div className="container">
      <div className="reset-body">
        <div className="reset-border">
          <div className="reset-wrap">
            <div className="reset-title">
              <h2>Reset Password</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password!" />
              </Form.Group>

              <Button className="reset-button" size="l">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
