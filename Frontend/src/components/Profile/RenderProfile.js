import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Profileitems from './Profileitems';
export default function RenderProfile(props) {
    const handleLeft=(event)=>{
     let sibling = event.target.nextElementSibling;
     sibling.scrollLeft = sibling.scrollLeft-500;
    }
    const handleRight=(event)=>{
        let sibling = event.target.previousElementSibling;
        sibling.scrollLeft = sibling.scrollLeft+500;
    }
    const handleList = (items)=>{
        return <Profileitems item={items}/>
       }
  return (
    <>
    <div className=" container my-5 shadow pt-3" style={{borderRadius:"50px"}}>
        <h1 className="my-3" style={{marginLeft:"7%", color:(props.item.identity%2)?"#008E97":"rgb(255,84,5)",fontSize:"3.5rem"}}>{props.item.title}</h1>
        <div className="d-flex w-95">
        <MdChevronLeft className='opacity-50 btn icn' style={{marginTop:"10vh"}} size={250} onClick={handleLeft}/>
        <div id={`slider${props.item.identity}`} className="scroll row flex-row flex-nowrap" style={{overflow:"auto",margin:"auto"}}>
            {props.item.data.map(handleList)}
            </div>
        <MdChevronRight className='opacity-50 mx-1 btn icn' style={{marginTop:"10vh"}} size={250} onClick={handleRight} />
            </div>
      </div>
    </>
  )
}
