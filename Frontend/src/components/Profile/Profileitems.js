import React from "react";

export default function Profileitems(props) {
  // add hover on cards and svg
  // remove the scroller
  const play = (event) => {
    let a = document.getElementById(`play${props.item.id}`);
    a.style.visibility = "visible";
  };
  const play2 = (event) => {
    let a = document.getElementById(`play${props.item.id}`);
    a.style.visibility = "hidden";
  };
  return (
    <>
      <div
        className="card mx-2 my-2 shadow mb-5"
        style={{
          width: "22.3rem",
          borderRadius: "40px",
          borderStyle: "solid",
          borderColor: "#008E97",
          borderSize: "0.5px",
        }}
        onMouseOver={play}
        onMouseOut={play2}
      >
        <div
          className="my-3"
          style={{
            position: "relative",
            borderRadius: "40px",
            backgroundImage: `url(${props.item.img})`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            paddingBottom: "100%",
          }}
        >
          <a
            href="/"
            className="mb-n3"
            id={`play${props.item.id}`}
            style={{ visibility: "hidden" }}
          >
            <svg
              className="icn btn btn"
              style={{
                position: "absolute",
                right: "-5px",
                bottom: "-15px",
                backgroundColor: "black",
                borderRadius: "50%",
                borderColor: "rgb(255,84,5)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="rgb(255,84,5)"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </a>
        </div>
        <div className="card-body">
          <h6
            className="card-title"
            style={{ textAlign: "center", size: "3rem" }}
          >
            {props.item.text}
          </h6>
        </div>
      </div>
    </>
  );
}
