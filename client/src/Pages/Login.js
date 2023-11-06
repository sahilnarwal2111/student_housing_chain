import React from 'react';
import {useState} from 'react';
import '../css/login.css';

import { Link } from 'react-router-dom';

const Login = () => {
    const [matchOrg,setmatchOrg]=useState([]);
    var organization_data=[];
    fetch("http://localhost:5000/getDetails",{
        method:'GET' 
    }).then(
        response => response.json()
    ).then(
        data => {
            organization_data=data;
            console.log(organization_data);
          }
    )
    function checkOrg(event)
    {
        let input=event.target.value;
        input=input.toLowerCase();
        let temp=[]
        for(let i=0;i<organization_data.length;i++)
        {
            if(organization_data[i].Name.toLowerCase().includes(input) || input==="")
            {
                temp=[...temp,organization_data[i].Name];
            }
        }
        setmatchOrg(temp);
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
                    <input id="org" type="text" onChange={checkOrg} placeholder="Enter Organization Name"/>
                    
                    <div className="search-list">
                        {Object.values(matchOrg).map((item) => {
                            return (
                                <>
                                {item}<br/>
                                </>
                            )
                        })}
                    </div>
                    <input id="hostel" type="text" onChange={checkHostel} placeholder="Enter Hostel ID"/>
                    <div className="search-list">
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
