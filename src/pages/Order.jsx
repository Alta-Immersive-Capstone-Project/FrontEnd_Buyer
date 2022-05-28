import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "../styles/order.css";

export default function Order() {
  return (
    <>
      <Container className="text-start py-3">
        <h3>Payment</h3>

        {/* card 1 */}
        <Card className="p-3">
          <div className="d-flex justify-content-start">
            <div>
              <h5>Id Booking : 100293742</h5>
              <h5>House Boarding Name : Puri Bunga Nirwana</h5>
            </div>
            <div className="ms-5">
              <h5>Kost Details</h5>
              <div className="d-flex">
                <div>
                  <p>Address</p>
                  <p>Date of Entry</p>
                  <p>Rental Duration</p>
                </div>
                <div className="ms-3">
                  <p>Jl. Bangau No.4b Tangerang Selatan</p>
                  <p>July 01 2022</p>
                  <p>1 Mounth</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* card 2 */}
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
        </Card>

        <div className="d-flex justify-content-end mt-3">
          <div>
            <h5>Total Payment : Rp.900.000</h5>
            <div className="d-grid gap-2 mt-3">
              <Button className="btnPay" type="submit">
                Pay
              </Button>
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button variant="outline-danger">Cancel</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
