import React, { useState, useEffect, useMemo } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";

import "../styles/detail.css";

import kost1 from "../images/kost1.svg";
import Star from "../images/Star.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const [namakost, setNamakost] = useState();
  const [address, setAddress] = useState();
  const [type, setType] = useState();
  const [available, setAvailable] = useState();
  const [date, setDate] = useState();
  const [period, setPeriod] = useState();

  const navigate = useNavigate();

  const [dummy, setDummy] = useState([
    {
      room_id: 1,
      ukuran: "3x3",
      aminities: {
        bathroom: "yes",
        Listrik: "yes",
        wifi: "yes",
        kasur: "yes",
        Kamar_mandi: "yes",
      },
    },
    {
      room_id: 2,
      ukuran: "3x3",
      price: 900000,
      aminities: {
        bathroom: "yes",
        Listrik: "yes",
        wifi: "yes",
        kasur: "yes",
        Kamar_mandi: "yes",
      },
    },
  ]);
  const [dami, setDami] = useState("0");
  const valueDummy = useMemo(() => {
    return dummy[dami];
  }, [dummy, dami]);

  console.log(valueDummy);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://18.136.202.111:8000/houses/${params.id}`)
      .then((data) => {
        setNamakost(data.data.data.title);
        setAddress(data.data.data.address);
        setType(data.data.data.type);
        setAvailable(data.data.data.available);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const roomValue = (e) => {
    const value = e.target.value;
    setDami(value);
  };

  const changeDate = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  const changePeriod = (e) => {
    const value = e.target.value;
    setPeriod(value);
  };

  const clickAsk = () => {
    localStorage.setItem("date", date);
    localStorage.setItem("period", period);
  };

  return (
    <>
      <Container className="py-5">
        <Card className="d-flex px-5">
          <Card.Img className="img-fluid" variant="top" src={kost1} />
          {/* baris 1 */}
          <div className="mt-4">
            <div className="container">
              <Row>
                <Col xs={4}>
                  <div>
                    <h4>{namakost}</h4>
                    <h6>{address}</h6>
                    <h6>City</h6>
                  </div>
                </Col>
                <Col xs={8}>
                  <h4>{type}</h4>
                  <h6>{available} rooms available</h6>
                </Col>
              </Row>
            </div>
          </div>

          {/* baris 2 */}
          <div className="d-flex justify-content-between py-3">
            <div>
              <h4>Facilities</h4>
              <p>
                {Object.entries(valueDummy.aminities)
                  .filter(([_, value]) => value === "yes")
                  .map(([key]) => (
                    <p> {key} </p>
                  ))}
              </p>
            </div>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Select
                  aria-label="Default select example"
                  className="mb-2"
                  onChange={roomValue}
                  value={dami}
                >
                  {dummy.map((el, i) => {
                    return (
                      <option value={i} key={i}>
                        room {el.room_id}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Control
                  type="date"
                  placeholder="date"
                  onChange={changeDate}
                  value={date}
                />
                <div className="d-flex mt-2">
                  <Form.Control
                    className="rentPeriod me-3"
                    type="text"
                    placeholder="Rent Period"
                    onChange={changePeriod}
                    value={period}
                  />
                  <div>
                    <p>Start From</p>
                    <p>Rp. 900.000</p>
                  </div>
                </div>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className="btnOffering" onClick={clickAsk}>
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
          <div className="text-start">
            <h4>Review</h4>
            <div>
              <Row>
                <Col className="text-center py-5" xs={3} md={2}>
                  <h1>4.9</h1>
                </Col>
                <Col className="text-end" xs={3} md={2}>
                  <div className="d-flex justify-content-end">
                    <img className="imgStar" src={Star} alt="star" />
                    <h4 className="ms-2">5</h4>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img className="imgStar" src={Star} alt="star" />
                    <h4 className="ms-2">4</h4>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img className="imgStar" src={Star} alt="star" />
                    <h4 className="ms-2">3</h4>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img className="imgStar" src={Star} alt="star" />
                    <h4 className="ms-2">2</h4>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img className="imgStar" src={Star} alt="star" />
                    <h4 className="ms-2">1</h4>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <ProgressBar variant="success" now={98} />
                  <br />
                  <ProgressBar variant="success" now={95} />
                  <br />
                  <ProgressBar variant="success" now={10} />
                  <br />
                  <ProgressBar variant="success" now={5} />
                  <br />
                  <ProgressBar variant="success" now={3} />
                </Col>
                <Col xs={6} md={4}>
                  <h4>Anonim</h4>
                  <p>1 mount ago</p>
                  <p>
                    Tempatnya bagus, lokasinya dekat dengan apapun. Penjaganya
                    ramah. boleh bawa teman menginap.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
