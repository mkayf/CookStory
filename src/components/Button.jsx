import React from 'react'

function Button({
    className = '',
    type = "text",
    text = "",
    icon = null,
    disabled = false,
    ...props
}) {
  return (
    <button type={type} className={`flex items-center justify-center gap-2 py-3 px-4 bg-[#A8C66C] text-black rounded-lg poppins-regular cursor-pointer hover:bg-[#879f58] transition-colors duration-200 ${className}`} disabled={disabled} {...props}>
      {text}
      {icon && <span>{icon}</span>}
      </button>
  )
}

export default Button