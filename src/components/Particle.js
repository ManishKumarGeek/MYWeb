import React from 'react';
import Particles from 'react-tsparticles';

const FireParticles = () => {
  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1 // Position particles behind content
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50
      },
      color: {
        value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"]
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.25,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      },
      shape: {
        type: "circle"
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: false
        },
        onClick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  };

  return <Particles id="tsparticles" options={particlesConfig} />;
};

export default FireParticles;