import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
import join1 from "../assets/join.png";
import { NavLink } from "react-router-dom";

const Career1 = () => {
  const line1 = "Be part of a great team,";
  const line2 = " but work from anywhere";

  return (
    <div className="">
      <div className="pt-10 pb-20 gap-[1rem] flex flex-col md:flex-row lg:flex-row items-center">
      <div className="flex-1 max-w-none ml-0 md:ml-[15%]" >
        <img src={join1} alt='join1' className="w-fit md:w-[35vw]"/>
      </div>
       
        <div className="text-center flex-1 justify-center md:justify-start items-center md:items-start md:text-left mr-0 md:mr-[10%]" >
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#3b3b70] px-[5rem] md:px-0 w-full md:w-[78%] font-[800] md:font-[700] text-[33px] md:text-[55px] leading-tight"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            {/* <br /> */}
            {line2.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h2>
          <p className="text-[18px] flex items-center justify-center mx-auto md:mx-0 md:justify-start md:items-start text-center px-[4rem] md:px-0 md:text-start font-medium pt-10 w-[20rem] md:w-[30rem] text-[#201f1f]">
            JAGA VISUALS is made up of talented creatives that take business
            seriously.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[80%] md:w-[60%] mb-[10%] ml-5 mr-5 md:mr-0 md:ml-[15%] justify-start md:justify-center text-left">
        <h2 className="text-[blue] font-bold text-[30px] md:text-[40px]">Our Mission</h2>
        <p className="text-[45px] md:text-[70px] font-[700] text-[#201f1f] leading-[3.5rem] md:leading-tight">
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
