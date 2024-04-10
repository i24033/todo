import "./navbar.css";
import React from "react";
import dummyProfilePic from "@/assets/dummy-profile.png";
import { logOutUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import feathersApp from "@/feathers.js"

export default function Navbar() {
  const dispatch = useDispatch();

  async function logOut(){
    await feathersApp.authentication.logout()
    dispatch(logOutUser())
  }

  return (
    <div className="navbar">
      <div className="head">
        <div className="section-1">
          <div className="img">
            <img src={dummyProfilePic} alt="user image" />
          </div>
          <div className="text">
            <div className="app-name">{process.env.REACT_APP_NAME}</div>
            <div className="hello-user">Hello User!</div>
          </div>
        </div>
        <div className="section-2">
          <div className="rule"></div>
        </div>
      </div>
      <div className="body">
        <div className="tasks">
          <h2>Todo categories :</h2>
          <div className="categories">
            <Link to="/todo/Personal" className="list">
              Personal
            </Link>
            <Link to="/todo/Work" className="list">
              Work
            </Link>
            <Link to="/todo/Groceries" className="list">
              Groceries
            </Link>
          </div>
          <div className="add-new-categ">
            <input type="text" placeholder="New todo category name..." />
            <button>Create</button>
          </div>
        </div>
        <div className="notes">
          <h2>Notes : </h2>
          <div className="categories">
            <Link to="/notes/personal" className="list">Personal</Link>
            <Link to="/notes/physics" className="list">Physics</Link>
            <Link to="/notes/chemistry" className="list">chemistry</Link>
          </div>
          <div className="add-new-categ">
            <input type="text" placeholder="New notes category name..." />
            <button>Create</button>
          </div>
        </div>
      </div>
      <div className="logout" onClick={ logOut }>
        Logout
      </div>
    </div>
  );
}
