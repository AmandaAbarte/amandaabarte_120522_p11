import React from "react";

import background from "../Assets/Background.png";
import pinklogo from "../Assets/pinklogo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={pinklogo} className="logo"></img>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="heading">
          <img src={background}></img>
          <p>Home Anywhere and Everywhere</p>
      </div>
    </header>
  );
}
