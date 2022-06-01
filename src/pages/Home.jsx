import React, { useEffect, useState } from "react";
import {
  Container,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Card,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/Home.css";

import Star from "../images/Star.svg";
import Jakpus from "../images/Jakpus.svg";
import Jaktim from "../images/Jaktim.svg";
import Jakbar from "../images/Jakbar.svg";
import Jakut from "../images/Jakut.svg";
import Jaksel from "../images/Jaksel.svg";

// contoh image kos
import kost1 from "../images/kost1.svg";

function Home() {
  const [rooms, setRooms] = useState([]);
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      console.log(localStorage.getItem("token"));
      try {
        const { data: response } = await axios.get(
          "http://18.136.202.111:8000/houses/search",

          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setRooms(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // dropdown price
  useEffect(() => {
    console.log(sort);
  }, [sort]);

  const roomsToShow = () => {
    if (sort === "LOWEST") {
      return rooms.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sort === "HIGHEST") {
      return rooms.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      return rooms;
    }
  };

  return (
    <div>
      <Container className="py-5">
        <ButtonGroup className="mb-3">
          <DropdownButton
            as={ButtonGroup}
            title="Sort by"
            id="bg-nested-dropdown"
            variant="light"
          >
            <Dropdown.Item eventKey="1" onClick={() => setSort("LOWEST")}>
              lowest price
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => setSort("HIGHEST")}>
              highest price
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <div className="d-flex justify-content-start flex-wrap gap-3">
          {roomsToShow()?.map((el, i) => (
            <div key={i}>
              <Card className="mx-2" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={kost1}
                  onClick={() => {
                    navigate(`/detail/${el.house_id}`);
                  }}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Title>
                      <img src={Star} alt="" /> {el.rating}
                    </Card.Title>
                  </div>
                  <div className="d-flex justify-content-between gap-2">
                    <div>
                      {/* <Card.Text>{el.district}</Card.Text> */}
                      <Card.Text>{el.address}</Card.Text>
                      <Card.Text>Starting from Rp. {el.price} /month</Card.Text>
                    </div>
                    <div>
                      <Button className="border" variant="light">
                        {el.type}
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="py-4">
          <h3>Location</h3>

          <div className="d-flex flex-wrap">
            <Card className="text-white text-center m-2">
              <Card.Img
                className="img-location"
                src={Jakpus}
                alt="Card image"
              />
              <Card.ImgOverlay className="blur">
                <Card.Title className="mt-3">Jakarta Pusat</Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="text-white text-center m-2">
              <Card.Img
                className="img-location"
                src={Jaktim}
                alt="Card image"
              />
              <Card.ImgOverlay className="blur">
                <Card.Title className="mt-3">Jakarta Timur</Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="text-white text-center m-2">
              <Card.Img
                className="img-location"
                src={Jakbar}
                alt="Card image"
              />
              <Card.ImgOverlay className="blur">
                <Card.Title className="mt-3">Jakarta Barat</Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="text-white text-center m-2">
              <Card.Img className="img-location" src={Jakut} alt="Card image" />
              <Card.ImgOverlay className="blur">
                <Card.Title className="mt-3">Jakarta Utara</Card.Title>
              </Card.ImgOverlay>
            </Card>

            <Card className="text-white text-center m-2">
              <Card.Img
                className="img-location"
                src={Jaksel}
                alt="Card image"
              />
              <Card.ImgOverlay className="blur">
                <Card.Title className="mt-3">Jakarta Selatan</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
