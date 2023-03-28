import React from "react";
import "./Style.css";
import { Link} from "react-router-dom";

function Navbar() {
  
  const handleLogout=()=>{
    localStorage.setItem('status', '')

}
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>

    <button onClick={handleLogout}>Logout</button>

        
      </ul>
    </div>
  );
}

export default Navbar;