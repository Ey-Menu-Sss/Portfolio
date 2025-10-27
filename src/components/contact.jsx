import React, { useState, useRef } from "react";
import ContactMe from "../assets/contactme.png";

const Contact = () => {
  const boxRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    alert("Thanks for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

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
    <section id="contact" className="w-[1200px] mx-auto px-6 py-20 z-10 mt-40">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact <span className="text-[#2ef]">Me</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-12 justify-around items-center w-full">
        <div
          ref={boxRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex-shrink-0"
          style={{ perspective: "1000px" }}
        >
          <div
            className="w-[350px] md:w-[430px] rounded-3xl shadow-lg transition-transform duration-100 ease-linear"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={ContactMe}
              alt="My portrait"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0a2536] p-8 rounded-2xl shadow-lg w-[40%]"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#081c29] border border-gray-700 focus:border-[#2ef] outline-none"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#081c29] border border-gray-700 focus:border-[#2ef] outline-none"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-[#081c29] border border-gray-700 focus:border-[#2ef] outline-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#2ef] text-[#081c29] font-semibold rounded-lg shadow-md hover:bg-[#22d3c5] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
