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
    <div className="containerLogin">
        <div className="login">
            <div className='form' onSubmit={submit}>
                <h1 className="startHeader">Student Housing Chain</h1>
                <form className='loginInputs' action={()=>submit()}>
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
                    <input type="submit" id="submit" placeholder="Submit"/>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
