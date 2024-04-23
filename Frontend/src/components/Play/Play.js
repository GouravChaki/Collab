import React from 'react'
import {useLocation} from 'react-router-dom';
import style from "./Play.css"
// import music from "./shinchan.mp3"
export default function Play() {
    const location=useLocation();
  return (
    <>
<div className="container d-flex justify-content-center w-100 h-100 mb-5" style={style}>
<div style={{width: '40%', height: '50%'}}>
    <div className="card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img className="card-img-top" src={location.state.photo}
        style={{height:"350px", width:"100%"}}
          alt="Card image cap"/>
      </div>
      <div className="card-body text-center">
        <h5 className="h5 font-weight-bold">{location.state.title}</h5>
        <p className="mb-0">{location.state.artistName}</p>
        <audio className="mt-2" controls>
          <source src={location.state.song}/>
        </audio>
      </div>
    </div>
  </div>
</div>

</>
  )
}
