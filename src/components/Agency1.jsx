import React from "react";
import { motion } from "framer-motion";
import agency1 from "../assets/agency.png";
import { NavLink } from "react-router-dom";
import { sentence, letter, fadeIn } from "./variants";
const Agency1 = () => {
  const line1 = "Proudly signing every";
  const line2 = "piece";
  return (
    <div className="my-10 pb-20">
      <div className="px-5 w-full flex flex-col md:flex-row items-center justify-center gap-40">
        <div className="w-fit h-fit md:w-[35rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem]">
          <img
            src={agency1}
            alt="agency1"
           
          />
        </div>
        <div className="text-center md:text-left w-full flex flex-col md:w-[33.5rem] pb-20 ">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#282860] font-extrabold text-[32.5px] md:text-[44px] leading-tight"
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
          <p className="text-[25px] font-bold pt-10 text-[#201f1f]">
            Because it should never just be work, it should be a{" "}
            <span className="text-[blue]">work of art</span>
          </p>
        </div>
      </div>
      <div className="bg-[#d2d0d0] w-full h-[30rem]"></div>
      <div className="flex flex-row items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5 z-0">
        <NavLink to="/contact">
          <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Agency1;
