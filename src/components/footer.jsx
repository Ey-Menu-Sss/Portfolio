import React from "react";
import { Link } from "react-scroll";
import navItems from "../json/navItems.json";

const Footer = () => {
  return (
    <footer className="bg-[#06112a] text-white pt-12 pb-8 z-10">
      {/* Top Section - Let's Work Together */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Portfolio */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Let's Work Together</h2>
          <p className="text-gray-400 max-w-md">
            Have an idea or project in mind? Let’s collaborate and turn it into
            reality. I’m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={0}
              offset={-60}
              className="flex items-center gap-2 mb-2 cursor-pointer hover:text-[#2ef]"
            >
              <i className="bx bx-chevron-right"></i>
              <p>{item}</p>
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">Contact Info</h2>
          <div className="space-y-2 mt-6">
            <p className="flex gap-2">
              <span className="font-semibold text-[#2ef] text-[22px]">
                <i className="bx bxs-envelope"></i>
              </span>{" "}
              muhammadeymenus@gmail.com
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-semibold text-[#2ef] text-[22px]">
                <i className="bx bxs-phone"></i>
              </span>{" "}
              +998 93 128 99 66
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-semibold text-[#2ef] text-[22px]">
                <i className="bx bx-current-location"></i>
              </span>{" "}
              Tashkent, Uzbekistan
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 md:flex-row px-6 text-gray-400 text-sm border-t border-gray-700 pt-6">
        <p className="text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#2ef] font-semibold">
            Muhammad Qodir eymenus
          </span>
          . All rights reserved.
        </p>

        {/* <div className="flex gap-5 text-lg mt-3 md:mt-0">
          <a href="https://github.com/YourUsername" target="_blank" rel="noreferrer" className="hover:text-[#2ef] transition">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/in/YourProfile" target="_blank" rel="noreferrer" className="hover:text-[#2ef] transition">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://t.me/eymenus" target="_blank" rel="noreferrer" className="hover:text-[#2ef] transition">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://t.me/YourTelegram" target="_blank" rel="noreferrer" className="hover:text-[#2ef] transition">
            <i className="bx bxl-youtube"></i>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
