import type { NextPage } from "next";
import Header from "@/components/Header";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen w-11/12 mx-auto">
        <h1>About Me</h1>
      </div>
    </>
  );
};

export default About;
