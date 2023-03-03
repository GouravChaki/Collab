import React from 'react'
export default function Logincard(props) {
    let popupRemove = () => {
        const main = document.querySelector(".main"); //removes the main class
        main.remove();
      };
    const change=()=>{
        props.setVisible(2);
    }
  return (
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
              <a href="" className="link-danger">
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
              <button className="sign-up-link" onClick={change}>Sign up to Collab</button>
            </div>
          </div>
        </div>
  )
}
