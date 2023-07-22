// Navbar.js

import React from "react";
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="header-buttons">
        <button type='button' className="button-common">
          Home
        </button>
        <button type='button' className="button-common">
          Profile
        </button>
        <button type='button' className="button-common">
          Contact
        </button>
      </div>
    </header>
  );
}

export default Navbar;
