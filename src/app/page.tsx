import type { NextPage } from "next";
import Hero from "../components/Hero";
import Header from "@/components/Header";
import ParticlesComponent from "@/components/ParticlesComponent";

const Home: NextPage = () => {
  return (
    <main className="bg-gradient-animate">
      <ParticlesComponent />
      <Header />
      <Hero />
    </main>
  );
};

export default Home;
