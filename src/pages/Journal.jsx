import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/journal.css";

function Journal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [trips, setTrips] = useState([]);

  useEffect(
    () => {
      axios
        .get(
          "https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app/Trips.json"
        )
        .then((res) => setTrips(res.data))

        .catch((err) => err);
    },

    // For calling the function one time
    []
  );

  function addJournalHandle(e) {
    e.preventDefault();
    axios
      .put(
        `https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app/Trips/${trips.length}.json`,
        {
          Title: title,
          Description: description,
          Location: location,
          Date: date,
          Photo: photo,
          id: trips.length,
          isActive: false,
        }
      )
      .catch((err) => err);

    alert("Your Trip Has Been Added! ");
    [];
  }

  return (
    <>
      <h2 className="title mt-6">Journal</h2>

      <form className="entry-form" action="">
        <label htmlFor="">Title:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="j-input"
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">Description:</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="j-input"
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">Location:</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          className="j-input"
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">Date:</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          className="j-input"
          type="date"
          name=""
          id=""
        />
        <label htmlFor="">Photo:</label>
        <input
          onChange={(e) => setPhoto(e.target.value)}
          className="j-input"
          type="file"
          name="file"
          id=""
        />

        <button className="j-btn" onClick={addJournalHandle}>
          Add Journal
        </button>
      </form>
    </>
  );
}

export default Journal;
