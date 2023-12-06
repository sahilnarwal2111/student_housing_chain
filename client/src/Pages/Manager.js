import React, { useContext,useEffect } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { DetailsContext } from '../Components/Details';
import Content from '../Components/Manager/Content';

const Manager = () => {

  const {details}=useContext(DetailsContext);
  const {setDetails}=useContext(DetailsContext);

  useEffect(() => {
    function getData() {
      console.log(details)
      if (details !== undefined && details !== null && details!=="")
        fetch(process.env.REACT_APP_PORT+"getdata", {
          method: 'POST',
          body: JSON.stringify({ Name: details.Org }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(
          response => response.json()
        ).then(
          data => {
            console.log("daTa -> ")
            console.log(data._doc);
            let temp_details = data._doc;
            let object={
              Org:temp_details.Name
            }
            console.log("result...");
            console.log(temp_details);
            for(let i=0;i<temp_details.hostels.length;i++)
            {
              if(temp_details.hostels[i].Name===details.Name)
              {
                object={...temp_details.hostels[i], ...object}
                break;
              }
            }
            console.log("object is here ...")
            console.log(object);
            if (temp_details !== null && temp_details !== undefined) { setDetails({ ...object }) }
          }
        ).catch(
          err => console.log(err)
        )
    }
    setInterval(getData, 10000)
  }, []);



  return (
    <div className="container">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Manager
