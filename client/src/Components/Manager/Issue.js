import React,{useContext} from 'react'
import { DetailsContext } from '../Details';
import DataBox from '../DataBox';
const Issue = (props) => {
  const {details}=useContext(DetailsContext);
  return (
    <>
      {(details !== "") && <DataBox dataspread={true} del={false} data={details.issue}/> }
    </>
  )
}

export default Issue
