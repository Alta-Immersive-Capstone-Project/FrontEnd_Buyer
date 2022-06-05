import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../styles/order.css";
import { URL as url } from "../components/URL";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Order() {
  const bookingDetail = useSelector((state) => state.booking.booking);

  const [ordered, setOrdered] = useState(bookingDetail);

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
        console.log(setOrdered);
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
                      <p>{el.duration} Month</p>
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
