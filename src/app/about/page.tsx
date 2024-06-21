"use client";

import type { NextPage } from "next";
import React from "react";
import Particle from "react-tsparticles";
import template from "../../components/particles/ts-particles-mask.json";

const ParticlesComponents: NextPage = () => {
  const params = template as typeof template;

  return <Particle options={params as any} />;
};

export default ParticlesComponents;
