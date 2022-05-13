import React from "react";
import { NavLink } from "react-router-dom";
import pinklogo from "../Assets/pinklogo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={pinklogo} className="logo"></img>
        <ul>
          <li><NavLink className='nav-link' to="/" >Home</NavLink></li>
          <li><NavLink className='nav-link' to="/about">About</NavLink></li>
        </ul>
      </nav>
      <div className="heading">
          {/* <img src={background}></img> */}
          <p>Home Anywhere and Everywhere</p>
      </div>
    </header>
  );
}
