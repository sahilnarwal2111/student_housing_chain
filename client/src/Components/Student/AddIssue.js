import React,{useContext, useState} from 'react'
import { DetailsContext } from '../Details';
const AddIssue = (props) => {
    const [editIssue,setEditIssue]=useState("");
    const {setDetails}=useContext(DetailsContext);
    const {details}=useContext(DetailsContext);
    const toggleWindow=() =>{
        props.setNewIssue((prev) => {
            prev=!prev;
        })
    }
    function func_editIssue(event){
        setEditIssue(event.target.value);
    }



    function uploadIssue(){
        let object ={
            _id:details._id,
            Name:details.Name,
            text:editIssue
        }

        fetch(process.env.REACT_APP_PORT+"getdata",{
            method:'POST',
            body:JSON.stringify({Name:details.Org}),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(
            response=>response.json()
          ).then(
            data=>{
              console.log(data);
      
              let temp_details=[...data._doc.hostels];
              console.log(temp_details);
              console.log(object);
              for(let i=0;i<temp_details.length;i++)
              {
                console.log("iterate");
                if(temp_details[i].Name === details.Hostel){
                  temp_details[i].issue=[object, ...temp_details[i].issue]
                  break;
                }
              }
              console.log(temp_details);
      
      
              fetch(process.env.REACT_APP_PORT+"updatehostel", {
                method: 'POST',
                body: JSON.stringify({ Name: details.Org, data: temp_details }),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(
                response => response.json()
              ).then(
                data => {
                  console.log("daTa -> ")
                  console.log(data);
                  
                  toggleWindow()
                }
              ).catch(
                err => console.log(err)
              )
      
      
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
        <textarea type="text" onChange={func_editIssue} style={{alignSelf:'center',height:'60vh'}} placeholder='Enter Issue here'/>
        <label className="btn-del" onClick={uploadIssue}>Upload</label>
        </div>
    </>
  )
}

export default AddIssue
