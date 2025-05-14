import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Footer() {

  const authStatus = useSelector(state => state.auth.authStatus);

  const navItems = [
    {
      name: "Home",
      URL: "/",
      status: true,
    },
    {
      name: "Posts",
      URL: "/posts",
      status: true,
    },
    {
      name: "Add post",
      URL: "/addpost",
      status: authStatus,
    },
    {
      name: "Signup",
      URL: "/signup",
      status: !authStatus,
    },
  ];

  return (
    <footer className="flex flex-col space-y-10 justify-center p-10 bg-[#012f22] poppins-regular">
    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
      {
        navItems.map((item, i) => (
          item.status && <NavLink key={i} to={item.URL} className={({isActive}) => (
            `${isActive ? 'text-[#E1C16E]' : 'text-white'} hover:text-[#E1C16E] transition-all duration-200`
          )}>
            <li className="cursor-pointer list-none">{item.name}</li>
          </NavLink>
        ))
      }
    </nav>
    <p className="text-center text-white poppins-medium">&copy; {
      new Date().getFullYear()
      } CookStory. All rights reservered.</p>
</footer>
  )
}

export default Footer