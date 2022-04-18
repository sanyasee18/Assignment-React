import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navbar Component
 * @returns Navbar
 */

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>
        <NavLink to="/">ExtremeCars</NavLink>
      </h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
