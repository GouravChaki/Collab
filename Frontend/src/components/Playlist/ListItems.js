import React from "react";
import { useNavigate } from "react-router-dom";
export default function ListItems(props) {
  let navigate=useNavigate();
  const song=()=>{
    let path='song'
    navigate(path,{state:{
      song:props.item.track.preview_url,
      photo:props.item.track.album.images[0].url,
      title:props.item.track.name,
      artistName:props.item.track.artists[0].name,
      releaseDate:props.item.track.album.release_date}})
  }
  return (
    <>
      <div
        className="card mx-2 my-2 shadow mb-5"
        style={{
          width: "15rem",
          borderRadius: "5%",
          borderStyle: "solid",
          borderColor: "#008E97",
          borderSize: "0.5px",
          borderTopLeftRadius:"10%"
        }}
      >
        <div
          className="my-3"
          style={{
            position: "relative",
            borderTopLeftRadius: "10%",
            backgroundImage: `url(${props.item.track.album.images[0].url})`,
            width: "13.2rem",
            height: "15rem",
            backgroundSize: "25rem 15rem",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <button onClick={play}> */}
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
              onClick={song}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          {/* </button> */}
        </div>
        <div className="card-body">
          <h6
            className="card-title"
            style={{ textAlign: "center", size: "3rem" }}
          >
            {props.item.track.name}
          </h6>
        </div>
      </div>
    </>
  );
}
