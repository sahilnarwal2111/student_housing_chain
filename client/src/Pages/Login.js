import React from 'react';
import {useState} from 'react';
import '../css/login.css';



const Login = () => {
    const [org,setOrg]=useState("try");
    const [hostel,setHostel]=useState();
    
    
    function checkOrg(event)
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
    <div className="container">
        <div className="login">
            <div className='form' onSubmit={submit}>
                <h1 className="startHeader">Student Housing Chain</h1>
                <form className='loginInputs' action={()=>submit()}>
                    <div>
                        <input id="org" type="text" onChange={checkOrg} placeholder="Enter Organization Name"/>
                        <select id="secOrg"></select>
                    </div>
                    <div>
                        <input id="hostel" type="text" onChange={checkHostel} placeholder="Enter Hostel ID"/>
                        <select id="secHostel">
                        </select>
                    </div>
                    <div>
                        <input id="userId" type="text" placeholder="User ID"/>
                    </div>
                    <div>
                    <input id="pass" type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" id="submit" placeholder="Submit"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
