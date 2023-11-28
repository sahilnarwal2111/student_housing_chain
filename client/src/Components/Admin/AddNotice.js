import React, { useState,useContext } from 'react'
import {DetailsContext} from '../Details';
const AddNotice = (props) => {

    const {details}=useContext(DetailsContext);
    const {setDetails}=useContext(DetailsContext);
    const [setNotice,setSetNotice] =useState(""); 
    const toggleWindow=() =>{
        props.setNewNotice((prev) => {
            prev=!prev;
        })
    }
  function editNotice(event){
    setSetNotice(event.target.value);
  }

  function uploadNotice(event)
  {
    let input = setNotice;
    console.log("on function");
    console.log(input);
    let temp_notice=[...details.notice,input];
    fetch("http://localhost:5000/updateNotice", {
          method: 'POST',
          body: JSON.stringify({ Name: details.Name, data: temp_notice }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(
          response => response.json()
        ).then(
          data => {
            console.log("daTa -> ")
            console.log(data);
            let temp_details = details;
            temp_details.notice = temp_notice;
            setDetails({ ...temp_details });
            toggleWindow()
          }
        ).catch(
          err => console.log(err)
        )
  }
  return (
    <>
      <div className="new-window"></div>
      <div className="data-window">
        <div className="close-menu" onClick={toggleWindow}> <label>X</label></div>
        <textarea type="text" onChange={editNotice} style={{alignSelf:'center',height:'60vh'}} placeholder='Enter text here'/>
        <label className="btn-del" onClick={uploadNotice}>Upload</label>
      </div>
    </>
  )
}

export default AddNotice
