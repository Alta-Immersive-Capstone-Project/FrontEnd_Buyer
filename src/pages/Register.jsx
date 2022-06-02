import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../styles/register.css";

function Register() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState('');

  // const [confirmPassword, setConfirmPassword] = useState('');
  const [genderDisable, setGenderDisable] = useState(false);

  const handleSubmit = () => {
    const body = {
      name,
      gender,
      password,
      email,
      phone
    }

    axios.post(`${URL}/customer`, body)
      .then(data => {
        setMessage(data.data.message);
      })
      .catch(err => {
        console.log(err, ' ==> error register');
      })
  }

  return (
    <div className="container">
      <div className="register-body">
        <div className="register-border">
          <div className="register-wrap">
            {message && <Alert variant='success' onClose={() => setMessage(null)} dismissible>{message}</Alert>}
            <div className="register-title">
              <h2>Register</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e) => {
                  setName(e.target.value);
                }} />
              </Form.Group>

              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Select aria-label="Default select example" value={gender} onChange={(e) => {
                    setGender(e.target.value);
                    setGenderDisable(true);
                  }}>
                    <option className="label-gender" disabled={genderDisable}>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password!" value={password} onChange={(e) => {
                  setPassword(e.target.value);
                }} />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Password!" value={confirmPassword} onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }} />
              </Form.Group> */}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email!" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="number"
                  placeholder="Enter Your Phone Number!" value={phone} onChange={(e) => {
                    setPhone(e.target.value.toString());
                  }}
                />
              </Form.Group>

              <Button className="register-button" size="l" onClick={() => handleSubmit()}>
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
