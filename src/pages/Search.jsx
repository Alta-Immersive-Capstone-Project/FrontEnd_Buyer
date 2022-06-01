import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/search.css";
import kost from "../images/kost1.svg";
import Star from "../images/Star.svg";

function Search() {
  const [boardingHouses, setBoardingHouses] = useState([]);

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

        setBoardingHouses(response.data);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {boardingHouses.map((el, i) => (
            <div style={{ cursor: "pointer" }} key={i}>
              <div className="d-flex my-3 align-items-center">
                <img src={kost} alt="Kost" className="rounded" />
                <div className="mx-4">
                  <div className="d-flex">
                    <p className="border rounded px-2">{el.type}</p>
                  </div>
                  <h5>
                    <strong>{el.title}</strong>
                  </h5>
                  <p className="small text-secondary">{el.address}</p>
                  <div className="d-flex justify-content-between align-items-end gap-4">
                    <h6>
                      <img src={Star} alt="" /> {el.rating}
                    </h6>
                    <h5>
                      <strong>Rp.{el.price}/month</strong>
                    </h5>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div className="col-lg d-flex justify-content-center align-items-center border-start">
          <h1>Ini Map</h1>
        </div>
      </div>
    </div>
  );
}

export default Search;
