import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../styles/order.css";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import moment from "moment";

export default function Order() {
  const navigate = useNavigate();

  const bookingDetail = useSelector(state => state.booking.booking);

  useEffect(() => {
    if (bookingDetail.length === 0) {
      navigate('/history')
    }
  }, [bookingDetail, navigate])

  const makeRupiah = (input) => {
    if (!input) {
      return '';
    } else {
      let txt = input.toString().split("");
      let temp = 1;
      for (let i = txt.length - 1; i > 0; i--) {
        if (temp % 3 === 0) {
          txt.splice(i, 0, ".");
        }
        temp++;
      }
      return txt.join("");
    }
  };

  return (
    <>
      <Container className="text-start py-3">
        <h3>Payment</h3>

        <div className="pt-3">
          <Card className="p-3">
            <div className="d-flex justify-content-around">
              <div>
                <h6>ID Booking</h6>
                <h5><strong>{bookingDetail.booking_id}</strong></h5>

              </div>
              <div className="ms-5">
                <h5>Details</h5>
                <div className="d-flex">
                  <div>
                    <p>Boarding House</p>
                    <p>Date of Entry</p>
                    <p>Rental Duration</p>
                  </div>
                  <div className="ms-3">
                    <p>{bookingDetail.title}</p>
                    <p>
                      {moment(bookingDetail.check_in).format("dddd")}, {moment(bookingDetail.check_in).format("LL")}
                    </p>
                    <p>{bookingDetail.duration} Month</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>


          <div className="d-flex justify-content-end mt-3">
            <div>
              <h5>Total Payment : Rp. {makeRupiah(bookingDetail.price)}</h5>
              <div className="d-grid gap-2 mt-3">
                <Button className="btn btn-primary" href={bookingDetail.redirect_url} >
                  Pay
                </Button>
              </div>
              <div className="d-grid gap-2 mt-3">
                <Button
                  variant="outline-danger"
                  onClick={() => navigate('/history')}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
