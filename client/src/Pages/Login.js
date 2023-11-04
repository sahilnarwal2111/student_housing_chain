import React from 'react';
import {useState} from 'react';
import '../css/login.css';

import { Link } from 'react-router-dom';

const Login = () => {
    const [org,setOrg]=useState([]);
    
    fetch("http://localhost:5000/getDetails",{
        method:'GET' 
    }).then(
        response => response.json
    ).then(
        data => {
            console.log(data);
          }
    )
    async function checkOrg(event)
    {
        console.log(event.target.value);
        setOrg(event.target.value);
    }
    function submit(e)
    {
        e.preventDefault();
        console.log("submit chicked...");
    }
    function checkHostel(event)
    {
        console.log(event.target.value);
    }


    return (
    <div className="containerLogin">
        <div className="login">
            <div className='form'>
                <h1 className="startHeader">Student Housing Chain</h1>
                <form className='loginInputs' onSubmit={submit}>
                    <label><h3><u>Login</u></h3></label>
                    <div className="selection">
                        <input id="org" type="text" onChange={checkOrg} placeholder="Enter Organization Name"/>
                        <ul>
                            <li>Hello World</li>
                            <li>Hello World</li>
                        </ul>
                    </div>
                    <div className="selection">
                        <input id="hostel" type="text" onChange={checkHostel} placeholder="Enter Hostel ID"/>
                        <ul>
                            <li>Hello World</li>
                            <li>Hello World</li>
                            <li>Hello World</li>
                        </ul>
                    </div>
                    <input id="userId" type="text" placeholder="User ID"/>
                    <input id="pass" type="password" placeholder="Password"/>
                    <input type="submit" id="submit" onClick={submit} placeholder="Submit"/>
                    
                </form>
                <Link to="/signup" style={{alignSelf:"center", fontSize:"medium"}}>Create a new Hostel Chain?</Link>

            </div>
        </div>
    </div>
  )
}

export default Login
