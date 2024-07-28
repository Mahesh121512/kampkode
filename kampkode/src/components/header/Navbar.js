import React from 'react';
import './Navbar.css'; // Correct relative path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <span className="blue">N</span>
        <span className="black">A</span>
        <span className="blue">V</span>
        <span className="black">B</span>
        <span className="black">A</span>
        <span className="black">R</span>
      </div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Products &#9662;</li>
        <li>Resources &#9662;</li>
        <li>Pricing</li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
