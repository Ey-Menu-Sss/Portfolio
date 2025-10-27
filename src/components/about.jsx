import React, { useRef } from "react";
import HomePicture from "../assets/myPicture.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const inner = box.querySelector("div");

    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    const inner = box.querySelector("div");
    inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="about"
      className="z-10 max-w-6xl mx-auto pt-24 px-6 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Image Container */}
      <div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="reveal flex-shrink-0"
        style={{ perspective: "1000px" }}
      >
        <div
          className="w-full max-w-[350px] md:w-[400px] rounded-3xl shadow-lg transition-transform duration-100 ease-linear"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={HomePicture}
            alt="My portrait"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="reveal text-center md:text-left">
        <h1 className="text-3xl font-bold text-white mb-2">
          About <span className="text-[#2ef]">Me</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-200 font-semibold mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-[600px] mb-6">
          I’m a passionate Full Stack Developer who loves building interactive
          and efficient web applications. I enjoy transforming ideas into real
          projects using clean code, modern design, and a strong attention to
          detail. My goal is to create digital experiences that are fast,
          beautiful, and intuitive.
        </p>
        <Link
          to={"https://t.me/XataSeniorito"}
          className="reveal px-6 py-2 bg-[#2ef] text-[#081c29] cursor-pointer font-semibold rounded-full shadow-md hover:bg-[#22d3c5] transition-all duration-300"
        >
          More About Me
        </Link>
      </div>
    </section>
  );
};

export default About;
