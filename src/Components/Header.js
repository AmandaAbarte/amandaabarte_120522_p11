
import React from "react";

import background from '../Assets/Background.png'

export default function Header(){
    return(<header>
        <nav className="nav">
          <div className='logo'>KASA LOGO</div>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        <img src={background}></img>
        <p>Home Anywhere and Everywhere</p>
      </header>)
    
}