import React, { useState } from "react";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("token");

  const clickRegister = () => {
    navigate("/register");
  };

  const clickLogin = () => {
    navigate("/Login");
  };

  const clickProfile = () => {
    navigate("/profile");
  };

  const clickChat = () => {
    navigate("/#");
  };

  const clickHistory = () => {
    navigate("/history");
  };

  const clickLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar-body">
      <div className="navbar-wrap">
        <Navbar className="navbar" expand="lg">
          <Container className="navbar-container">
            <Navbar.Brand className="navbar-logo" href="#">
              Sewa Kost
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form id="navbar-form" className="d-flex">
                <div className="navbar-search d-flex">
                  <FormControl
                    id="navbar-formControl"
                    type="search"
                    className="me-3"
                    aria-label="Search"
                  />
                  <Button className="navbar-btn" size="l">
                    Search
                  </Button>
                </div>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {authToken ? (
                    <>
                      <Nav.Link className="navbar-title" onClick={clickProfile}>
                        Profile
                      </Nav.Link>
                      <Nav.Link className="navbar-title" onClick={clickChat}>
                        Chat
                      </Nav.Link>
                      <Nav.Link className="navbar-title" onClick={clickHistory}>
                        History
                      </Nav.Link>
                      <Nav.Link className="navbar-title" onClick={clickLogout}>
                        Logout
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link
                        className="navbar-title"
                        onClick={clickRegister}
                      >
                        Register
                      </Nav.Link>
                      <Nav.Link className="navbar-title" onClick={clickLogin}>
                        Login
                      </Nav.Link>{" "}
                    </>
                  )}
                </Nav>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="navbar-block"></div>
      </div>
    </div>
  );
}

export default NavbarComponent;
