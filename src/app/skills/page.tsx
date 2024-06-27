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
    "JavaScript": {
      score: 90,
      experience: "2年"
    },
    "TypeScript": {
      score: 80,
      experience: "1年半"
    },
    "React": {
      score: 90,
      experience: "2年"
    },
    "Next.js": {
      score: 85,
      experience: "2年"
    },
    "HTML5": {
      score: 80,
      experience: "2年"
    },
    "CSS3": {
      score: 80,
      experience: "2年"
    },
    "SASS": {
      score: 70,
      experience: "1年"
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center h-screen">
      <h1 className="font-heading text-center text-4xl sm:text-5xl md:text-7xl duration-500">
        SKILLS
      </h1>
      <ul className="w-10/12 mt-7">
        {Object.entries(skillData).map(([language, data], index) => (
          <li className="w-full max-w-xl mx-auto mb-2 sm:mb-4" key={index}>
            <>
              <span className="font-body text-sm sm:text-base">{language}</span>
              <div className="bg-white h-9 mt-1 rounded relative sm:h-12 duration-500">
                <div
                  className="w-0 score-bar rounded"
                  data-width={`${data.score}%`}
                ></div>
                <span className="font-body sm:text-xl score">
                  {data.experience}
                </span>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
