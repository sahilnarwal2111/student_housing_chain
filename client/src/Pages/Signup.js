import React from 'react';
import {useState} from 'react';
import '../css/login.css';



const Signup = () => {
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
                        <input id="org" type="text" placeholder="Enter Organization Name"/>
                    </div>
                        <input id="pass" type="password" placeholder="Enter Password"/>
                    
                        <input id="confirmpass" type="password" placeholder="Confirm Password"/>
                    
                    <input id="contact" type="text" placeholder="Enter Contact No."/>
                    
                        <input id="org" type="text" placeholder="Enter Organization Name"/>
                    
                        <input id="pass" type="password" placeholder="Enter Password"/>
                    
                        <input id="confirmpass" type="password" placeholder="Confirm Password"/>
                    
                    <input id="contact" type="text" placeholder="Enter Contact No."/>
                    
                        <input id="org" type="text" placeholder="Enter Organization Name"/>
                    
                        <input id="pass" type="password" placeholder="Enter Password"/>
                    
                        <input id="confirmpass" type="password" placeholder="Confirm Password"/>
                    
                    <input id="contact" type="text" placeholder="Enter Contact No."/>
                    
                    <input type="submit" id="submit" placeholder="Submit"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
