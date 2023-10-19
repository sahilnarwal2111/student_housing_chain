import React from 'react'
import DataBox from './DataBox';
const Profile = (props) => {
  console.log("IN PROFILE");
  console.log(props.data.Name);
  return (
    <>
      <p>{props.data.Name}</p>
      
    </>
  )
}

export default Profile
