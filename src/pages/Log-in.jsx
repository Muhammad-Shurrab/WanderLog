import React, { useState } from "react";
import "../styles/log-in.css";
import { Link } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";

function Login() {
  return (
    <>
      <div className="eren">
        <form action="" className="sign-up-form">
          <img className="w-[18rem]" src={logo} alt="" />
          <label htmlFor="email">
            Email:
            <input
              placeholder="Please Enter Your Email"
              type="email"
              name=""
              id=""
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              placeholder="Please Enter Your Password"
              type="password"
              name=""
              id=""
            />
          </label>

          <button>Log-in</button>
          <p>
            Dont have an account?
            <Link to="/SignUp"> Sign-Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
