import { useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "../brand";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-700 px-6 md:px-24 mt-2 mb-2 top-0 fixed w-screen z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Brand />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:justify-evenly md:items-center flex-1 text-lg font-poppins transition-all`}
        >
          <NavLink
            to={"#"}
            className={"hover:underline text-orange-600 px-2 py-1 md:px-4"}
          >
            Home
          </NavLink>
          <NavLink to={"#"} className={"hover:underline px-2 py-1 md:px-4"}>
            About
          </NavLink>
          <NavLink to={"#"} className={"hover:underline px-2 py-1 md:px-4"}>
            Pricing
          </NavLink>
          <NavLink to={"#"} className={"hover:underline px-2 py-1 md:px-4"}>
            Contact
          </NavLink>

          {/* Login Button */}
          <NavLink
            to={"#"}
            className={
              "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-md transition-all md:mx-2"
            }
          >
            Login
          </NavLink>

          {/* Start Free Trial Button */}
          <NavLink
            to={"#"}
            className={
              "bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-md transition-all md:mx-2"
            }
          >
            Start Free Trial
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
