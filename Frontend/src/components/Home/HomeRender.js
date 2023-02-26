import React from "react";
import { useNavigate } from "react-router-dom";
import HomeRenderCard from "./HomeRenderCard";
export default function HomeRender(props) {
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
    <HomeRenderCard song={song} item={props.item}/>
  );
}
