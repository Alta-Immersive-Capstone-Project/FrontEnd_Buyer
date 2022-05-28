import React from "react";
import {
  Container,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Card,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  let nameKos = "Puri Bunga Nirwana";
  let rating = "4,5";
  let price = "900000";
  let price1 = "800000";
  let price2 = "700000";
  let price3 = "600000";
  let address = "Jl. M.H Thamrin No.10";
  let city = "Jakarta Pusat";
  return (
    <div>
      <Container className="py-5">
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title="Sort by"
            id="bg-nested-dropdown"
            variant="light"
          >
            <Dropdown.Item eventKey="1">lowest price</Dropdown.Item>
            <Dropdown.Item eventKey="2">highest price</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <div className="py-3 d-flex">
          <Card className="mx-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={kost1}
              onClick={() => {
                navigate(`/detail`);
              }}
            />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>{nameKos}</Card.Title>
                <Card.Title>
                  <img src={Star} alt="" /> {rating}
                </Card.Title>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Text>{city}</Card.Text>
                  <Card.Text>{address}</Card.Text>
                  <Card.Text>Rp. {price}</Card.Text>
                </div>
                <div>
                  <Button variant="light">Male/Female</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* tes */}
          <Card className="mx-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={kost1}
              onClick={() => {
                navigate(`/detail`);
              }}
            />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>{nameKos}</Card.Title>
                <Card.Title>
                  <img src={Star} alt="" /> {rating}
                </Card.Title>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Text>{city}</Card.Text>
                  <Card.Text>{address}</Card.Text>
                  <Card.Text>Rp. {price1}</Card.Text>
                </div>
                <div>
                  <Button variant="light">Male/Female</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={kost1}
              onClick={() => {
                navigate(`/detail`);
              }}
            />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>{nameKos}</Card.Title>
                <Card.Title>
                  <img src={Star} alt="" /> {rating}
                </Card.Title>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Text>{city}</Card.Text>
                  <Card.Text>{address}</Card.Text>
                  <Card.Text>Rp. {price2}</Card.Text>
                </div>
                <div>
                  <Button variant="light">Male/Female</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={kost1}
              onClick={() => {
                navigate(`/detail`);
              }}
            />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>{nameKos}</Card.Title>
                <Card.Title>
                  <img src={Star} alt="" /> {rating}
                </Card.Title>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Text>{city}</Card.Text>
                  <Card.Text>{address}</Card.Text>
                  <Card.Text>Rp. {price3}</Card.Text>
                </div>
                <div>
                  <Button variant="light">Male/Female</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
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
