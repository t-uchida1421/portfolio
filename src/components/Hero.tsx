import React from "react";
const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-11/12 mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-white text-center font-heading">
        Teppei Uchida
      </h1>
      <h2 className="text-white pt-2 font-merriweather">WEB DEVELOPER</h2>
    </div>
  );
};

export default Hero;
