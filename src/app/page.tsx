import type { NextPage } from "next";
import Hero from "../components/Hero";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <main>
        <Header />
        <Hero />
      </main>
    </div>
  );
};

export default Home;
