import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Log-in";
import Profile from "./pages/Profile";
import SignUp from "./pages/Sign-up";
import Trips from "./pages/Trips";
import Header from "./components/Header";
import Journal from "./pages/Journal";
import TripDetails from "./pages/Trip-details";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Header" element={<Header />} />
          {/* <Route path="/Journal" element={<Journal />} /> */}
          <Route path="/TripDetails" element={<TripDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
