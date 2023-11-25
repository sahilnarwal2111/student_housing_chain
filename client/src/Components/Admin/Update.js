import React, { useState } from 'react'
import AddHostel from './AddHostel';
import DataBox from '../DataBox';
let data=null;
const Update = () => {
  const [newStu,setNewStu]=useState(false);
  
  function openWindow(){
    setNewStu(!newStu);
  }
  return (
    <>
      {newStu && <AddHostel setNewStu={setNewStu}/>}
      <div className="add-btn">
        <label onClick={openWindow}>+</label>
      </div>
      <DataBox data={data}/>
    </>
  )
}

export default Update
