import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import Content from '../Components/Admin/Content';
import DetailsProvider from '../Components/Details';
const Admin = () => {
  const data=useLocation();
  console.log(data.state);
  return (
    <div className="container">
        <Header/>
          <Content data={data.state}/>
        <Footer/>
    </div>
  )
}

export default Admin
