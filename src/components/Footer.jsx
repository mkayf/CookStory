import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center p-10 bg-[#012f22] poppins-regular">
    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="text-white" href="#">Home</a>
        <a className="text-white" href="#">About</a>
        <a className="text-white" href="#">Services</a>
        <a className="text-white" href="#">Media</a>
        <a className="text-white" href="#">Gallery</a>
        <a className="text-white" href="#">Contact</a>
    </nav>
    <p className="text-center text-white poppins-medium">&copy; {
      new Date().getFullYear()
      } CookStory. All rights reservered.</p>
</footer>
  )
}

export default Footer