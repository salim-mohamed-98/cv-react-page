import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="nav-bar" aria-label="Top level navigations">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bio">Bio</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/wcag">Wcag</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
