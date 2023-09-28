"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
      <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
      <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-slate-600">
            Hello, I'm Lenson
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Fernandes",
              1000,
              "FrontEnd Developer",
              1000,
              "NextJs Engineer",
              1000,
              "Citrix Expert",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </h1>
          <p className="text-[#ADA7BE] mb-6 textl-lg lg:text-xl">NextJs and React Developer</p>
          <div>
            <button className="px-6 py-3  rounded-full bg-[#FFC700] text-black ml-4 hover:bg-[#FFC700] hover:text-white transition-all duration-300 ease-in-out  hover:scale-105 hover:rotate-12 font-bold text-white ">
              Hire me
            </button>
            <button className="px-6 py-3  rounded-full bg-purple-500 text-black ml-4 hover:bg-[#FFC700] hover:text-white transition-all duration-300 ease-in-out  hover:scale-105 hover:rotate-12 font-bold button-outline  text-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/avatarLen.png"
              width={300}
              height={300}
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
