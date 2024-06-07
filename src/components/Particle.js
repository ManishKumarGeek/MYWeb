import React from 'react';
import Particles from 'react-tsparticles';

const FireParticles = () => {
  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1 // Position particles behind content
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 175
      },
      color: {
        value: ["#6dc3df", "#81d2ed", "#c7f0fe", "#daedef", "#b1eaf0"]
      },
      opacity: {
        value: 0.25,
        random: true,
        anim: {
          enable: true,
          speed: .45,
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
        direction: "down",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      },
      shape: {
        type: ["circle", "triangle", "polygon", "star"]
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
//https://w7.pngwing.com/pngs/648/933/png-transparent-green-among-us-cartoons-among-us.png