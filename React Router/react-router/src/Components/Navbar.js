import React from 'react'
// import { Link } from 'react-router-dom'
// Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authentication'

// 1. By using Link:

//  So Link component recieves anchor tag <a> </a>  by default.  So u can add css like  nav a { }
//  To check is it anchor tag or not go to the inspect and check if it is <a> </a>  or not.

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to='/'> Home
//       </Link>
//       <Link to='/about'> About
//       </Link>
//     </nav>
//   )
// }

// export default Navbar

//  2. By using navLink:

//  So Navlink component recieves active class by default when the link is a current route.
//  To check is it active class or not go to the inspect and chack if it is active or not.

// const Navbar = () => {
//   return (
//     <nav>
//       <NavLink to='/'>
//         Home
//       </NavLink>
//       <NavLink to='/about'>
//         About
//       </NavLink>
//       <NavLink to='/contact'>
//         Contact
//       </NavLink>
//     </nav>
//   )
// }

// export default Navbar

// By using style props:
const Navbar = () => {

  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'White' : ' ',
      color: isActive ? 'Black' : ' '

    }
  }

  const Auth = useAuth()

  return (
    <nav>
      <NavLink style={navLinkStyle} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to='/about'>
        About
      </NavLink>
      <NavLink style={navLinkStyle} to='/contact'>
        Contact
      </NavLink>
      <NavLink style={navLinkStyle} to='/products'>
        Products
      </NavLink>
      <NavLink style={navLinkStyle} to='/users'>
        Users
      </NavLink>
      <NavLink style={navLinkStyle} to='/profile'>
        Profile
      </NavLink>
      {!Auth.user &&
       <NavLink style={navLinkStyle} to='/login'>
         Login
       </NavLink>}
    </nav>

  )
}

export default Navbar
