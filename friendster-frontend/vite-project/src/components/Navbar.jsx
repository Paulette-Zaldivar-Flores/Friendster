import React from 'react';
import Logo from '../assets/Friendster.png'



function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={Logo} alt="Logo"  className='logo'/>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
