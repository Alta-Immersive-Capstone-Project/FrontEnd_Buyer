import React, { useState, useEffect } from "react";
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
  const [city, setCity] = useState();
  const [allroom, setAllroom] = useState([]);
  const [description, setDescription] = useState();

  const [dataReview, setReview] = useState({});

  const navigate = useNavigate();

  // dami berfungsi untuk menyimpan data room id
  const [dami, setDami] = useState(0);
  const [room, setRoom] = useState(allroom[0]);

  // const valueRoom = useMemo(() => {
  //   return allroom[dami] || {};
  // }, [allroom, dami]);

  const params = useParams();

  const average = () => {
    const meta = {
      five: 5,
      four: 4,
      three: 3,
      two: 2,
      one: 1,
    };

    if (dataReview.bintang) {
      return Object.entries(dataReview.bintang).reduce(
        (prev, [key, tot]) => prev + meta[key] * tot,
        0
      );
    }
    return 0;
  };

  useEffect(() => {
    axios
      .get(`http://18.136.202.111:8000/houses/${params.id}`)
      .then((data) => {
        setNamakost(data?.data?.data?.title);
        setAddress(data.data.data.address);
        setType(data.data.data.type);
        setAvailable(data.data.data.available);
        setCity(data.data.data.city_name);
        setDescription(data.data.data.brief);
        setAllroom(data.data.data.Rooms);
        setRoom(data.data.data.Rooms[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://18.136.202.111:8000/houses/${params.id}/reviews`)
      .then((data) => {
        setReview({
          data: data?.data?.data,
          bintang: data?.data?.rating,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  const roomValue = (e) => {
    const value = e.target.value;
    // menambahkan data setiap room di dalam setRoom
    setRoom(allroom[parseInt(value.substr(value.length - 1)) - 1]);
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
    localStorage.setItem("price", room.price);

    navigate("/history");
  };
  return (
    <>
      <Container className="py-5">
        <Card className="d-flex px-5">
          <Card.Img
            className="img-fluid"
            variant="top"
            src={room?.Images[0]?.url}
          />
          {/* baris 1 */}
          <div className="mt-4">
            <div className="container">
              <Row>
                <Col xs={4}>
                  <div>
                    <h4>{namakost}</h4>
                    <h6>{address}</h6>
                    <h6>{city}</h6>
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
              <p> Room Area {room?.type}</p>
            </div>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Select
                  aria-label="Default select example"
                  className="mb-2"
                  onChange={roomValue}
                  value={dami}
                >
                  {allroom.map((el, i) => (
                    <option key={i}>Room {el.id}</option>
                  ))}
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
                    <p>Rp. {room?.price}</p>
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
            <Row>
              <Col xs={4}>
                <h4>Description</h4>
                <p style={{ textAlign: "justify" }}>{description}</p>
              </Col>
              <Col xs={4} className="d-flex justify-content-end">
                <div>
                  <h4>Contact Us</h4>
                </div>
              </Col>
            </Row>
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
                  <h1>{average()}</h1>
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
                  <ProgressBar
                    variant="success"
                    now={dataReview?.bintang?.five * 20}
                  />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={dataReview?.bintang?.four * 20}
                  />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={dataReview?.bintang?.three * 20}
                  />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={dataReview?.bintang?.two * 20}
                  />
                  <br />
                  <ProgressBar
                    variant="success"
                    now={dataReview?.bintang?.one * 20}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <h4>{dataReview.data?.[0]?.name}</h4>
                  <p>1 month ago</p>
                  <p>{dataReview.data?.[0]?.comment}</p>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
