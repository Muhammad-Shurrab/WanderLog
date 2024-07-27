import React from "react";
import userp from "../assets/user.png";
import { useState, useEffect } from "react";
import travel from "../assets/04_1920-1080.jpg";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/trip-details.css";
function TripDetails() {
  const [id, setId] = useState(0);

  const [trips, setTrips] = useState([]);

  const [tripsValue, setTripsValue] = useState([]);
  useEffect(() => {
    setTrips(JSON.parse(sessionStorage.getItem("trip")));
  }, []);

  useEffect(() => {
    setTripsValue(trips[id]);
  }, [trips[id]]);

  return (
    <>
      <Header />

      <h2 className="title mt-5">Trip</h2>

      <div className="wrapper">
        <figure className="card-item-details" key={trips}>
          <img
            className="card-banerr w-[40rem]"
            src={travel}
            alt="Podcast-img"
          />

          <div className="card-info">
            <p className="card-cat">{trips.Location}</p>
            <h3 className="card-title">
              <a href="#">{trips.Title}</a>
            </h3>
            <p className="card-desc">{trips.Description}</p>
            <div className="card-details">
              <img src={userp} alt="" className="card-img" />
              <div className="card-lines">
                <p className="card-channel">Fahem</p>
                <p className="card-date">{trips.Date}</p>
              </div>
            </div>
          </div>
        </figure>

        <iframe src="https://www.google.com/maps/@32.070282,36.0700935,20.12z?entry=ttu"></iframe>
      </div>
    </>
  );
}

export default TripDetails;
