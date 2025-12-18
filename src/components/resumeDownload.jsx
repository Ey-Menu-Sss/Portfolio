import React, { useEffect, useState } from "react";
import TalkingRobot from "./talkingRobot";

const ResumeDownload = ({ show, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;
    if (show) {
      // Delay 100ms for smoother appearance
      timeout = setTimeout(() => setVisible(true), 1000);
    } else {
      setVisible(false);
    }

    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50
      transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-[var(--bg-color)] border border-[#123652] 
        p-8 rounded-3xl shadow-xl max-w-[400px] w-full transform transition-all duration-500
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-white text-xl hover:text-[var(--primary)]"
        >
          ✕
        </button>

        {/* Robot */}
        <div className="w-full flex justify-center mb-5">
          <TalkingRobot />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-white text-center mb-3">
          Want to know more about me?
        </h2>
        <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
          Download my resume to explore my detailed experience, skills, and projects I've worked on.
        </p>

        {/* Download Button */}
        <a
          href="/Resume.pdf"
          download
          className="block w-full text-center bg-[var(--primary)] text-[var(--bg-color)] py-2.5 rounded-full font-medium hover:bg-[#1cd9c3] transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;
