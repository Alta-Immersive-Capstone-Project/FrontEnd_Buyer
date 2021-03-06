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
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../styles/detail.css";

import Star from "../images/Star.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { URL } from '../components/URL'

export default function Detail() {
  const [namakost, setNamakost] = useState();
  const [address, setAddress] = useState();
  const [type, setType] = useState();
  const [available, setAvailable] = useState();
  const [date, setDate] = useState();
  const [period, setPeriod] = useState("");
  const [city, setCity] = useState();
  const [allroom, setAllroom] = useState([]);
  const [description, setDescription] = useState();

  const [price, setPrice] = useState();

  const [dataReview, setReview] = useState({});

  const navigate = useNavigate();

  // dami berfungsi untuk menyimpan data room id
  const [dami, setDami] = useState(0);
  const [room, setRoom] = useState(allroom[0]);

  // const valueRoom = useMemo(() => {
  //   return allroom[dami] || {};
  // }, [allroom, dami]);

  console.log("data room", room);
  console.log("dami", dami);

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
    document.title = namakost ? `${namakost} | Sewa Kost` : 'Sewa Kost';
    axios
      .get(`${URL}/houses/${params.id}`)
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
      .get(`${URL}/houses/${params.id}/reviews`)
      .then((data) => {
        setReview({
          data: data?.data?.data,
          bintang: data?.data?.rating,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, namakost]);

  const roomValue = (e) => {
    const value = e.target.value;
    // menambahkan data setiap room di dalam setRoom
    setRoom(allroom[value]);
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

  const changePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const clickAsk = () => {
    const body = {
      room_id: room?.id,
      house_id: parseInt(params.id),
      price: room?.price,
      check_in: new Date(date).getTime(),
      duration: parseInt(period),
    };

    axios
      .post(`${URL}/transactions`, body, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((data) => {
        navigate("/history");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const center = {
    lat: -6.905977,
    lng: 107.613144,
  };

  return (
    <>
      <Container className="py-5">
        <Card className="d-flex px-5">
          <div className="overflow-hidden d-flex justify-content-center">
            <Card.Img
              className="img-fluid"
              variant="top"
              src={room?.Images[0]?.url}
              style={{ width: "800px", height: "400px" }}
            />
          </div>
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
                    <option value={i} key={i}>
                      Room {el.id}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control
                  type="date"
                  placeholder="date"
                  onChange={changeDate}
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
                    <p onChange={changePrice} value={price}>
                      {" "}
                      Rp. {room?.price}
                    </p>
                  </div>
                </div>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className="btnOffering" onClick={() => {
                  localStorage.getItem('token') ? clickAsk() : navigate('/login');
                }}>
                  Ask for Offer
                </Button>
              </div>
            </Form>
          </div>

          {/* baris 3 */}
          <div className="d-flex justify-content-between">
            <Row>
              <Col>
                <h4>Description</h4>
                <p style={{ textAlign: "justify" }}>{description}</p>
              </Col>
              {/* <Col xs={4} className="d-flex justify-content-end">
                <div>
                  <h4>Contact Us</h4>
                </div>
              </Col> */}
            </Row>
          </div>

          {/* baris 4 */}
          <div className="d-flex justify-content-between  py-3">
            <div>
              <h4>Location</h4>
              <MapContainer center={center} zoom={13} scrollWheelZoom={true} zoomControl={false} attributionControl={false} className="map-detail">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>

                </Marker>
              </MapContainer>
            </div>
            {/* <div>
              <h4>Nearby Facilites</h4>
              <p>Mall</p>
              <p>Jalan Tol</p>
              <p>Rumah Sakit</p>
            </div> */}
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
