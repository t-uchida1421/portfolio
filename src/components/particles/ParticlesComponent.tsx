"use client";

import React from "react";
import Particle from "react-tsparticles";
import template from "./ts-particles-mask.json";

const ParticlesComponents: React.FC = () => {
  const params = template as typeof template;
  return (
    <>
      <img
        src="/コムドット（tiktok）.png"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Particle options={params as any} />;
    </>
  );
};

export default ParticlesComponents;
