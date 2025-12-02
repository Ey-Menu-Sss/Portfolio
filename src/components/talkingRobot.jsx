import React from "react";

const TalkingRobot = () => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-floating"
    >
      {/* Body */}
      <rect
        x="50"
        y="60"
        width="100"
        height="80"
        rx="20"
        fill="var(--primary)"
        fillOpacity="0.1"
        stroke="var(--primary)"
        strokeWidth="3"
      />

      {/* Eyes */}
      <circle cx="80" cy="90" r="10" fill="var(--primary)">
        <animate
          attributeName="fill-opacity"
          values="1;0.3;1"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="120" cy="90" r="10" fill="var(--primary)">
        <animate
          attributeName="fill-opacity"
          values="1;0.3;1"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </circle>

      {/* Antenna */}
      <line
        x1="100"
        y1="40"
        x2="100"
        y2="60"
        stroke="var(--primary)"
        strokeWidth="3"
      >
        <animate
          attributeName="y1"
          values="40;35;40"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </line>
      <circle cx="100" cy="35" r="6" fill="var(--primary)" />

      {/* Mouth (talking animation) */}
      <rect
        x="75"
        y="115"
        width="50"
        height="8"
        rx="4"
        fill="var(--primary)"
        filter="url(#glow)"
      >
        <animate
          attributeName="width"
          values="50;20;50;35;50"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Glowing filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export default TalkingRobot;
