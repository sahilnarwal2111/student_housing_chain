import React,{useContext, useState} from 'react'
import AddNotice from './AddNotice';
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
let data=[];
const Notice = (props) => {
  const {details}=useContext(DetailsContext);
  const [newNotice,setNewNotice]=useState(false);
  const {setDetails}=useContext(DetailsContext);
  
  
  
  
  function delNotice(item){
    console.log("delete here...")
    let temp_notice=details.notice;
    let index=temp_notice.indexOf(item);
    if(index !==-1)
    {
      temp_notice.splice(index,1);
    }
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

            let temp_details=details;
            temp_details.notice=temp_details.notice;
            console.log(data);
            setDetails({...temp_details});
          }
        ).catch(
          err => console.log(err)
        )
  }


  return (
    <>
      {newNotice && <AddNotice setNewNotice={setNewNotice}/>}
      <div className="add-btn">
        <label onClick={()=> setNewNotice(true)}>+</label>
      </div>
      <DataBox dataspread={false} del={true} delFunc={delNotice} data={details.notice}/>
    </>
  )
}

export default Notice
