import "./home.css"
import React from "react";
import { logOutUser } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Session() {
  const dispatch = useDispatch();
  const userName = useSelector(state=>state.user.userData.name)

  return (
    <div className="session">
      <div className="header">
        <h1>Hi {userName}</h1>
        <button
          onClick={() => {
            window.alert("logging out user");
            dispatch(logOutUser());
          }}
        >
          Logout
        </button>
      </div>
      <div className="body">
        {/* <UserDetails/> */}
      </div>
    </div>
  );
}
