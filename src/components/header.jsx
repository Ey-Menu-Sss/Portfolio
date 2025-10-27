import React, { useState } from "react";
import { Link } from "react-scroll";
import navItems from "../json/navItems.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-[#06112a] text-white z-50 shadow-md">
      <div className="flex justify-between items-center max-w-[1300px] mx-auto p-5">
        {/* Logo */}
        <div className="logo text-2xl font-bold cursor-pointer select-none">
          𝕎𝕆ℝ𝕋𝔼𝕏
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-[18px]">
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={0}
              offset={-60}
              className="cursor-pointer opacity-0 li hover:text-[#2ef] transition-all duration-300"
              style={{
                animation: `slideTop 1s ease forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {item}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bx bx-menu`}></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-[76px] right-0 w-[70vw] max-w-[300px] h-[calc(100vh-76px)] bg-[#081c29] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="relative flex flex-col gap-5 py-5 px-5 text-lg">
          <i
            className="bx bx-x text-3xl text-start"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={400}
              offset={-60}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer hover:text-[#2ef] ml-12 pb-2 border-b border-gray-700`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
