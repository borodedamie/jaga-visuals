import React from "react";
import { motion } from "framer-motion";
import agency1 from "../assets/agency.png";

import { sentence, letter, fadeIn } from "./variants";
const Agency1 = () => {
  const line1 = "Proudly signing every";
  const line2 = "piece";
  return (
    <div className="my-10 pb-20">
      <div className="px-5 w-full gap-[60px] flex flex-col md:flex-row items-center justify-center">
        <div className="w-fit h-fit md:w-[20rem] lg:w-[35rem] flex flex-col">
          <img src={agency1} alt="agency1" />
        </div>
        <div className="text-left w-full flex flex-col md:w-[26.5rem] ">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#282860] font-bold text-[30px] md:text-[35px] leading-11"
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
          <p className="text-[18px] font-bold pt-10 text-[#201f1f]">
            Because it should never just be work, it should be a{" "}
            <span className="text-[blue]">work of art</span>
          </p>
        </div>
      </div>
      <div className="bg-[#d2d0d0] w-full h-[30rem]"></div>
    </div>
  );
};

export default Agency1;
