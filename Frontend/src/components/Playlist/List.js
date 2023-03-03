import React from "react"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ListItems from './ListItems';
import Context from "../Context/HomeContext/Context";
export default function RenderLists(props) {
    const handleLeft=(event)=>{
     let sibling = event.target.nextElementSibling;
     sibling.scrollLeft = sibling.scrollLeft-500;
    }
    const handleRight=(event)=>{
        let sibling = event.target.previousElementSibling;
        sibling.scrollLeft = sibling.scrollLeft+500;
    }
    const handleList = (item)=>{
        return <ListItems key={item.id} item={item}/>
       }
  return (
    <>
    <div className=" container my-5">
        <h1 className="my-3" style={{marginLeft:"7%", color:"#008E97",fontSize:"2.5rem"}}>{props.item.title}</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={200} onClick={handleLeft}/>
        <div id={`slider${props.item.identity}`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {props.item.data.map(handleList)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={200} onClick={handleRight} />
            </div>
      </div>
    </>
  )
}
