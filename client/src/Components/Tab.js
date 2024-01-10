import React,{useState,useEffect} from 'react'



const Tab = (props) => {
    const [darkMode,setDarkMode]=useState(false);
      useEffect(()=>{

          const content=document.getElementById('content');
          if(!darkMode)
          {
            content.style.background="white";
            content.style.color="black";
          }
          else{
            content.style.background="#282c34";
            content.style.color="white"; 
          }
        }
      ,[darkMode]);
      

    return (
        <div className="Tab">
          <label> {props.type} </label>
          {!darkMode && <label> <img src="./img/dark-mode.jpg" alt="" onClick={()=>{setDarkMode(true)}}/> </label>}
          {darkMode && <label> <img src="./img/mode-light.png" alt="" onClick={()=>{setDarkMode(false)}}/> </label>}
        </div>
    )
}

export default Tab
