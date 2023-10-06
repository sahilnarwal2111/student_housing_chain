import React from 'react'

function changemode(color){
    const content=document.getElementById('content');
    content.style.backgroundColor=color;
    if(color==='#282c34')
    {
      content.style.color="white";
    }
    else{
      
      content.style.color="black"; 
    }
    
  }

const Tab = (props) => {
    
    return (
        <div className="Tab">
          <label> {props.type} </label>
          <label> <img src="./img/dark-mode.jpg" alt="" onClick={()=>{changemode("#282c34")}}/> </label>
          <label> <img src="./img/mode-light.png" alt="" style={{height:"30px",width:"30px"}} onClick={()=>{changemode("white")}}/> </label>
          <label> <img src="./img/aqua.png" alt="" onClick={()=>{changemode("aqua")}}/> </label>
        </div>
    )
}

export default Tab
