import React, { useEffect, useState } from "react";
import user from "../images/user.png";
import kost from "../images/kost1.svg";
import { Dropdown, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL as url } from "../components/URL";

function History() {
  const [histories, setHistories] = useState([]);

  const navigate = useNavigate();

  const params = useParams();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${url}/transactions`,

          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        setHistories(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params]);

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
                {histories.map((el, i) => (
                  <div style={{ cursor: "pointer" }} key={i}>
                    <Dropdown.Item onClick={() => histories(el.booking_id)}>
                      {el.transaction_status}
                    </Dropdown.Item>
                  </div>
                ))}
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
          {histories.map((el, i) => (
            <div
              style={{ cursor: "pointer" }}
              key={i}
              onClick={() => {
                navigate(`/order/${el.booking_id}`);
              }}
            >
              <div className="mt-3 d-flex">
                <img src={kost} alt="" className="rounded" />
                <div className="w-100 px-3">
                  <div className="d-flex justify-content-between">
                    <h5>ID Booking</h5>
                    <h5>{el.booking_id}</h5>
                  </div>
                  <h4>{el.title}</h4>
                  <div className="d-flex justify-content-between">
                    <h6>Date Entry</h6>
                    <h6>{el.check_in}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Duration</h6>
                    <h6>{el.duration} Month</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Rp. {el.price}</h5>
                    <h5>{el.transaction_status}</h5>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
