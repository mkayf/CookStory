import React, { useEffect, useState } from "react";
import { Logo, LoginBtn, LogoutBtn } from "./index";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const [navOpen, setNavOpen] = useState(false);  
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
    <header className="">
      <nav className="relative flex justify-between items-center px-4 md:px-12 py-4 bg-[#012f22]">
        <div>
          <Link to="/">
            <Logo className="h-[45px] md:h-[60px]" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 text-white poppins-regular">

            {
              navItems.map((item, i) => (
                item.status && <NavLink key={i} to={item.URL} className={({isActive}) => (
                  `${isActive ? 'text-[#E1C16E]' : 'text-white'} hover:text-[#E1C16E] transition-all duration-200`
                )}>
                  <li className="cursor-pointer">{item.name}</li>
                </NavLink>
              ))
            }
            
            {
              authStatus ? <LogoutBtn /> : <LoginBtn />
            }
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          <label className="hamburger">
            <svg viewBox="0 0 32 32" style={{transform : navOpen ? 'rotate(-45deg)' : 'rotate(0deg)'}}>
              <path
                className="line line-top-bottom" style={{strokeDasharray : navOpen && '20 300', strokeDashoffset : navOpen && '-32.42'}}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </button>
      </nav>

      {
        navOpen && (

      <div className={`md:hidden transition-all duration-300 bg-gray-200 py-6 px-6 rounded-lg shadow-lg max-h-full opacity-100`}>
          <ul className="poppins-regular flex flex-col items-start gap-4">
          
            {
              navItems.map((item, i) => (
                item.status && <NavLink key={i} to={item.URL} className={({isActive}) => (
                  `${isActive ? 'border-b-2' : ''} text-[#012f22] transition-all duration-200`
                )}>
                  <li className="cursor-pointer">{item.name}</li>
                </NavLink>
              ))
            }

            {
              authStatus ? <LogoutBtn /> : <LoginBtn className="!bg-[#A8C66C]" />
            }
          </ul>
        </div>
        )
      }

    </header>
  );
}

export default Header;
