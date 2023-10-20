import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
import work1 from "../assets/work.png";

const Work1 = () => {
  const line1 = "We are experts in";
  const line2 = "bringing brands to life digitally";

  return (
      <div className="px-[15%] pb-10 pt-10 gap-[1rem] flex flex-col md:flex-row items-center">
        <motion.div
          exit={{ x: "-100vh", opacity: 0 }}
          className="w-fit h-fit md:w-[20rem] lg:w-[700px] flex flex-col">
          <img src={work1} alt='work1' />
        </motion.div>
        <div className="px-10 text-center md:text-left w-full pt-10 justify-center items-center flex flex-col md:w-[26.5rem] ">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            style={{ fontSize: '2rem' }}
            className="text-[#3b3b70] font-bold md:text-[35px] leading-tight"
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
            JAGA VISUALS is a progressive and insightful design agency,
            technically and creatively skilled to translate your brand into its
            best digital self. Our design and development approach creates
            impactful, engaging brands and immersive digital experiences that
            bring you a return on creativity.
          </p>
        </div>
      </div>
  );
};

export default Work1;
