"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
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
          <p className="text-[#ADA7BE] mb-6 textl-lg lg:text-xl">
            NextJs and React Developer
          </p>
          <div>
            <button className="px-6 py-3  rounded-full bg-[#FFC700] text-black ml-4 hover:bg-[#FFC700] hover:text-white transition-all duration-300 ease-in-out  hover:scale-105 hover:rotate-12 font-bold text-white ">
              Hire me
            </button>
            <button className="px-6 py-3  rounded-full bg-purple-500 text-black ml-4 hover:bg-[#FFC700] hover:text-white transition-all duration-300 ease-in-out  hover:scale-105 hover:rotate-12 font-bold button-outline  text-white">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatarLen.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
