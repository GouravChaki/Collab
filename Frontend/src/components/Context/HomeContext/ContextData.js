import React, { useState } from 'react';
import axios from 'axios'
import Context from './Context.js';
export default function ContextData(props) {
    const [Data,setData]=useState([])
    const [mock,setMock]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [visible,setVisible]=useState(1)
    const [mock2,setMock2]=useState([])
    const api=async()=>{
    try{
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
        params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
        headers: {
          'X-RapidAPI-Key': '56803a9c81mshfbd4a322a73b113p14fcbbjsn11108bf7a1af',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
      const res =await axios.request(options)
      setData(res.data.items)
      setMock(res.data.items)
      setMock2(res.data.items)
      setIsLoading(false);
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
      },5000)
}
  return (
    <Context.Provider value={{Data,setData,log,setLog,login,mock,setMock,api,visible,setVisible,mock2,setMock2,isLoading}}>
        {props.children}
    </Context.Provider>
  )
}
