import React from 'react'

function changemode(color){
    const content=document.getElementsByClassName('content');
    content.style.color=color;
}

const Tab = () => {
    
    return (
        <div className="Tab">
            <label> <img src="./img/dark-mode.jpg" onClick={()=>{changemode("yellow")}}/> </label>
            <label> <img src="./img/mode-light.png" style={{height:"30px",width:"30px"}}/> </label>
        </div>
    )
}

export default Tab
