import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {

  // hamburger================
  const [open, setOpen] = useState(false);

  // navigations ----------------------------------
       const navigate=useNavigate();
      //  to login page -----
            const tologin =()=>{
              navigate('/Login');
            };

            // to Signup page------
            const tosignup =()=>{
              navigate('/signup');
            };


  return (
    <nav className="w-full backdrop-blur-xl border-b border-gray-300 md:px-12 py-3 fixed top-0 z-50 px-20">
      
      <div className="flex items-center justify-between ">

        {/* LEFT LOGO PLACEHOLDER */}
        <div className="flex items-center gap-2">
          {/* Replace this later with your logo */}
          <div className=""><img src="images/skill-swap-logo.png" alt="" className="w-24.5" /></div>
        
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <i className="bi bi-list text-4xl"></i>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] text-gray-600 ">

          <li className="hover:text-black cursor-pointer">
            <a href="#how-it-works">How It Works</a>
          </li>

          <li className="hover:text-black cursor-pointer">
            <a href="#features">Features</a>
          </li>

          <li className="hover:text-black cursor-pointer">
            <a href="#testimonials">Testimonials</a>
          </li>

          <li className="border border-purple-600 text-purple-600 px-4 py-1 rounded-md font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 hover:text-white transition cursor-pointer" onClick={tologin}>
            Log In
          </li>

          <li className="bg-gradient-to-r  from-purple-600 to-purple-500 text-white px-4 py-1 rounded-md font-semibold hover:opacity-90 transition cursor-pointer" onClick={tosignup}>
            Get Started
          </li>

        </ul>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-600 items-center">

          <a href="#how-it-works" className="hover:text-black">
            How It Works
          </a>

          <a href="#features" className="hover:text-black">
            Features
          </a>

          <a href="#testimonials" className="hover:text-black">
            Testimonials
          </a>

          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md font-semibold rounded-4 cursor-pointer" onClick={tologin}>
            Log In
          </button>

          <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-md font-semibold rounded-4 cursor-pointer" onClick={tosignup}>
            Get Started
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;