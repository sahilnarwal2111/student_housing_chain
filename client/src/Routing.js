import React from "react";
import {
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const Routing = () => {
  return (
    <Switch>
         <Route path="/" element={<Login/>}/>      {/* for temporary uses */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
    </Switch>
  )
}

export default Routing