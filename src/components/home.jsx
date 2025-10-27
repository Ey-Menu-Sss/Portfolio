import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HomePicture from "../assets/myPicture.jpg";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  const socialItems = [
    {
      to: "https://github.com/Ey-Menu-Sss",
      icon: "bxl-github",
    },
    {
      to: "https://www.linkedin.com/in/muhammadqodir-mirzahmedov-595584372/",
      icon: "bxl-linkedin-square",
    },
    {
      to: "https://youtube.com",
      icon: "bxl-youtube",
    },
    {
      to: "https://t.me/XataSeniorito",
      icon: "bxl-telegram",
    },
  ];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [el]);

  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-6 w-full max-w-6xl mx-auto px-6 py-16 lg:min-h-[calc(100vh-72px)]"
    >
      {/* Left Content */}
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h3
          className="text-2xl md:text-3xl font-semibold text-gray-300 slideBottom"
          style={{ animationDelay: "0.5s" }}
        >
          Hello, It's Me
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-white slideRight">
          Muhammad Qodir
        </h1>
        <h3
          className="text-xl md:text-3xl font-semibold mt-4 text-gray-300 slideBottom"
          style={{ animationDelay: "0.5s" }}
        >
          I'm a <span ref={el} className="font-bold text-[#2ef]"></span>
        </h3>

        {/* Social Icons */}
        <ul className="flex justify-center lg:justify-start gap-5 mt-6 slideLeft">
          {socialItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              target="_blank"
              className="social-icon"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <i className={`bx ${item.icon}`}></i>
            </Link>
          ))}
        </ul>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <a
            href="#about"
            className="mt-8 flex items-center gap-2 text-black px-6 py-2 font-semibold rounded-full bg-[#2ef] shadow-primary hover:bg-[#22d3c5] transition-all duration-300 slideTop"
          >
            <span>About Me</span>
            <i className="bx bxs-down-arrow-circle text-lg"></i>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-[#2ef] opacity-20 blur-3xl rounded-full"></div>
          <img
            src={HomePicture}
            alt="me"
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px] rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
