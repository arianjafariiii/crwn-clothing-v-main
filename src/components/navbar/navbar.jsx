import React, {useEffect, useState} from 'react'
import logo from "../../assets/logo.png";
import "./navbar.css"

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, [])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="nav-logo" className='logo' />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn
          '>Contact Us</button></li>
        </ul>
      </nav>
  )
}
export default Navbar