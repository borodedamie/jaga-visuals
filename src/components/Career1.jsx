import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
import join1 from "../assets/join.webp";
import { NavLink } from "react-router-dom";

const Career1 = () => {
  const line1 = "Be part of a great team, but work from anywhere";

  return (
    <div className="">
      <div className="pt-10 pb-20 gap-[1rem] flex flex-col lg:flex-row items-center ">
        <div className="flex-1 max-w-none ml-0 lg:ml-[15%]">
          <img src={join1} alt="join1" className="w-fit lg:w-[35vw]" />
        </div>

        <div className="text-center flex-1 justify-center lg:justify-start items-center lg:items-start lg:text-left mr-0 lg:mr-[10%]">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#282860] px-[4rem] lg:px-0 font-[800] lg:font-[700] text-[33px] lg:text-[50px] leading-tight w-[100%] md:w-[100%]"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
          </motion.h2>
          <p className="text-[18px] md:text-[23px] flex items-center justify-center mx-auto lg:mx-0 lg:justify-start lg:items-start text-center px-0 lg:text-start font-medium pt-10 w-[20rem] lg:w-[100%] text-[#201f1f]">
          JAGA VISUALS comprises of talented creatives dedicated to delivering
          outputs of the highest quality tailored to each client's vision.
        </p>
        </div>
       
      </div>

      <div className="flex flex-col w-[80%] lg:w-[60%] mb-[10%] ml-5 mr-5 lg:mr-0 lg:ml-[15%] justify-start lg:justify-center text-left">
        <h2 className="text-[blue] font-bold text-[30px] lg:text-[40px]">
          Our Mission
        </h2>
        <p className="text-[45px] lg:text-[70px] font-[700] text-[#201f1f] leading-[3.5rem] lg:leading-tight">
          To make the digital world more beautiful, thoughtful and impactful.
        </p>
      </div>

      <div className="flex flex-row z-0 items-center justify-center fixed bottom-2 right-0 lg:bottom-6 lg:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 lg:py-7 lg:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Career1;
