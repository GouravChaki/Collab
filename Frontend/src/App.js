import logo from './logo.svg';
import './App.css';
import Context from './components/Context/HomeContext/Context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Searchpage from './components/Search/Searchpage';
import Playlist from './components/Playlist/Playlist';
import Profile from './components/Profile/Profile';
import Play from './components/Play/Play';
import ContextData from './components/Context/HomeContext/ContextData';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <ContextData>
    <Router>
    <Login/>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Searchpage/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/song" element={<Play/>}/>
        <Route path="/playlist/song" element={<Play/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </ContextData>
  );
}

export default App;
