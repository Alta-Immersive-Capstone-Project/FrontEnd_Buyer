import React, { useEffect, useState } from "react";
import user from "../images/user.png";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL as url } from "../components/URL";
import { useDispatch } from "react-redux";
import { setBooking } from "../store/transaction";

function History() {
  const [histories, setHistories] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

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

        setHistories(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 border-end">
          <img src={user} alt="User" className="mt-5 w-50" />
          <div className="mt-3">
            <h4>Profile</h4>
            <h4>Booking History</h4>
          </div>
        </div>

        <div className="col-8">
          {histories.map((el, i) => (
            <div style={{ cursor: "pointer" }} key={i}>
              <div className="mt-5 d-flex">
                <img
                  src={el.url}
                  style={{ width: "18rem" }}
                  alt=""
                  className="rounded"
                />
                <div className="w-100 px-3">
                  <div className="d-flex justify-content-between">
                    <h5>ID Booking</h5>
                    <h5>{el.booking_id}</h5>
                  </div>
                  <h4>{el.title}</h4>
                  <div className="d-flex justify-content-between">
                    <h6>Date Entry</h6>
                    <h6>{el.check_in}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Duration</h6>
                    <h6>{el.duration} Month</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Rp. {el.price}</h5>
                    <h5>{el.transaction_status}</h5>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 mt-3">
                <Button
                  className="btnPay"
                  onClick={() => {
                    dispatch(setBooking(el));

                    navigate(`/order/${el.booking_id}`);
                  }}
                >
                  Pay
                </Button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
