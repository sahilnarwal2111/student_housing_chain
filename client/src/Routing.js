import React from "react";
import {
    Routes as Switch,
    Route
  } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Admin from './Pages/Admin';
import Manager from './Pages/Manager';

const Routing = () => {
  return (
    <Switch>
         <Route exact path="/" element={<Login/>}/>      {/* for temporary uses */}
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/manager" element={<Manager/>}/>
    </Switch>
  )
}

export default Routing