import React from 'react';
import {useState,useContext} from 'react';
import '../css/login.css';
import {Link,useNavigate} from 'react-router-dom'; 
import Admin from './Admin';
import { DetailsContext } from '../Components/Details';

var organization_data=[];
console.log("fetching data...")
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

const Signup = () => {
    const navigate=useNavigate();
    const [org,setOrg]=useState([]);
    const [newOrg,setnewOrg]=useState(false);
    const [invalid,setInvalid]=useState();
    const {setDetails}=useContext(DetailsContext);
    function checkOrg(event)
    {
        console.log(event.target.value);
        console.log(newOrg);
        let input=event.target.value;
        if(input === "") 
        {
            setnewOrg(false);
            return;
        }
        for(let i=0;i<organization_data.length;i++)
        {
            if(organization_data[i].Name.toLowerCase().trim().replace(/\s+/g, ' ') === input.toLowerCase().trim().replace(/\s+/g, ' '))
            {
                setnewOrg(false);
                return;
            }
        }
        setnewOrg(true);
        
    }
    function Submit(e)
    {
        e.preventDefault();
        let new_entry={};
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
            new_entry={
                Name:orgName.value,
                Password:pass.value,
                Contact:contact.value,
                Email:email.value,
                hostels:[],
                Address:address.value
            }
            setInvalid("");
            let toTransfer;
            // let ipAdd="localhost";
            fetch("http://localhost:5000/getNewOrg",{ 
                method:'POST',
                body:JSON.stringify(new_entry),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(
              response => response.json()
            ).then(
              data => {
                console.log("daTa -> ")
                console.log(data);
                toTransfer={...data._doc};
                delete toTransfer.Password;

                setDetails({...toTransfer});
                navigate("/admin");
              }
            ).catch(
                err => console.log(err)
            )
        }
            
        


    }

    return (
    <div className="containerLogin">
        <div className="login">
            <div className='form' >
                <h1 className="startHeader">Student Housing Chain</h1>
                <form className='loginInputs' autoComplete='off' onSubmit={Submit}>
                        <label><h3><u>Sign Up</u></h3></label>
                        <input id="org" type="text" placeholder="Enter Organization Name" onChange={checkOrg}/>
                        <p style={{fontSize:"small",marginBottom:"-10px"}}>
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
                    <input type="submit" id="submit" value="Submit"/>
                    
                </form>
                <Link to="/login" style={{alignSelf:"center", fontSize:"medium"}}>Organization already exist?</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup
