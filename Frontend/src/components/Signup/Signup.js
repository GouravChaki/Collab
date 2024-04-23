import "./Signup.css";
import React,{useContext} from 'react';
import Context from "../Context/HomeContext/Context";
export default function Signup() {
  let popupRemove = () => {
    const main = document.querySelector(".main"); //removes the main class
    main.remove();
  };
  const a = useContext(Context)
  const change=()=>{
    a.setVisible(1);   
  }
  return (
    <div>
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
              {/* username */}
              <input
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="input-details">
              {/* Email address */}
              <input
                type="text"
                placeholder="Email address"
              ></input>
            </div>
            {/* Password */}
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
              <button className="sign-up-link" onClick={change}>Log in to Collab</button>
            </div>
          </div>
        </div>
        </div>
  );
}
