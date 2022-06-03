import React, { useState } from "react";
import user from "../images/user.png";
import kost from "../images/kost1.svg";
import { Dropdown, FormControl } from "react-bootstrap";

function History() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      href="/#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn border"
    >
      {children}
    </div>
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 border-end">
          <img src={user} alt="User" className="mt-5 w-50" />
          <div className="mt-3">
            <h4>Profile</h4>
            <h4>Booking History</h4>
          </div>
        </div>

        <div className="col-8">
          <div className="d-flex gap-3 mt-3">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                Status
                <span className="ms-5">&#x25bc;</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Paid Off</Dropdown.Item>
                <Dropdown.Item href="#">Pending</Dropdown.Item>
                <Dropdown.Item href="#">Process</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                City
                <span className="ms-5">&#x25bc;</span>
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item href="#">Bandung</Dropdown.Item>
                <Dropdown.Item href="#">Jakarta</Dropdown.Item>
                <Dropdown.Item href="#">Yogyakarta</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                District
                <span className="ms-5">&#x25bc;</span>
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item href="#">Lengkong</Dropdown.Item>
                <Dropdown.Item href="#">Antapani</Dropdown.Item>
                <Dropdown.Item href="#">Buah Batu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mt-3 d-flex">
            <img src={kost} alt="" className="rounded" />
            <div className="w-100 px-3">
              <div className="d-flex justify-content-between">
                <h5>ID Booking</h5>
                <h5>LALA0076234</h5>
              </div>
              <h4>Bunga Nirwana</h4>
              <div className="d-flex justify-content-between">
                <h6>Date Entry</h6>
                <h6>Augt 24 2022</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Duration</h6>
                <h6>1 Month</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Rp900.000</h5>
                <h5>Process</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-3 d-flex">
            <img src={kost} alt="" className="rounded" />
            <div className="w-100 px-3">
              <div className="d-flex justify-content-between">
                <h5>ID Booking</h5>
                <h5>LALA0076234</h5>
              </div>
              <h4>Bunga Nirwana</h4>
              <div className="d-flex justify-content-between">
                <h6>Date Entry</h6>
                <h6>Augt 24 2022</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Duration</h6>
                <h6>1 Month</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Rp900.000</h5>
                <h5>Process</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-3 d-flex">
            <img src={kost} alt="" className="rounded" />
            <div className="w-100 px-3">
              <div className="d-flex justify-content-between">
                <h5>ID Booking</h5>
                <h5>LALA0076234</h5>
              </div>
              <h4>Bunga Nirwana</h4>
              <div className="d-flex justify-content-between">
                <h6>Date Entry</h6>
                <h6>Augt 24 2022</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Duration</h6>
                <h6>1 Month</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Rp900.000</h5>
                <h5>Process</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-3 d-flex">
            <img src={kost} alt="" className="rounded" />
            <div className="w-100 px-3">
              <div className="d-flex justify-content-between">
                <h5>ID Booking</h5>
                <h5>LALA0076234</h5>
              </div>
              <h4>Bunga Nirwana</h4>
              <div className="d-flex justify-content-between">
                <h6>Date Entry</h6>
                <h6>Augt 24 2022</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Duration</h6>
                <h6>1 Month</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Rp900.000</h5>
                <h5>Process</h5>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default History;
