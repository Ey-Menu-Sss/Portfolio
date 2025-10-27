import React, { useEffect, useState } from "react";
import Particles from "./test.jsx";
import Header from "../components/header.jsx";
import HomeSection from "../components/home.jsx";
import About from "../components/about.jsx";
import Services from "../components/services.jsx";
import Skills from "../components/skills.jsx";
import Project from "../components/project.jsx";
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
  const [showParticles, setShowParticles] = useState(true);

  // --- Intersection Observer ---
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            if (id === "home" || id === "about") {
              setShowParticles(true);
            } else setShowParticles(false);
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // --- Reveal Elements ---
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#081c29] text-white flex flex-col min-h-screen">
      {/* --- Particles --- */}
      {showParticles && (
        <div className={`absolute top-0 left-0 w-full h-full transition-all duration-1000`}>
          <Particles id="particles" />
        </div>
      )}

      {/* --- Header --- */}
      <Header />

      {/* --- Home section --- */}
      <HomeSection />

      {/* --- About section --- */}
      <About />

      {/* --- Services section --- */}
      <Services />

      {/* --- Skills section --- */}
      <Skills />

      {/* --- Project section --- */}
      <Project />

      {/* --- Contact section --- */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
