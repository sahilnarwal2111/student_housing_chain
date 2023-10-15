import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './css/App.css';
import './css/mainLayout.css';
import Manager from "./Pages/Manager";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";
import Routing from './Routing';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  let i=1;
  return (
    
    <div>
      <Routing/>
    {/* {(i===1) && <Student/>}
    {(i===2) && <Manager/>}

    {(i===3) && <Admin/>} */}
    </div>
  );
}

export default App;
