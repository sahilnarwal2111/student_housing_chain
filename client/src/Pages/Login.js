import React from 'react';
import '../css/login.css';
const Login = () => {
  return (
    <div className="container">
        <div className="login">
            <form>
                <input id="org" type="text" placeholder="Select Organization Name"/>
                <input id="hostel" type="text" placeholder="Select Hostel ID"/>
                <input id="id" type="text" placeholder="User ID"/>
                <input id="pass" type="password" placeholder="Password"/>
            </form>
        </div>
    </div>
  )
}

export default Login
