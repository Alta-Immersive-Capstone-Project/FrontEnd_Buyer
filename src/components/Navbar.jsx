import React from "react";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import "../styles/Navbar.css";

function NavbarComponent() {
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
                  <Nav.Link className="navbar-title" href="#action1">
                    Profile
                  </Nav.Link>
                  <Nav.Link className="navbar-title" href="#action2">
                    Chat
                  </Nav.Link>
                  <Nav.Link className="navbar-title" href="#">
                    History
                  </Nav.Link>
                  <Nav.Link className="navbar-title active" href="#">
                    Logout
                  </Nav.Link>
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
