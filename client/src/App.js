import React from 'react'
import './css/App.css';
import './css/mainLayout.css';
import Manager from "./Pages/Manager";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";

import Login from "./Pages/Login";

function App() {
  let i=1;
  return (
    <div>
    {/* {(i===1) && <Student/>}
    {(i===2) && <Manager/>}

    {(i===3) && <Admin/>} */}
      <Login/>
    </div>
  );
}

export default App;
