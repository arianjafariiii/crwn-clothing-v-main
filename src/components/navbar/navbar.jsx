import React from 'react'
import logo from "../../assets/logo.png";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="nav-logo" className='logo' />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact Us</button></li>
        </ul>
      </nav>
  )
}
export default Navbar