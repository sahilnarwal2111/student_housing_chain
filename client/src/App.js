import React from 'react'
import './css/App.css';
import './css/mainLayout.css';
import Manager from "./Pages/Manager";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";

function App() {
  let i=3;
  return (
    <div>
    {(i===1) && <Student/>}
    {(i===2) && <Manager/>}

    {(i===3) && <Admin/>}
    </div>
  );
}

export default App;
