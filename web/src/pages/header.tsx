import { useState } from "react";
import skullLogo from "/assets/TDS Skull only.png";
import members from "../members";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-[#222222] to-[#7D3BB5] shadow-lg z-50">
      <nav className="px-4 lg:px-6 py-3 max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={skullLogo} alt="TDS Logo" className="h-12 w-auto" />
          <span className="text-white text-2xl font-bold ml-3">
            Digital Syndicate
          </span>
        </a>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/"
              className="text-purple-400 hover:text-pink-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <div className="inline-block relative">
              <a
                href="/members"
                className="text-purple-400 hover:text-pink-400 transition-colors duration-300"
              >
                Members ▾
              </a>
              <div className="absolute left-0 top-full h-4 w-full" />
              <ul className="absolute left-0 top-full mt-4 w-48 bg-[#1A1A50] border border-[#7D3BB5] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                {members.map((member) => (
                  <>
                    <li className="block px-4 py-2 text-white hover:bg-[#3B1D59]">
                      <a href={`/members/${member.name}`}>{member.name}</a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <a
              href="/socials"
              className="text-purple-400 hover:text-pink-400 transition-colors duration-300"
            >
              Socials
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setNav(!nav)}
        >
          {nav ? "✖" : "☰"}
        </button>
      </nav>

      <div
        className={`md:hidden bg-[#1A1A50] text-white transition-all duration-300 ${
          nav ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-3">
          <li>
            <a href="#" className="hover:text-pink-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
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
