import React from 'react';
import {useState} from 'react';
import '../css/login.css';
import {Link} from 'react-router-dom'; 

const Signup = () => {
    
    const [org,setOrg]=useState([]);
    const [newOrg,setnewOrg]=useState(false);
    const [invalid,setInvalid]=useState();
    const [details,setDetails]=useState({Name:""});
    function getAllOrg()
    {
        // import org from backend
    }
    function checkOrg(event)
    {
        console.log(event.target.value);
        console.log(newOrg);
        if(event.target.value === "harshit" || event.target.value === "")
        {
            setnewOrg(false);
        }
        else 
        {
            setnewOrg(true);
        }
        
    }
    function submit(e)
    {
        e.preventDefault();
        
        let orgName=document.getElementById("org");
        let pass=document.getElementById("pass");
        let confirmpass=document.getElementById("confirmpass");
        let email=document.getElementById("email");
        let contact=document.getElementById("contact");
        let address=document.getElementById("address");
        if(newOrg===false) 
        {
            setInvalid("*Org Name Not Available...")
        }
        else if(orgName.value==="" || pass.value==="" || confirmpass.value==="" || email.value==="" || contact.value==="" || address.value==="")
        {
            setInvalid("*Fill all the details properly...")
        }
        else if(pass.value!=confirmpass.value)
        {
            setInvalid("*Confirmation of Password is unsuccessful...")
        }
        else
        {
            let new_entry={
                Name:orgName.value,
                Password:pass.value,
                Contact:contact.value,
                Email:email.value,
                hostels:[],
                Address:address.value
            }
            setInvalid("");
            setDetails(new_entry);


        }
        


    }

    return (
    <div className="containerLogin">
        <div className="login">
            <div className='form' >
                <h1 className="startHeader">Student Housing Chain</h1>
                <form className='loginInputs' onSubmit={submit}>
                        <label><h3><u>Sign Up</u></h3></label>
                        <input id="org" type="text" placeholder="Enter Organization Name" onChange={checkOrg}/>
                        <p>
                        {newOrg===false && (<b style={{color:"red"}}> [X] Organization Name Unavailable Currently</b>)}
                        {newOrg===true && (<b style={{color:"brown"}}> [O] Organzation Name Available</b>)}
                        </p>
                        <input id="pass" type="password" placeholder="Enter Password"/>
                        <input id="confirmpass" type="password" placeholder="Confirm Password"/>
                        <input id="contact" type="text" placeholder="Enter Contact No."/>
                        <input id="email" type="email" placeholder="Enter Email"/>
                        <textarea id="address" className="min-height-3" type="text" placeholder="Enter Address"/>
                        <p> 
                            <b>*All details are compulsary</b> <br/>
                            <b>*Note that organization main ID is predefined i.e. admin.</b><br/>
                            <b style={{color:"red"}}>{invalid}</b>
                         </p>
                    <input type="submit" id="submit" placeholder="Submit"/>
                    
                </form>
                <Link to="/login" style={{alignSelf:"center", fontSize:"medium"}}>Organization already exist?</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup
