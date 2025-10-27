import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Test = () => {
  const [init, setInit] = useState(false);
  const particleCount = 550;
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#081c29" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
          push: { quantity: 4}
        },
      },
      particles: {
        color: { value: "#2ef" },
        links: {
          color: "#2ef",
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: particleCount,
        },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [particleCount]
  );

  return (
    <div className="w-full h-screen bg-black">
      {init && (
        <Particles id="particles" options={options} loaded={particlesLoaded} />
      )}
    </div>
  );
};

export default Test;
