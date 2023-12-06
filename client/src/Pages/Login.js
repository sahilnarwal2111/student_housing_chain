import React, { useContext } from 'react';
import {useState,useEffect} from 'react';
import '../css/login.css';
import { DetailsContext } from '../Components/Details';
import {Link, useNavigate } from 'react-router-dom';

var organization_data=[];
fetch(process.env.REACT_APP_PORT+"getDetails",{
    method:'GET' 
}).then(
    response => response.json()
).then(
    data => {
        organization_data=data;
        console.log(organization_data);
    }
)

const Login = () => {
    const {setDetails}=useContext(DetailsContext);
    const navigate=useNavigate();
    const [matchOrg,setmatchOrg]=useState([]);
    const [totalHostel,setTotalHostel]=useState([]);
    const [selectOrg,setSelectedOrg]=useState("");
    const [matchHostel,setMatchHostel]=useState([]);
    const [selectHostel,setSelectHostel]=useState("");
    const [userid,setUserid]=useState("");
    const [password,setPassword]=useState("");
    const [invalid,setInvalid]=useState(false);
    // useEffect(() =>
    // {
        
   // },[])
    function checkOrg(event)
    {
        let input=event.target.value;
        input=input.toLowerCase().replace(/\s+/g, ' ')
        setSelectedOrg(input);

        let temp=[]
        for(let i=0;i<organization_data.length;i++)
        {
            if(organization_data[i].Name.toLowerCase() === input.trim())
            {
                //console.log("changed to object");
                setTotalHostel(organization_data[i].hostels);

                setSelectedOrg(organization_data[i].Name);
                temp=[organization_data[i]]
                setmatchOrg(organization_data[i])
                break;
            }
            else{
                setTotalHostel([]);
            }
            if(organization_data[i].Name.trim().includes(input) || input==="")
            {
                temp=[...temp,organization_data[i]];
            }
        }
        // console.log("inside func call")
        // console.log(temp);
        // console.log("outside")
        setmatchOrg(temp);
    }




    function checkUser(event){
        let input = event.target.value;
        setUserid(input);
    }
    function checkPass(event){
        let input=event.target.value;
        setPassword(input);
    }




    function submit(e)
    {
        e.preventDefault();
        // console.log(selectOrg,selectHostel,userid,password)
        // console.log("submit chicked...");
        // console.log(matchOrg)
        if(matchOrg.length !== 1) 
        {
            // more than 1 data
            console.log(matchOrg.length)
            console.log('wrong place')
            setInvalid(true);
            return;
        }
        if(userid==='admin')
        {
            if(selectHostel==="")
            {
                console.log("in admin")
                console.log(matchOrg[0].Password)

                if(password === matchOrg[0].Password)
                {
                    //console.log("to transfer");
                    let toTransfer= {...matchOrg[0]};
                    delete toTransfer.Password;
                    setDetails({...toTransfer});
                    navigate("/admin");
                }
                else{

                }
            }else{
                if(matchHostel.length !== 1)
                {
                    console.log(matchHostel.length)
                    console.log('wrong place hostel')
                    setInvalid(true);
                    return;
                }
                if(password === matchOrg[0].Password)
                {
                    //console.log("to transfer");
                    let toTransfer= {...matchHostel[0],Org:matchOrg[0].Name};
                    delete toTransfer.Password;
                    setDetails({...toTransfer});
                    navigate("/manager");
                }
            }
        }
        else if(userid==="manager")
        {
            if(matchHostel.length !== 1)
            {
                console.log(matchHostel.length)
                console.log('wrong place hostel')
                setInvalid(true);
                return;
            }
            if(password === matchHostel[0].Password )
            {
                //console.log("to transfer");
                let toTransfer= {...matchHostel[0],Org:matchOrg[0].Name};
                delete toTransfer.Password;
                setDetails({...toTransfer});
                navigate("/manager");
            }
            else{

            }
        }
        else {
            if(matchHostel.length !== 1)
            {
                console.log(matchHostel.length)
                console.log('wrong place hostel')
                setInvalid(true);
                return;
            }
            else{
                for(let i=0;i<matchHostel[0].students.length;i++)
                {
                    if(matchHostel[0].students[i]._id === userid && matchHostel[0].students[i].Password === password)
                    {
                        let object={Org:matchOrg[0].Name, Hostel:matchHostel[0].Name, ...matchHostel[0].students[i]};
                        console.log(object);
                        setDetails({...object});
                        navigate("/student");
                    }
                }
            }
        }
        console.log("here");
        setInvalid(true);
    }

    function checkHostel(event)
    {
        let input=event.target.value;
        input=input.toLowerCase().replace(/\s+/g, ' ');
        setSelectHostel(input);
        
        if(totalHostel.length === 0 || input=== ""){
            setMatchHostel([]);
            return;
        }
        let temp=[]
        for(let i=0;i<totalHostel.length;i++)
        {
            if(totalHostel[i].Name.toLowerCase().includes(input))
            {
                temp=[...temp,totalHostel[i]];
            }  
        }
        setMatchHostel(temp);
        console.log("jere");
        

    }
    console.log(matchOrg);
    console.log(matchHostel);
    return (
    <div className="containerLogin">
        <div className="login">
            <div className='form'>
                <h1 className="startHeader">Student Housing Chain</h1>
                <form autoComplete="off" className='loginInputs' onSubmit={submit}>
                    <label><h3><u>Login</u></h3></label>
                    <input id="org" type="text"  value={selectOrg} onChange={checkOrg} placeholder="Enter Organization Name"/>
                    <div className="pos-rel"> 
                        <div className="search-list zIndex2">
                            {Object.values(matchOrg).map((item) => {
                                console.log("search")
                                console.log(item)
                                if(selectOrg !== matchOrg[0].Name)
                                return (
                                    <>
                                    
                                    <label key={item.Name} onClick={()=>{
                                        setTotalHostel(item.hostels);
                                        setSelectedOrg(item.Name);
                                        setmatchOrg([item])
                                     }}>{item.Name}</label>
                                     </>
                                )
                            })}
                        </div>
                    </div>
                    <input id="hostel" type="text" value={selectHostel} onChange={checkHostel} placeholder="Enter Hostel ID"/>
                    <div className="pos-rel">
                        <div className="search-list zIndex1">
                            {Object.values(matchHostel).map((item) => {
                                if(selectHostel !== item.Name)
                                return (
                                    <>
                                    <label key={item.Name} onClick={()=>{
                                        setSelectHostel(item.Name);
                                        setMatchHostel([item])
                                    }}>{item.Name}</label>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <input id="userId" type="text" value={userid} onChange={checkUser} placeholder="User ID"/>
                    <input id="pass" type="password" value={password} onChange={checkPass} placeholder="Password"/>
                    <p>
                    {invalid && (<b style={{color:"red"}}>*Invalid Credentials....</b>)}
                    </p>
                    <input type="submit" id="submit" onClick={submit} placeholder="Submit"/>
                    
                </form>
                <Link to="/signup" style={{alignSelf:"center", fontSize:"medium"}}>Create a new Hostel Chain?</Link>
            </div>
        </div>
    </div>
  )
}

export default Login
