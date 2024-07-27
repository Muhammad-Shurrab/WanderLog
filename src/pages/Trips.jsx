import React from "react";
import "../styles/trips.css";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import userp from "../assets/user.png";
import travel from "../assets/04_1920-1080.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Trips() {
  // Varible & Function
  const [trips, setTrips] = useState([]);

  useEffect(
    () => {
      axios
        .get(
          "https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app/Trips.json"
        )

        .then((res) => setTrips(res.data.filter((tr) => tr.isActive == false)))

        .catch((err) => err);
    },

    // For calling the function one time
    []
  );
  console.log(trips[0]);
  function removeJournalHandle(id) {
    axios.patch(
      //
      `https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app/Trips/${id}.json`,
      {
        isActive: true,
      }
    );

    alert("Trip Remove Successfuly");

    [];
  }

  return (
    <>
      <Header />
      <h2 className="title mt-6">All Trips</h2>

      <div className="filtering">
        <input
          className="search-bar"
          placeholder="Search For the Trip here "
          type="search"
          name=""
          id="search"
        />

        <div className="cat">
          <a className="listen-btn" href="#">
            America
          </a>
          <a className="listen-btn" href="#">
            Eurpo
          </a>
          <a className="listen-btn" href="#">
            Asia
          </a>
        </div>
      </div>

      <div className="card-holder">
        {Object.values(trips).map((tr) => {
          return (
            <figure className="card-item" key={tr}>
              <img className="card-baner" src={travel} alt="Podcast-img" />
              <p className="card-cat">{tr.Location}</p>
              <h3>
                <a href="#">{tr.Title}</a>
              </h3>

              <p>{tr.Description}</p>

              <div className="card-details">
                <div className="card-lines">
                  <img src={userp} alt="" className="card-img" />
                  <p className="card-channel">Fahem</p>
                  <p className="card-date">{tr.Date}</p>
                </div>
                <Link
                  onClick={() => {
                    {
                      sessionStorage.setItem("trip", JSON.stringify(tr));
                    }
                  }}
                  className="btn"
                  to={"/TripDetails"}
                >
                  View Trip 🤍
                </Link>
                <div className="edit-btns">
                  {" "}
                  <button className="btn">Edit</button>
                  <button
                    onClick={() => {
                      removeJournalHandle(tr.id);
                    }}
                    className="remove btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </figure>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Trips;
