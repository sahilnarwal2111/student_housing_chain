import React,{useContext,useState} from 'react'

import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
import AddNotice from './AddNotice';
const Notice = (props) => {
  const {details}=useContext(DetailsContext);
  const [newNotice,setNewNotice]=useState(false);
  const {setDetails}=useContext(DetailsContext);
  

  function delNotice(item){

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
