import { useState } from "react";
import skullLogo from "/assets/TDS Skull only.png";
const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#261C50] to-[#7D3BB5] shadow-lg z-50">
      <nav className="px-4 lg:px-6 py-3 max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={skullLogo} alt="TDS Logo" className="h-12 w-auto" />
          <span className="text-white text-2xl font-bold ml-3">
            Digital Syndicate
          </span>
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Sign In
            </a>
          </li>
        </ul>

        {/* Sign Up Button */}
        <button className="hidden md:block bg-white text-[#1A1A50] font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setNav(!nav)}
        >
          {nav ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1A1A50] text-white transition-all duration-300 ${
          nav ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-3">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Sign In
            </a>
          </li>
          <li>
            <button className="bg-white text-[#1A1A50] font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
