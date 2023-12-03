import React from 'react'
import {useState} from 'react';
import Home from './Home';
import Notice from './Notice';
import Issue from './Issue';
import Update from './Update';
import Profile from '../Profile';
import Tab from '../Tab';


let prev="Home";
const Content = (props) => {


    const [Option, setOption] = useState("Home");



    function change_board(type) {
        const dark=document.getElementById(type);
        dark.style.backgroundColor='black';

        //console.log("prev "+prev);
        if(prev !== type){
        const previous=document.getElementById(prev);
        previous.style.removeProperty("background-color");
        prev=type;
        }

        console.log(type);
        setOption(type);
        console.log("Option -> " + Option)
    }

    return (

        <div className="main" >
            <div className="Navbar">
                <div className="Menu">
                    <label id="Home" style={{backgroundColor:'black'}} onClick={() => { change_board("Home") }}>Home</label>
                    <label id="Notice" onClick={() => { change_board("Notice") }}>Notice</label>
                    <label id="Issue" onClick={() => { change_board("Issue") }}>Issue</label>
                    <label id="Update" onClick={() => { change_board("Update") }}>Update</label>
                    <label id="Profile" onClick={() => { change_board("Profile") }}>Profile</label>
                </div>
            </div>
            <div className="Dashboard">
                <Tab type="Manager"/>
                <div id="content">
                    {(Option === "Home") && <Home />}
                    {(Option === "Notice") && <Notice />}
                    {(Option === "Issue") && <Issue />}
                    {(Option === "Update") && <Update />}
                    {(Option === "Profile") && <Profile />}
                </div>
            </div>
        </div>
    )
}

export default Content
