import React,{useContext,useState,useEffect} from 'react'

import DataBox from '../DataBox';
import { DetailsContext } from '../Details';
const Notice = (props) => {
  const {details}=useContext(DetailsContext);
  const [toShow,setToShow]=useState([]);
  
  useEffect(()=>{
    function getData()
    {
      fetch(process.env.REACT_APP_PORT+"getdata",{
        method:'POST',
        body:JSON.stringify({Name:details.Org}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(
        response=>response.json()
      ).then(
        data=>{
          console.log(data);
          let temp_details=[...data._doc.hostels];
          console.log(temp_details);
          for(let i=0;i<temp_details.length;i++)
          {
            console.log("iterate");
            if(temp_details[i].Name === details.Hostel){
              console.log(temp_details[i].notice);
              setToShow([...temp_details[i].notice]);
              break;
            }
          }

        }
      ).catch(
        err => console.log(err)
      )
    }
    getData();
    setInterval(getData,20000);
    console.log(toShow);
  },[])


  

  return (
    <>
      <DataBox dataspread={false} del={false} data={toShow}/>
    </>
  )
}

export default Notice
