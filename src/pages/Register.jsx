import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/register.css";

function Register() {
  return (
    <div className="container">
      <div className="register-body">
        <div className="register-border">
          <div className="register-wrap">
            <div className="register-title">
              <h2>Register</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <div class="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Select aria-label="Default select example">
                    <option class="label-gender">Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password!" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email!" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="number"
                  placeholder="Enter Your Phone Number!"
                />
              </Form.Group>

              <Button className="register-button" size="l">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
