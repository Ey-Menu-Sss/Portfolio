import React from "react";
import skills from "../json/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="w-full z-10 pt-15 mt-30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">
          My <span className="text-[#2ef]">Skills</span>
        </h2>
        <p className="text-gray-400">
          Technologies I use to build modern web apps
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
        {skills.map((s, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 text-center bg-[#081c29] border border-[#0e2f45] w-[140px] h-[130px] rounded-2xl shadow-md hover:scale-105 hover:border-[#2ef] transition-transform duration-300 card-shadow"
          >
            <i className={`bx ${s.img} text-4xl text-[#2ef]`}></i>
            <p className="text-sm text-white font-medium">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
