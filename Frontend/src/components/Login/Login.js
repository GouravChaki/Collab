//log in
import "./Login.css";
import React, { useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Context from "../Context/HomeContext/Context";
export default function Login() {
  let url = ""; // url for forgot password anchor tag
  // let popupVisible = () => {
  //   document.querySelector(".box").classList.add("pop-up");
  // };

  let popupRemove = () => {
    const main = document.querySelector(".main"); //removes the main class
    main.remove();
  };
//  setTimeout(popupVisible, 2000); // automatically pops up after 2000 millisec
const a = useContext(Context)
useEffect(()=>{
   a.login();
},[])
  return (
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          visibility: `${a.log}`
        }}
      >
        <div className="box">
          <div className="box-left">
            <div className="log-in-image">
            </div>
          </div>
          <div className="box-right">
            <span className="close-btn" onClick={popupRemove}>
              &times;
            </span>

            <h2 className="login-heading">Welcome to Collab&#46;mp3</h2>
            <div className="input-details">
              <input
                type="text"
                placeholder="Email address or username"
              ></input>
            </div>
            <div className="input-details">
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="forgot-password">
              <a href={url} className="link-danger">
                Forgot your password?
              </a>
            </div>
            <div className="login">
              <div className="checkbox">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="button">
                <button className="log-in-link">Log In</button>
              </div>
            </div>
            <hr className="horizonal-line" />
            <div className="sign-up-section">
              <h2>Don't have an account?</h2>
              <NavLink to="/signup">
                <button className="sign-up-link">Sign up to Collab</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  );
}
