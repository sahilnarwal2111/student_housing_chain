import React,{useState,useContext} from 'react';
import DataBox from '../DataBox';
import {DetailsContext} from '../Details';
const Home = () => {
  const {details} = useContext(DetailsContext);
  const [temp_details,setTempDetails]=useState(details);
  return (
    <>
      {console.log("home")}
      {console.log(details)}
      {(details !== "") && <DataBox dataspread={true} del={false} data={details.students}/>}
    </>
  )
}

export default Home
