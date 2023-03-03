import React, { useState, useContext, useEffect }  from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Context from "../Context/HomeContext/Context";
import Profileitems from './Profileitems';
import Profileitems2 from './Profileitems2';
// import {mock2,mock3} from './mock2.js'
// import RenderProfile from './RenderProfile.js'
// import RenderProfile2 from './RenderProfile2.js'
export default function Profile() {

  const a=useContext(Context);

//Scroll left
  const handleLeft=(event)=>{
    let sibling = event.target.nextElementSibling;
    sibling.scrollLeft = sibling.scrollLeft-500;
   }

//Scroll Right
   const handleRight=(event)=>{
       let sibling = event.target.previousElementSibling;
       sibling.scrollLeft = sibling.scrollLeft+500;
   }
//For renderning into the profileItems
   const handleList = (items)=>{
    if(items.track!==null)
    {
    return <Profileitems item={items}/>
    }
   }
   const handleList2 = (items)=>{
    if(items.track!==null)
    {
    return <Profileitems2 item={items}/>
    }
   }
  // const handleDb = (item)=>{
  //   return <RenderProfile item={item}/>
  // }
  // const handleDb1 = (item)=>{
  //   return <RenderProfile2 item2={item}/>
  // }
  return (
    <><div className="profile d-flex bg-body-tertiary shadow mb-5 rounded">
      <img className="profilepic shadow" src="https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="profile pic"/>
      <div>
        <h1 style={{fontSize:"5rem"}}>Profile</h1>
        <h4 style={{color:"#008E97"}}>USERNAME</h4>
        <span className='mx-2' style={{color:"rgb(255,84,5)"}}>25 Playlists</span>
        <span className='mx-2' style={{color:"rgb(255,84,5)"}}>190 Followers</span>
      </div>
      <div className="options d-flex flex-column" style={{textAlign:"left"}} >
        <div className="btn opt shadow my-4">Change Username</div>
        <div className="btn opt shadow my-4">Change Email</div>
        <div className="btn opt shadow my-4">Change Password</div>
        <div className="btn opt shadow my-4">See Followers</div>
      </div>
      </div>
      <div className="mb-5">

      <div>
        {/* {mock2.map(handleDb)} */}
        <div className=" container my-5 shadow pt-3" style={{borderRadius:"50px"}}>
        <h1 className="my-3" style={{marginLeft:"7%", color:"#008E97" ,fontSize:"3.5rem"}}>My Playlists</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn icn' style={{marginTop:"10vh"}} size={250} onClick={handleLeft}/>
        <div id={`slider`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {a.mock2.map(handleList)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn icn' style={{marginTop:"10vh"}} size={250} onClick={handleRight} />
            </div>
      </div>
        </div>

      <div>
        {/* {mock3.map(handleDb1)} */}
        <div className=" container my-5 shadow pt-3" style={{borderRadius:"50px"}}>
        <h1 className="my-3" style={{marginLeft:"7%", color:"rgb(255,84,5)",fontSize:"3.5rem"}}>Top Singers</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={250} onClick={handleLeft}/>
      <div id={`sing`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {a.mock2.map(handleList2)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={250} onClick={handleRight} />
            </div>
      </div>
        </div>
      </div>
      </>
  )
}
