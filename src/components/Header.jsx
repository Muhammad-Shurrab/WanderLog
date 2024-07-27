import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import userp from "../assets/user.png";
import logo from "../assets/image-removebg-preview.png";

function Header() {
  return (
    <>
      <header>
        <div className="img-logo">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="logo for the brand" />
          </Link>
        </div>

        <nav>
          <ul className="navlist">
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/Trips">Trips</Link>
            </li>
          </ul>
        </nav>
        <div className="edit-list">
          <button>
            <Link to="/SignUp"> Sign-Up</Link>
          </button>
          <Link to="/Profile">
            <img className="user-logo" src={userp} alt="user-logo" />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
