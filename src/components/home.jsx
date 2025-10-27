import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
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
      to: "https://t.me/eymenus",
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
            className="flex justify-around flex-wrap items-center w-[1300px] mx-auto h-[calc(100vh-72px)]"
            id="home"
          >
            <div className="home-content w-[50%] ">
              <h3 className="text-3xl font-bold slideBottom" style={{animationDelay: "0.5s"}}>Hello, It's Me</h3>
              <h1 className="text-5xl font-bold mt-5 slideRight">Muhammad Qodir</h1>
              <h3 className="text-3xl font-semibold mt-5 slideBottom" style={{animationDelay: "0.5s"}}>
                I'm A <span ref={el} className="font-bold text-[#2ef]"></span>
              </h3>
              <ul className="flex gap-6 mt-6 slideLeft">
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
              <button className="slideTop text-black px-5 py-2 pb-2.5 mt-6 font-bold rounded-[25px] flex items-center gap-1 cursor-pointer bg-[#2ef] shadow-primary">
                <span>About Me</span>
                <i className="bx bxs-down-arrow-circle pt-0.5"></i>
              </button>
            </div>
            <div className="rounded-full p-3 mr-10 mt-10 picture-shadow">
              <img src={HomePicture} alt="me" className="w-[450px] rounded-full" />
            </div>
          </section>
  )
}

export default Home
