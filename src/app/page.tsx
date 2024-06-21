import type { NextPage } from "next";
import Hero from "../components/Hero";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-animate">
        <Hero />
      </main>
    </>
  );
};

export default Home;
