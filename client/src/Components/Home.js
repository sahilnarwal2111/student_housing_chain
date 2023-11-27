import React,{useContext} from 'react';
import DataBox from './DataBox';
import {DetailsContext} from './Details';
let data=[];
const Home = (props) => {
  const {details} = useContext(DetailsContext);
  
  return (
    <>
      <DataBox del={false} data={details.hostels}/>
    </>
  )
}

export default Home
