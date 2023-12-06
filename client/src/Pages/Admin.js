import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from '../Components/Admin/Content';
import { DetailsContext } from '../Components/Details';
const Admin = () => {

  const { details } = useContext(DetailsContext);
  const { setDetails } = useContext(DetailsContext);


  useEffect(() => {
    function getData() {
      console.log(details)
      if (details !== undefined && details !== null && details!=="")
        fetch(process.env.REACT_APP_PORT+"getdata", {
          method: 'POST',
          body: JSON.stringify({ Name: details.Name }),
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

            if (temp_details !== null && temp_details !== undefined) { setDetails({ ...temp_details }) }
          }
        ).catch(
          err => console.log(err)
        )
    }
    setInterval(getData, 10000)
  }, []);

  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Admin
