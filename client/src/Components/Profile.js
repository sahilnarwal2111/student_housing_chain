import React,{useContext, useState} from 'react'
import { DetailsContext } from './Details';
import DataWindow from './DataWindow';
import DataBox from './DataBox';
const Profile = () => {
  const {details} = useContext(DetailsContext);
  console.log("IN PROFILE");
  console.log(details);
  return (
    <>
      <DataWindow dataspread={true} details={details}/>
    </>
  )
}

export default Profile
