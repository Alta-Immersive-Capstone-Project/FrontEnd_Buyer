import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../styles/order.css";
import { URL as url } from "../components/URL";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const [ordered, setOrdered] = useState([]);

  const navigate = useNavigate();

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

        setOrdered(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container className="text-start py-3">
        <h3>Payment</h3>

        {/* card 1
        <Card className="p-3 mt-3">
          <div className="d-flex justify-content-start">
            <div>
              <h5>User Details</h5>
              <div className="">
                <div className="d-flex">
                  <div>
                    <p>Name :</p>
                    <p>Phone Number :</p>
                    <h5>Payment Type</h5>
                  </div>
                  <div className="ms-4">
                    <p>Alberto Robert</p>
                    <p>08512345678</p>
                    <Form.Select aria-label="Default select example">
                      <option></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card> */}

        {/* card 2 */}
        {ordered.map((el, i) => (
          <div className="pt-3" style={{ cursor: "pointer" }} key={i}>
            <Card className="p-3">
              <div className="d-flex justify-content-start">
                <div>
                  <h5>Id Booking : {el.booking_id}</h5>
                  <h5>House Boarding Name : {el.title}</h5>
                </div>
                <div className="ms-5">
                  <h5>Details</h5>
                  <div className="d-flex">
                    <div>
                      <p>Date of Entry</p>
                      <p>Rental Duration</p>
                    </div>
                    <div className="ms-3">
                      <p>{el.check_in}</p>
                      <p>{el.duration} Mounth</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="d-flex justify-content-end mt-3">
              <div>
                <h5>Total Payment : Rp. {el.price}</h5>
                <div className="d-grid gap-2 mt-3">
                  <Button className="btnPay" href={el.redirect_url}>
                    Pay
                  </Button>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <Button
                    variant="outline-danger "
                    onClick={() => {
                      navigate(`/history`);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
