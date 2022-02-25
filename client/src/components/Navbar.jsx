import React from 'react'
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
      <div className='navbar_div'>
        <Link to="/signup" className='navbar_link'><b>Signup</b></Link>
        <Link to="/login" className='navbar_link'><b>Login</b></Link>
      </div>
    </>
  )
}

export default Navbar