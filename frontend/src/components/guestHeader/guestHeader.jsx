import "./guestHeader.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <h1 onClick={() => navigate("/")}>TODOist</h1>
        <div className="actions">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
      <hr />
    </>
  );
}
