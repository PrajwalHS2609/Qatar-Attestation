import React from 'react'
import "./NavBar.css"
import logo from "./../../Images/logo.png";
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="lpLogo-container">
      <Image src={logo} alt="logo" />
    </div>
  )
}

export default Logo
