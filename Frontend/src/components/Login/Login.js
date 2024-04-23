//log in
import "./Login.css";
import React, { useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Context from "../Context/HomeContext/Context";
import { useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import Logincard from "./Logincard";


export default function Login() {

const a = useContext(Context)
useEffect(()=>{
   a.login();
},[])
  return (
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          visibility: `${a.log}`,
        }}
      >
        {(a.visible===1)?<Logincard visible={a.visible} setVisible={a.setVisible}/>:<Signup/>}
      </div>
  );
}
