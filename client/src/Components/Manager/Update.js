import React, { useContext,useState } from 'react'
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
import AddStudent from './AddStudent';

const Update = (props) => {
  
  const [newStu,setNewStu]=useState(false);
  const {details}=useContext(DetailsContext);
  const {setDetails}=useContext(DetailsContext);
  

  function openWindow(){
    setNewStu(!newStu);
  }

  function delStudent()
  {

  }
  
  return (
    <>
      {newStu && <AddStudent setNewStu={setNewStu}/>}
      <div className="add-btn">
        <label onClick={openWindow}>+</label>
      </div>
      <DataBox dataspread={true} del={true} delFunc={delStudent} data={details.students}/>
    </>
  )
}

export default Update
