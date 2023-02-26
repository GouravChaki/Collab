import React from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";



export default function Signup() {
  let url = ""; // url for forgot password anchor tag
  let popupVisible = () => {
    document.querySelector(".box").classList.add("pop-up");
  };

  let popupRemove = () => {
    document.querySelector(".box").classList.remove("pop-up");
  };
  setTimeout(popupVisible, 2000); // automatically pops up after 2000 millisec
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          backgroundColor: "white"
        }}
      >
        <div className="box">
          <div className="box-left">
            <div className="log-in-image">
              <img
                src="https://i.kym-cdn.com/photos/images/original/001/613/005/3c4.png"
                alt=""
              ></img>
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
                placeholder="Username"
              ></input>
            </div>
            <div className="input-details">
              <input
                type="text"
                placeholder="Email address"
              ></input>
            </div>
            <div className="input-details">
              <input type="password" placeholder="Password"></input>
            </div>
            <div className="forgot-password">
              
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
                <button className="log-in-link">Sign up</button>
              </div>
            </div>
            <hr className="horizonal-line" />
            <div className="sign-up-section">
              <h2>Already have an account?</h2>
              <NavLink to="/login">
              <button className="sign-up-link">Log in to Collab</button>
              </NavLink>
            </div>
          </div>
        </div>
        <button className="check-js" onClick={popupVisible}>
          Log in/Sign Up
        </button>
      </div>
    </>
  );
}
