import React, { useContext, useState } from 'react'
import AddHostel from './AddHostel';
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
const Update = () => {
  const [newStu,setNewStu]=useState(false);
  const {details} = useContext(DetailsContext);
  const {setDetails} = useContext(DetailsContext);
  
  function openWindow(){
    setNewStu(!newStu);
  }
  function delHostel(item)
  {
    let temp_hostels=details.hostels;
    let index=details.hostels.findIndex(obj => obj.Name === item.Name);
    if(index !==-1)
    {
      details.hostels.splice(index,1);
    }
    console.log("removed from delHostel....")
    console.log(details.hostels);
    console.log(temp_hostels);
    fetch(process.env.REACT_APP_PORT+"hupdatehostel", {
          method: 'POST',
          body: JSON.stringify({ Name: details.Name, data: temp_hostels }),
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
            temp_details.hostels = temp_hostels;
            setDetails({ ...temp_details });
          }
        ).catch(
          err => console.log(err)
        )

  }


  return (
    <>
      {newStu && <AddHostel setNewStu={setNewStu}/>}
      <div className="add-btn">
        <label onClick={openWindow}>+</label>
      </div>
      <DataBox dataspread={true} del={true} delFunc={delHostel} data={details.hostels}/>
    </>
  )
}

export default Update
