import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Profileitems2 from './Profileitems2';
export default function RenderProfile(props) {
    const handleLeft=(event)=>{
     let sibling = event.target.nextElementSibling;
     sibling.scrollLeft = sibling.scrollLeft-500;
    }
    const handleRight=(event)=>{
        let sibling = event.target.previousElementSibling;
        sibling.scrollLeft = sibling.scrollLeft+500;
    }
       const handleList2 = (item)=>{
        return <Profileitems2 item={item}/>
       }
  return (
    <>
    <div className=" container my-5 shadow pt-3" style={{borderRadius:"50px"}}>
        <h1 className="my-3" style={{marginLeft:"7%", color:(props.item2.identity%2)?"#008E97":"rgb(255,84,5)",fontSize:"3.5rem",}}>{props.item2.title}</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn' style={{marginTop:"10vh"}} size={250} onClick={handleLeft}/>
      <div id={`sing${props.item2.identity}`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {props.item2.data.map(handleList2)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn' style={{marginTop:"10vh"}} size={250} onClick={handleRight} />
            </div>
      </div>
    </>
  )
}
