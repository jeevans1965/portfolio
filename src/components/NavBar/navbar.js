import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='destopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Home</Link>
            <Link className='destopMenuListItem' activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
            <Link className='destopMenuListItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Education</Link>
            <Link className='destopMenuListItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        </div>
        <button className='destopMenuBtn'>
            <img src={contactImg} alt='' className='destopMenuImg'/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar
