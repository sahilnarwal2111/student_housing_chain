import React,{useContext, useState} from 'react'
import { DetailsContext } from './Details';
import DataBox from './DataBox';
const Profile = () => {
  const {details} = useContext(DetailsContext);
  console.log("IN PROFILE");
  console.log(details);
  return (
    <>
      <p>{details.Name}</p>
      
    </>
  )
}

export default Profile
