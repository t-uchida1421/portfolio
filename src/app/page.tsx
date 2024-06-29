import type { NextPage } from "next";
import ParticlesComponent from "@/components/Particles";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl sm:text-5xl text-white text-center font-heading md:text-7xl w-11/12 duration-500 z-10">
          Teppei Uchida
        </h1>
        <h2 className="text-white pt-2 font-merriweather sm:text-xl md:text-2xl md:pt-4 duration-500 z-10">
          WEB DEVELOPER
        </h2>
      </div>
      <ParticlesComponent />
    </>
  );
};

export default Home;
