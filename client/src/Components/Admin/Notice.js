import React,{useState} from 'react'
import AddNotice from './AddNotice';
import DataBox from '../DataBox';
let data=[];
const Notice = (props) => {

  const [newNotice,setNewNotice]=useState(false);
  return (
    <>
      {newNotice && <AddNotice setNewNotice={setNewNotice}/>}
      <div className="add-btn">
        <label onClick={()=> setNewNotice(true)}>+</label>
      </div>
      <DataBox data={data}/>
    </>
  )
}

export default Notice
