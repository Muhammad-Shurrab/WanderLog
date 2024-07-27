import React from "react";
import logo from "../assets/image-removebg-preview.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="img">
          <img className="footer-logo" src={logo} alt="" />
        </div>

        <div className="footer-d">
          <ul className="footer-list">
            <li>
              <Link className="footer-link" to="/Profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/Trips">
                Trips
              </Link>
            </li>
          </ul>

          <span className="rights">
            &copy; copyright all rights reserved 2024
          </span>
        </div>
        <div className="empty">
          <img className="footer-logo" src={logo} alt="" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
