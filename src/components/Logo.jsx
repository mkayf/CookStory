import React from 'react'
import logo from '../assets/logo.png'

function Logo({className = ''}) {
  return (
    <img 
    src={logo}
    alt='Cook story logo'
    className={`${className}`}
    />
  )
}

export default Logo