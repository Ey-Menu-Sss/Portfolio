import React from "react";

const Services = () => {
  return (
    <section className="z-10 w-[1200px] mx-auto mt-25 pt-25" id="services">
      <h1 className="text-center text-4xl font-bold mb-10">
        My <span className="text-[#2ef]">Services</span>
      </h1>
      <div className="w-full flex items-center justify-center gap-5 flex-nowrap">
        {/* 1st Card */}
        <div className="relative w-[32%] h-[320px] p-6 bg-[#0a1e2d] rounded-2xl border border-[#123652] shadow-lg hover:shadow-[#2ef]/40 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
          <div>
            <i className="bx bx-code-alt text-5xl text-[#2ef] mb-4"></i>
            <h2 className="text-xl font-semibold text-white mb-3">
              Full Stack Development
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              I build complete web applications using modern technologies — from
              backend logic to beautiful frontend interfaces. Focused on
              performance, security, and great user experience.
            </p>
          </div>

          <button className="self-start mt-5 px-5 py-2 bg-[#2ef] text-[#0a1e2d] cursor-pointer text-sm font-medium rounded-full hover:bg-[#1cd9c3] transition-colors duration-300">
            Learn More
          </button>
        </div>
        {/* 2nd Card */}
        <div className="relative w-[32%] h-[320px] p-6 bg-[#0a1e2d] rounded-2xl border border-[#123652] shadow-lg hover:shadow-[#2ef]/40 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
          <div>
            <i className="bx bx-desktop text-5xl text-[#2ef] mb-4"></i>
            <h2 className="text-xl font-semibold text-white mb-3">
              Portfolio & Business Website Design
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              I create personal portfolios and business websites that highlight
              your brand and goals. My focus is on clean layouts, modern design,
              and mobile-friendly performance.
            </p>
          </div>

          <button className="self-start mt-5 px-5 py-2 bg-[#2ef] text-[#0a1e2d] cursor-pointer text-sm font-medium rounded-full hover:bg-[#1cd9c3] transition-colors duration-300">
            Learn More
          </button>
        </div>
        {/* 3rd Card */}
        <div className="relative w-[32%] h-[320px] p-6 bg-[#0a1e2d] rounded-2xl border border-[#123652] shadow-lg hover:shadow-[#2ef]/40 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
          <div>
            <i className="bx bx-paint text-5xl text-[#2ef] mb-4"></i>
            <h2 className="text-xl font-semibold text-white mb-3">
              UI/UX Implementation
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed ">
              I bring designs to life by turning Figma or concept layouts into
              fully functional websites using React and Tailwind CSS. I aim for
              smooth animations and a great user experience.
            </p>
          </div>

          <button className="self-start mt-5 px-5 py-2 bg-[#2ef] text-[#0a1e2d] cursor-pointer text-sm font-medium rounded-full hover:bg-[#1cd9c3] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
