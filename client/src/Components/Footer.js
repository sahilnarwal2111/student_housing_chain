import React from 'react'
import {useState, useEffect} from 'react';
const Footer = () => {
  const [testingBackend,setTestingBackend] =useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api",{ method:'POST'}).then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setTestingBackend(data)
        console.log("HI"+testingBackend)
      }
    )
  },[])
  return (
    <footer>
      <p>
      {(typeof testingBackend.users === 'undefined') ? (<p>Loading</p>) : ( testingBackend.users.map((user,i) =>{
        return  (<>{user+" "}</>) 
      }))}
      </p>
    </footer>
  )
}

export default Footer
