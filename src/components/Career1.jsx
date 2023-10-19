import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
import join1 from "../assets/join.png";
import { NavLink } from "react-router-dom";
const Career1 = () => {
  const line1 = "Be part of a great team,";
  const line2 = "but work from anywhere";
  return (
    <div className="px-5 pb-20">
      <div className="gap-[60px] flex flex-col md:flex-row items-center justify-center">
      <div className="w-fit h-fit md:w-[20rem] lg:w-[30rem] flex flex-col">
          <img src={join1} alt="join1" />
        </div>
        <div className="text-left w-full justify-center items-center md:w-[20rem] ">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#3b3b70] w-full md:w-[25rem] font-bold text-[30px] md:text-[35px] leading-11"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            {line2.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h2>
          <p className="text-[20px] font-bold pt-10 w-[23rem] md:w-[30rem] text-[#201f1f]">
            JAGA VISUALS is made up of talented creatives that take business
            seriously.
          </p>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col w-full md:w-[40rem] mx-0 md:mx-auto justify-start md:justify-center text-left">
        <h2 className="text-[blue] font-bold text-[42px]">Our Mission</h2>
        <p className="text-[35px] md:text-[42px] font-bold  text-[#201f1f]">
          To make the digital world more beautiful, thoughtful and impactful.
        </p>
      </div>

      <div className="flex flex-row z-0 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
                <NavLink to="/contact">
                  <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
                    START YOUR PROJECT
                  </button>
                </NavLink>
              </div>
    </div>
  );
};

export default Career1;
