import React from "react";
import "../styles/sign-up.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import logo from "../assets/image-removebg-preview.png";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created");
    } catch (err) {
      console.log(err);
    }

    axios.put(
      `https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app/Trips/Users/${users.length}.json`,
      {
        firstName: firstName,
        lasName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }
    );
  };

  useEffect(() => {
    axios
      .get(
        "https://wanderlog-ab438-default-rtdb.europe-west1.firebasedatabase.app/Trips/Users.json"
      )
      .then((res) => setUsers(res.data));
  }, [users]);

  return (
    <>
      <div className="eren">
        <form action="" className="sign-up-form" onSubmit={handleSubmit}>
          <img className="w-[18rem]" src={logo} alt="" />
          <label htmlFor="email">
            Email:
            <input
              placeholder="Please Enter Your Email"
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="First-Name">
            First-Name:
            <input
              placeholder="Please Enter Your First-Name"
              type="text"
              name=""
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="Last-Name">
            Last-Name:
            <input
              placeholder="Please Enter Your Last-Name"
              type="text"
              name=""
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              placeholder="Please Enter Your Password"
              type="password"
              name=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Confirm Password:
            <input
              placeholder="Please Confirm Your Password"
              type="password"
              name=""
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign-up</button>
          <p>
            Already Registered?
            <Link to="/LogIn"> Log-in</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
