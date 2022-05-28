import React from "react";
import { Card, Container, Form, Button, ProgressBar } from "react-bootstrap";
import "./Detail.css";

import kost1 from "../../images/kost1.svg";
// import Star from "../../images/Star.svg";

export default function Detail() {
  return (
    <>
      <Container className="py-5">
        <Card className="d-flex px-5">
          <Card.Img className="img-fluid" variant="top" src={kost1} />
          {/* baris 1 */}
          <div className="d-flex  justify-content-between py-3">
            <h4>Puri Bunga Nirwana</h4>
            <div>
              <h4>Male/Female</h4>
              <p>2 Rooms Available</p>
            </div>
            <div></div>
          </div>

          {/* baris 2 */}
          <div className="d-flex justify-content-between py-3">
            <div>
              <h4>Facilities</h4>
              <p>Termasuk Listrik</p>
              <p>Luas Kamar 3x3</p>
              <p>Kamar Mandi Dalam</p>
              <p>Wifi</p>
              <p>Kasur</p>
              <p>Alamari</p>
            </div>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="date" placeholder="date" />
                <div className="d-flex mt-2">
                  <Form.Control
                    className="rentPeriod me-3"
                    type="text"
                    placeholder="Rent Period"
                  />
                  <div>
                    <p>Start From</p>
                    <p>Rp. 900.000</p>
                  </div>
                </div>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className="btnOffering" type="submit">
                  Ask for Offer
                </Button>
              </div>
            </Form>
          </div>

          {/* baris 3 */}
          <div className="d-flex justify-content-between">
            <div>
              <h4>House Bording Rules</h4>
              <p>Akses 24 Jam</p>
              <p>Tamu Dilarang Menginap</p>
            </div>
            <div>
              <h4>Contact Us</h4>
            </div>
          </div>

          {/* baris 4 */}
          <div className="d-flex justify-content-between  py-3">
            <div>
              <h4>Location</h4>
            </div>
            <div>
              <h4>Nearby Facilites</h4>
              <p>Mall</p>
              <p>Jalan Tol</p>
              <p>Rumah Sakit</p>
            </div>
          </div>

          {/* baris 5 */}
          <div>
            <h4>Review</h4>
            <h1>4.9</h1>
            <div>
              <div>
                <ProgressBar variant="success" now={98} />
                <br />
                <ProgressBar variant="success" now={95} />
                <br />
                <ProgressBar variant="success" now={20} />
                <br />
                <ProgressBar variant="success" now={10} />
                <br />
                <ProgressBar variant="success" now={5} />
              </div>
              <div className="py-3">
                <h4>Anonim</h4>
                <p>1 mount ago</p>
                <p>
                  Tempatnya bagus, lokasinya dekat dengan apapun. Penjaganya
                  ramah. boleh bawa teman menginap.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
