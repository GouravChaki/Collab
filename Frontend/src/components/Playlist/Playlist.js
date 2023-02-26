// import React, { useState, useContext, useEffect }  from "react";
// import List from "./List";
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import Context from "../Context/HomeContext/Context";
// export default function Playlist() {
//   const handleList = (item)=>{
//     return <ListItems key={item.track.id} item={item}/>
//    }
//   // const handleDb = (item)=>{
//   //   if(item.track != null){
//   //   return <List key={item.track.id} item={item}/>
//   //   }
//   // }
//   const a=useContext(Context);
//   useEffect(()=>{
//     a.api()
//   },[])
//   const handleLeft=(event)=>{
//     let sibling = event.target.nextElementSibling;
//     sibling.scrollLeft = sibling.scrollLeft-500;
//    }
//    const handleRight=(event)=>{
//        let sibling = event.target.previousElementSibling;
//        sibling.scrollLeft = sibling.scrollLeft+500;
//    }
//   return (
//     <div>
//         {/* {(a.mock).map(handleDb)} */}


//         <div className=" container my-5">
//         <h1 className="my-3" style={{marginLeft:"7%", color:"#008E97",fontSize:"2.5rem"}}>{props.item.title}</h1>
//         <div className="d-flex w-95">
//         <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
//         <div id={`slider${props.item.identity}`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
//             {a.mock.map(handleList)}
//             </div>
//         <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
//             </div>
//       </div>


//       <div className=" container my-5">
//         <h1 className="my-3" style={{marginLeft:"7%", color:"rgb(255,84,5)",fontSize:"2.5rem"}}>{props.item.title}</h1>
//         <div className="d-flex w-95">
//         <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
//         <div id={`slider${props.item.identity}`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
//             {a.mock.map(handleList)}
//             </div>
//         <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
//             </div>
//       </div>


//       <div className=" container my-5">
//         <h1 className="my-3" style={{marginLeft:"7%", color:"#008E97",fontSize:"2.5rem"}}>{props.item.title}</h1>
//         <div className="d-flex w-95">
//         <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
//         <div id={`slider${props.item.identity}`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
//             {a.mock.map(handleList)}
//             </div>
//         <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
//             </div>
//       </div>
//     </div>
//   );
// }
