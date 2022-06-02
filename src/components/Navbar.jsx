import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Form,
  FormControl,
  Dropdown
} from "react-bootstrap";
import "../styles/Navbar.css";
import { URL } from '../components/URL';
import axios from "axios";

function NavbarComponent() {
  //const navigate = useNavigate();

  // const authToken = localStorage.getItem("token");

  // const clickRegister = () => {
  //   navigate("/register");
  // };

  // const clickLogin = () => {
  //   navigate("/Login");
  // };

  // const clickProfile = () => {
  //   navigate("/profile");
  // };

  // const clickChat = () => {
  //   navigate("/#");
  // };

  // const clickHistory = () => {
  //   navigate("/history");
  // };

  // const clickLogout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  const [city, setCity] = useState([]);
  const [cityDropdown, setCityDropdown] = useState('City');

  const [district, setDistrict] = useState([]);
  const [districtDropdown, setDistrictDropdown] = useState('District');

  useEffect(() => {
    axios
      .get(`${URL}/cities`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((data) => {
        setCity(data.data.data);
      })
      .catch((err) => {
        console.log(err, " => error dari cities");
      });
  }, []);

  const getDistricts = async (id) => {
    const response = await axios.get(`${URL}/cities/${id}/districts`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    response.data.data ? setDistrict(response.data.data) : setDistrict([]);
  }

  // DROPDOWN
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn border m-0"
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  // END DROPDOWN

  return (
    <>
      <Navbar>
        <Container >
          <Navbar.Brand href="#" className="text-primary"><b>Sewa Kost</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 w-100 gap-2 justify-content-center"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="d-flex gap-2">
                <Form.Control style={{ width: '300px' }} />

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" as={CustomToggle} className="w-100" >
                    <div className="d-flex justify-content-between dropdown-size">
                      {cityDropdown}
                      <span className="ms-5">&#x25bc;</span>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={CustomMenu}>
                    {city.sort((a, b) => a.city_name > b.city_name ? 1 : b.city_name > a.city_name ? -1 : 0).map((e, i) => (
                      <Dropdown.Item key={i} href="#" onClick={() => {
                        setCityDropdown(e.city_name);
                        getDistricts(e.id);
                      }} >
                        {e.city_name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown >
                  <Dropdown.Toggle id="dropdown-basic" as={CustomToggle} className="w-100" >
                    <div className="d-flex justify-content-between">
                      {districtDropdown}
                      <span className="ms-5">&#x25bc;</span>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={CustomMenu} >
                    {district.sort((a, b) => a.name > b.name ? 1 : b.name > a.ame ? -1 : 0).map((e, i) => (
                      <Dropdown.Item key={i} href="#" onClick={() => {
                        setDistrictDropdown(e.name);
                      }}>
                        {e.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Button>Search</Button>
              </div>
              <div className="d-flex justify-content-center gap-2 me-5">
                <Nav.Link href="#action1" className="text-primary">Login</Nav.Link>
                <Nav.Link href="#action2" className="text-primary">Register</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>

          {/* <div className="navbar-wrap">
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
      </div> */}
        </Container>
      </Navbar>
      <div className="w-100 navbar-block"></div>
    </>
  );
}

export default NavbarComponent;
