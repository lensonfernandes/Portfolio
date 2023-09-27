import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl ">
            Hi, Im lenson
          </h1>
          <p className="text-[#ADA7BE]">NextJs and react Developer</p>
          <div>
            <button className="px-6 py-3  rounded-full bg-[#FFC700] text-black ml-4 hover:bg-[#FFC700] hover:text-white transition-all duration-300 ease-in-out  hover:scale-105 hover:rotate-12  ">
              Hire me
            </button>
            <button className="px-6 py-3  rounded-full bg-[#FFC700] text-black ml-4 hover:bg-[#FFC700] hover:text-white transition-all duration-300 ease-in-out  hover:scale-105 hover:rotate-12  ">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image
              src=""
              width={500}
              height={300}
              alt="Hero Image"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
