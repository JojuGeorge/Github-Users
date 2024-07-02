import React from 'react'
import { FaGithub } from "react-icons/fa";

import "../styles/css/navbar.css"

function Navbar() {
  return (
    <div>
      <div className='navbar-wrapper'>
      <FaGithub className='navbar-icon' />
        <span>Get Github User Details</span>
      </div>
    </div>
  )
}

export default Navbar