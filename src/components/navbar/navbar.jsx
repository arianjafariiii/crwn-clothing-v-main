import React, {useEffect, useState} from 'react'
import logo from "../../assets/logo.png";
import {Link} from "react-scroll";
import "./navbar.css";
import menu_Icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);
    const [isMobleMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMenu = () => {
      setIsMobileMenuOpen(!isMobleMenuOpen);
    }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="nav-logo" className='logo' />
        <ul className={isMobleMenuOpen ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500} >Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} >About  Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
          
        </ul>
        <img src={menu_Icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </nav>
  )
}
export default Navbar