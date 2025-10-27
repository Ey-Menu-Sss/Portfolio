import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from "./projects";

const Project = () => {
  return (
    <section id="project" className="w-[1200px] mx-auto z-10 pt-30 mt-20">
            <h2 className="text-4xl font-bold mb-10 text-center">
              My <span className="text-[#2ef]">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
              {projects.map((p, index) => (
                <Link
                  key={index}
                  to={p.url}
                  target="_blank"
                  className="relative w-[350px] h-[250px] rounded-2xl overflow-hidden group card-shadow"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#081c29]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold">{p.name}</h3>
                    {/* <p className="text-[#2ef] text-sm">{p.tech}</p> */}
                  </div>
                </Link>
              ))}
            </div>
          </section>
  )
}

export default Project
