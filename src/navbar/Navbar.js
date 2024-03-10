import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="Navbar-container">
      <div className="Navbar-left">
        <h3>SoulFull</h3>
      </div>
      <div className="Navbar-right">
        <Link to={{ pathname: "/journal" }}>Journal</Link>
        <Link to={{ pathname: "/" }}>Consult</Link>
        <Link to={{ pathname: "/doctors" }}>Doctors</Link>
        <a href="#" className="login">
          Login{" "}
        </a>
        <div className="Navbar-Login"></div>
      </div>
    </div>
  );
}

export default Navbar;
