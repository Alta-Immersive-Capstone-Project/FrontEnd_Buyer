import React, { useEffect, useState } from "react";
import "../styles/chat.css";

export default function Chat() {
  const [username, setUsername] = useState("username");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {}, []);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <input
            className="fs-5 fw-semibold"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="list-group list-group-flush border-bottom scrollarea">
          {messages.map((message) => {
            return (
              <div className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">{message.username}</strong>
                </div>
                <div className="col-10 mb-1 small">{message.message}</div>
              </div>
            );
          })}
        </div>
      </div>
      <form onSubmit={(e) => submit(e)}>
        <input
          className="form-control"
          placeholder="Write a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}
