"use client";

import { useEffect } from "react";
import type { NextPage } from "next";
import React from "react";

const Contact: NextPage = () => {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>(".score-bar");
    bars.forEach((bar) => {
      const width = bar.dataset.width as string;
      bar.style.width = width;
    });
  }, []);

  const skillData = {
    "JavaScript": 90,
    "TypeScript": 80,
    "React": 90,
    "Next.js": 85,
    "HTML5": 80,
    "CSS3": 80
  };

  return (
    <div className="text-white flex flex-col mt-custom items-center h-screen">
      <h1 className="font-heading text-center text-4xl sm:text-5xl md:text-7xl duration-500">
        SKILLS
      </h1>
      <ul className="w-10/12 max-w-4xl mt-5 sm:flex sm:justify-between sm:flex-wrap md:mt-16">
        {Object.entries(skillData).map(([language, score], index) => (
          <li className="w-full sm:w-1/2 mb-2 sm:mb-4 sm:px-2" key={index}>
            <>
              <span className="font-body text-sm sm:text-base">{language}</span>
              <div className="bg-white h-7 mt-1 rounded relative sm:h-12 duration-500">
                <div
                  className="w-0 score-bar rounded"
                  data-width={`${score}%`}
                ></div>
                <span className="font-body sm:text-xl score">{`${score}点`}</span>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
