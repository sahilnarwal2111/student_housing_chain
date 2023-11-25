import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from '../Components/Admin/Content';
import DetailsProvider from '../Components/Details';
const Admin = () => {
  return (
    <div className="container">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Admin
