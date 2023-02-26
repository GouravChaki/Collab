import React, { useState } from 'react';
import Contitle from "./Context.js"
import photo1 from "./music.jpg"
import photo2 from "./pikrepo.jpg"
import photo3 from "./pikrepo1.jpg"
import photo4 from "./pikrepo2.jpg"
import photo5 from "./pikrepo4.jpg"
import axios from 'axios'
import Context from './Context.js';
export default function ContitleData(props) {
    const [Data,setData]=useState([])
    const [mock,setMock]=useState([
    //   {
    //      title: "Global Hits",
    //      identity: 1,
    //     data: [
    //     {
    //       id: 1,
    //       title:"Playlist1",
    //       photo: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //     },
    //     {
    //       id: 2,
    //       title:"Playlist2",
    //       photo: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //     },
    //     {
    //       id: 3,
    //       title:"Playlist3",
    //       photo: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //     },
    //     {
    //       id: 4,
    //       title:"Playlist4",
    //       photo: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //     },
    //     {
    //       id: 5,
    //       title:"Playlist5",
    //       photo: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //     },
    //     {
    //       id: 6,
    //       title:"Playlist6",
    //       photo: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //     }]
    //   },
    
    //   {
    //     title: "Playlists For You",
    //     identity: 2,
    //    data: [
    //    {
    //      id: 11,
    //      title:"Playlist1",
    //      photo: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //    },
    //    {
    //      id: 21,
    //      title:"Playlist2",
    //      photo: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //    },
    //    {
    //      id: 31,
    //      title:"Playlist3",
    //      photo: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //    },
    //    {
    //      id: 41,
    //      title:"Playlist4",
    //      photo: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //    },
    //    {
    //      id: 51,
    //      title:"Playlist5",
    //      photo: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //    },
    //    {
    //      id: 61,
    //      title:"Playlist6",
    //      photo: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //    }]
    //  },
    
    //  {
    //   title: "Moods",
    //   identity: 3,
    //  data: [
    //  {
    //    id: 19,
    //    title:"Playlist1",
    //    photo: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 29,
    //    title:"Playlist2",
    //    photo: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 39,
    //    title:"Playlist3",
    //    photo: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 49,
    //    title:"Playlist4",
    //    photo: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 59,
    //    title:"Playlist5",
    //    photo: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 69,
    //    title:"Playlist6",
    //    photo: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  }]
    // },
    
    // {
    //   title: "My Playlists",
    //   identity: 4,
    //  data: [
    //  {
    //    id: 1,
    //    title:"Playlist1",
    //    photo: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 2,
    //    title:"Playlist2",
    //    photo: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 3,
    //    title:"Playlist3",
    //    photo: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 4,
    //    title:"Playlist4",
    //    photo: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 5,
    //    title:"Playlist5",
    //    photo: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    //  },
    //  {
    //    id: 6,
    //    title:"Playlist6",
    //    photo: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    // }]
     //}
    ])
    const api=async()=>{
    try{
      const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
      params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
      headers: {
        'X-RapidAPI-Key': '1773deac9amshf71b312a8b3aef0p1ae877jsn3be50280df7b',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    }
      const res =await axios.request(options)
      setData(res.data.items)
      setMock(res.data.items)
      console.log(res.data.items)
  }
      catch(error){
        console.log(error)
      }
    };

    const [log,setLog] = useState('hidden')
  const login = ()=>{
      setTimeout(()=>{
        setLog('visible')
      },3000)
}
  return (
    <Context.Provider value={{Data,setData,log,setLog,login,mock,setMock,api}}>
        {props.children}
    </Context.Provider>
  )
}
