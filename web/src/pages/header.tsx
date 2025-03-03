import React, { useState } from "react";
const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    // <header className="bg-gradient-to-t from-lavender to-blue-900">
    //   <a href="/">
    //     <img src="./assets/TDS Skull only.png" />
    //   </a>
    // </header>
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-semibold whitespace-nowrap dark:text-white">
              Logo
            </span>
          </a>

          {/* Navigation Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-white shadow-md p-4 transition-all duration-300 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none ${
              nav ? "block" : "hidden md:flex"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8 gap-0">
              {["Home", "Pricing", "Contact Us", "Sign In"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-blue-600 dark:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-4 md:mt-0 rounded-full bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700">
              Sign Up Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              onClick={() => setNav(!nav)}
            >
              {nav ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
