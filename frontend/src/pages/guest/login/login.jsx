import React, { useState } from "react";
import Card from "../../../components/card/card";
import { useDispatch } from "react-redux";
import { logInUser, logOutUser } from "../../../redux/userSlice";
import app from "@/feathers.js"

export default function Login() {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    strategy: "local",
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
      await app.authenticate(userData);
      window.alert("login success?")
    } catch (err) {
      window.alert("error occured when trying to login. check console");
      console.log("authentication err", err);
    }
  }
  return (
    <div className="login">
      <Card>
        <h1>Login</h1>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={handleInputChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="errors"></div>
        <button onClick={handleRegister}>Login</button>
      </Card>
    </div>
  );
}
