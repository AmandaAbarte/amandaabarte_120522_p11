import React from "react";
import { NavLink } from "react-router-dom";
import pinklogo from "../Assets/pinklogo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/"><img src={pinklogo} className="logo"></img></NavLink>
        <ul>
          <li><NavLink className='nav-link' to="/" >Home</NavLink></li>
          <li><NavLink className='nav-link' to="/about">About</NavLink></li>
        </ul>
      </nav>
      
    </header>
  );
}
