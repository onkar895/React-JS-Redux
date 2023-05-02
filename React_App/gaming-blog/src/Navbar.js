import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'Black' : ' ',
      color: isActive ? 'White' : 'Black ',
      borderRadius: isActive ? '5px' : ' '

    }
  }

  return (
    <nav className='Navbar'>
      <h1>Gaming Blog</h1>
      <div className='links'>
        <NavLink style={navLinkStyle} to='/home'>
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to='/blog'>
          Blog
        </NavLink>
        <NavLink style={navLinkStyle} to='/about'>
          About Us
        </NavLink>
        <NavLink style={navLinkStyle} to='/contact'>
          Contact Us
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
