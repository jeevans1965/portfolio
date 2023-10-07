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
            <Link className='destopMenuListItem'>Home</Link>
            <Link className='destopMenuListItem'>About</Link>
            <Link className='destopMenuListItem'>Portfolio</Link>
            <Link className='destopMenuListItem'>Clients</Link>
        </div>
        <button className='destopMenuBtn'>
            <img src={contactImg} alt='' className='destopMenuImg'/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar
