import React, { useContext } from 'react';
import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
const Issue = () => {
  const {details}=useContext(DetailsContext);
  return (
    <>
      {(details !== "") && <DataBox dataspread={false} del={false} data={details.appeal}/>}
    </>
  )
}

export default Issue
