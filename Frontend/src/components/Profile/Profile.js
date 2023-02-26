import React from 'react'
import {mock2,mock3} from './mock2.js'
import RenderProfile from './RenderProfile.js'
import RenderProfile2 from './RenderProfile2.js'
export default function Profile() {
  const handleDb = (item)=>{
    return <RenderProfile item={item}/>
  }
  const handleDb1 = (item)=>{
    return <RenderProfile2 item2={item}/>
  }
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
      <div>{mock2.map(handleDb)}</div>
      <div>{mock3.map(handleDb1)}</div>
      </div>
      </>
  )
}
