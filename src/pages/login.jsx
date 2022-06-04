import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { URL } from "../components/URL";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const body = {
      email,
      password,
    };

    axios
      .post(`${URL}/login`, body)
      .then((data) => {
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("userId", data.data.data.user_id);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="login-body">
        <div className="login-border">
          <div className="login-wrap">
            <div className="login-title">
              <h2>Login</h2>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password!"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <div className="login-forgot">
                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/reset")}
                >
                  Forgot Password?
                </p>
              </div>

              <Button
                className="login-button"
                size="l"
                onClick={() => handleSubmit()}
              >
                Login
              </Button>

              <div className="login-register">
                <p>Don't have an account?</p>
                <span
                  className="login-regis cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  {" "}
                  Register
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
