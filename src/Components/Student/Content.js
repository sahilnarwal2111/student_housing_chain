import React from 'react'
import {useState} from 'react';
import Home from './Home';
import Notice from './Notice';
import Issue from './Issue';
import Profile from './Profile';
import Tab from './Tab';



const Content = () => {
  
  const [Option,setOption]=useState("Home");

  

  function change_board(type)
  {
    console.log(type);
    if(type==="Home") setOption("Home");
    else if(type==="Notice") setOption("Notice");
    else if(type==="Issue") setOption("Issue");
    else if(type==="Profile") setOption("Profile");
    console.log("Option -> "+Option )
  }

  return (

    <div className="main" >
      <div className="Navbar">
        <div className="Menu">
          <label onClick={()=> {change_board("Home")}}>Home</label>
          <label onClick={()=> {change_board("Notice")}}>Notice</label>
          <label onClick={()=> {change_board("Issue")}}>Issue</label> 
          <label onClick={()=> {change_board("Profile")}}>My Profile</label>
        </div>
      </div>
      <div className="Dashboard">
        <Tab/>
        <div id="content">
          {(Option==="Home") && <Home/>}
          {(Option==="Notice") && <Notice/>}
          {(Option==="Issue") && <Issue/>}
          {(Option==="Profile") && <Profile/>}
        </div>
      </div>
    </div>
  )
}

export default Content
