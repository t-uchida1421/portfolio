"use client"; // クライアントコンポーネントであることを明示

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesComponent: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="particles-js"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "image",
            stroke: {
              width: 3,
              color: "#fff"
            },
            image: {
              src: "http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-5/img/snow.png",
              width: 120,
              height: 120
            }
          },
          opacity: {
            value: 0.7,
            anim: {
              enable: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 3,
            direction: "bottom",
            random: true,
            out_mode: "out",
            attract: {
              enable: true,
              rotateX: 300,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false
            },
            onclick: {
              enable: false
            },
            resize: true
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default ParticlesComponent;
