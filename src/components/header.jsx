import React from "react";
import { Link } from "react-scroll";
import navItems from "../json/navItems.json";

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-[#06112a] text-white z-50">
      <div className="flex justify-between items-center w-[1300px] mx-auto p-5">
        <div className="logo text-2xl cursor-pointer">𝕎𝕆ℝ𝕋𝔼𝕏</div>
        <ul className="nav-items flex gap-10 text-[18px]">
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={0}
              offset={-60}
              className="cursor-pointer opacity-0 li"
              style={{
                animation: `slideTop 1s ease forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
