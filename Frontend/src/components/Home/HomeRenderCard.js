import React from 'react'

export default function HomeRenderCard(props) {
  const play=async (event)=>{
    let a=event.target.querySelector('button');
    a.style.visibility = "visible";
    a.style.boxShadow = "0 10px 20px rgba(0,0,0,0.8), 0 4px 8px rgba(255,255,255,1)";
  }
  const play2=async (event)=>{
    let a=event.target.querySelector('button');
    a.style.visibility = "hidden";
  }
  return (
    <div
    className="card mx-4 cardmys"
    style={{
      backgroundImage: `url('${props.item.track.album.images[0].url}')`,
      width: "20rem",
      height: "23rem",
      backgroundSize: "20rem 23rem",
      backgroundRepeat: "no-repeat",
      borderRadius: "5%",
      position: "relative",
    }}
  >
    <div className="card-body inside" onMouseEnter={play} onMouseLeave={play2}>
      <h5 className="card-title" style={{ color: "white" }}>
        {props.item.track.name}
      </h5>
      <button
        style={{
          borderColor: "rgb(255,84,5)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "40px",
          right: "20px",
          visibility: "hidden",
          backgroundColor: "rgb(255,84,5)",
        }}
        onClick={props.song}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="50"
          fill="black"
          className="bi bi-play-fill mx-2 my-2"
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
      </button>
    </div>
  </div>
  )
}
