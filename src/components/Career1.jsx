import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
import join1 from "../assets/join.png";
import { NavLink } from "react-router-dom";

const Career1 = () => {
  const line1 = "Be part of a great team,";
  const line2 = "but work from anywhere";

  return (
    <div className="">
      <div className="pt-10 pb-20 gap-[1rem] flex flex-col md:flex-row items-center">
        <div style={{ flex: 1, marginLeft: '15%' }}>
          <img src={join1} alt="join1" style={{ maxWidth: 'none', width: '35vw' }} />
        </div>
        <div className="text-left justify-center items-center" style={{ flex: 1, marginRight: '10%' }}>
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#3b3b70] md:w-[73%] font-bold text-[40px] md:text-[35px] leading-tight"
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
          <p className="text-[18px] font-medium pt-10 w-[23rem] md:w-[30rem] text-[#201f1f]">
            JAGA VISUALS is made up of talented creatives that take business
            seriously.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:w-[60%] mb-[10%] ml-[15%] justify-start md:justify-center text-left">
        <h2 className="text-[blue] font-bold text-[40px]">Our Mission</h2>
        <p className="text-[70px] font-bold text-[#201f1f] leading-tight">
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
