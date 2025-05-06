import React from 'react'

function Container({className = '', children}) {
  return (
    <div className={`px-6 md:px-12 py-10 ${className}`}>
        {children}
    </div>
  )
}

export default Container