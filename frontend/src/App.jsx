import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";
import SessionHome from "./pages/session/home/home";
import GuestHome from "./pages/guest/home/home";
import GuestHeader from "./components/guestHeader/guestHeader";
import Login from "./pages/guest/login/login";
import Register from "./pages/guest/register/register";

function App() {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  isLoggedIn = false;
  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          {/* LOGGED IN, SESSION MODE */}
          <Routes>
            <Route path="/" element={<SessionHome />} />
          </Routes>
        </>
      ) : (
        <>
          {/* NOT LOGGED IN, GUEST MODE */}
          <GuestHeader />
          <Routes>
            <Route path="/" element={<GuestHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default App;
