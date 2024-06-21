import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section className="-mt-20 bg-[url('/home/hero.webp')] w-full h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center">
      {/* <div className="main-container flex justify-center"> */}
      <div className="main-container w-full lg:w-3/4 flex flex-col items-center text-center gap-8 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold capitalize tracking-wide">
          Data to enrich your <br /> online business
        </h1>
        <p className="text-md lg:text-lg tracking-wide font-medium">
          Social media posts handling requires a combination of creativity,
          strategic thinking, data analysis, and responsiveness to effectively
          manage and engage with audiences on various social media platforms.
        </p>
        <div className="flex items-center justify-center gap-5  ">
          <button className="btn-gradient text-sm w-28 py-2">
            Get Started
          </button>
          <button className="group flex items-center gap-1 text-sm tracking-wide text-white font-semibold hover:underline">
            Learn more
            <AiOutlineArrowRight className="common-transition group-hover:translate-x-2" />
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
