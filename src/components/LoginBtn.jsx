import React from 'react'
import { Link } from 'react-router-dom'

function LoginBtn({
    className = '',
    ...props
}) {

  return (
    <Link to="/login">
      <button className={`bg-[#A8C66C] text-black poppins-regular px-4 py-2 rounded-lg cursor-pointer hover:!bg-[#8aa259] duration-300 ${className}`} {...props}>Login</button>
    </Link>
  )
}

export default LoginBtn