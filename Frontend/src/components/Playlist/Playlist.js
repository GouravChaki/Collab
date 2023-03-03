import React, { useState, useContext, useEffect }  from "react";
import DotLoader from "react-spinners/DotLoader"
import List from "./List";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ListItems from "./ListItems";
import Context from "../Context/HomeContext/Context";
export default function Playlist() {


  const handleList = (item)=>{
    if(item.track !== null)
    {
    return <ListItems key={item.track.id} item={item}/>
    }
   }
  // const handleDb = (item)=>{
  //   if(item.track != null){
  //   return <List key={item.track.id} item={item}/>
  //   }
  // }
  const a=useContext(Context);
  const handleLeft=(event)=>{
    let sibling = event.target.nextElementSibling;
    sibling.scrollLeft = sibling.scrollLeft-500;
   }
   const handleRight=(event)=>{
       let sibling = event.target.previousElementSibling;
       sibling.scrollLeft = sibling.scrollLeft+500;
   }
   if (a.isLoading) {
    return (
      <div className="loader">
      <DotLoader color="red"/>
      </div>
    );
  }

   
  return (
    <div>
        {/* {(a.mock).map(handleDb)} */}


        <div className=" container my-5">
        <h1 className="my-3" style={{marginLeft:"7%", color:"#008E97",fontSize:"2.5rem"}}>Global Top</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
        <div id={`slider1`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {a.mock.map(handleList)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
            </div>
      </div>


      <div className=" container my-5">
        <h1 className="my-3" style={{marginLeft:"7%", color:"rgb(255,84,5)",fontSize:"2.5rem"}}>For you</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
        <div id={`slider2`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {a.mock.map(handleList)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
            </div>
      </div>


      <div className=" container my-5">
        <h1 className="my-3" style={{marginLeft:"7%", color:"#008E97",fontSize:"2.5rem"}}>My Playlist</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
        <div id={`slider3`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {a.mock.map(handleList)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
            </div>
      </div>
    </div>
  );
}
