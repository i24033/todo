import React, { useState } from "react";
import Card from "../../../components/card/card";
import app from "@/feathers.js";

export default function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleRegister() {
    try {
      await app.service("authentication").create(userData);
      window.alert("register success?")
    } catch (err) {
      window.alert("error occured when trying to login. check console");
      console.log("authentication err", err);
    }
  }

  return (
    <div className="register">
      <Card>
        <h1>Register</h1>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={handleInputChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="errors"></div>
        <button onClick={handleRegister}>Register</button>
      </Card>
    </div>
  );
}
