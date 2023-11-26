import React, { useContext, useState } from 'react'
import AddHostel from './AddHostel';
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
let data=null;
const Update = () => {
  const [newStu,setNewStu]=useState(false);
  const {details} = useContext(DetailsContext);

  
  function openWindow(){
    setNewStu(!newStu);
  }
  return (
    <>
      {newStu && <AddHostel setNewStu={setNewStu}/>}
      <div className="add-btn">
        <label onClick={openWindow}>+</label>
      </div>
      <DataBox data={details.hostels}/>
    </>
  )
}

export default Update
