import type { NextPage } from "next";
import Hero from "../components/Hero";
import Header from "@/components/Header";
import ParticlesComponent from "@/components/ParticlesComponent";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-animate">
        <ParticlesComponent />
        <Hero />
      </main>
    </>
  );
};

export default Home;
