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
import ResumeDownload from "../components/resumeDownload.jsx";

const Home = () => {
  const [showParticles, setShowParticles] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const resumeShown = React.useRef(false);

  // --- Intersection Observer for sections ---
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            if (id === "home") setShowParticles(true);
            else setShowParticles(false);

            // Show resume popup when reaching Projects
            if (id === "project" && !resumeShown.current) {
              resumeShown.current = true;
              setShowResume(true);
            }
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
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
          if (entry.isIntersecting) entry.target.classList.add("visible");
          else entry.target.classList.remove("visible");
        });
      },
      { threshold: 0.3 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#081c29] text-white flex flex-col min-h-screen">
      {/* Particles */}
      {showParticles && (
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000">
          <Particles id="particles" />
        </div>
      )}

      {/* Sections */}
      <Header />
      <HomeSection />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Footer />

      {/* Resume Popup */}
      <ResumeDownload show={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
};

export default Home;
