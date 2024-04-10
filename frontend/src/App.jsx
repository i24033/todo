import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";
import SessionHome from "./pages/session/home/home";
import GuestHome from "./pages/guest/home/home";
import GuestHeader from "./components/guestHeader/guestHeader";
import Login from "./pages/guest/login/login";
import Register from "./pages/guest/register/register";
import Navbar from "./components/navbar/navbar";
import Todo from "./pages/session/todo/todo";
import Notes from "./pages/session/notes/notes";
import NotFound from "./pages/notFound/notFound";

function App() {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="app">
      {isLoggedIn ? (
        <div className="session">
          {/* LOGGED IN, SESSION MODE */}
          <Navbar />
          <Routes>
            <Route path="/" element={<SessionHome />} />
            <Route path="/todo" element={<Todo/>}>
              <Route path="/todo/:category" element={<Todo/>}/>
            </Route>
            <Route path="/notes/:category" element={<Notes/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      ) : (
        <div className="guest">
          {/* NOT LOGGED IN, GUEST MODE */}
          <GuestHeader />
          <Routes>
            <Route path="/" element={<GuestHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      )
      }
    </div>
  );
}

export default App;
