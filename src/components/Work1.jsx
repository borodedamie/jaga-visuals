import React from "react";
import { motion } from "framer-motion";
import { sentence, letter } from "./variants";
import work1 from "../assets/work.png";

const Work1 = () => {
  const line1 = "We are experts in";
  const line2 = "bringing brands to life digitally";

  return (
      <div className="pb-10 pt-10 gap-[1rem] flex flex-col lg:flex-row items-center">
        <motion.div
          exit={{ x: "-100vh", opacity: 0 }}
          className="flex flex-col ml-0 lg:ml-[15%]">
          <img src={work1} alt='work1' className="w-fit lg:w-[35vw]"/>
        </motion.div>
        <div className="hidden lg:flex px-10 text-center lg:text-left flex-col mr-0 lg:mr-[10%] flex-1" >
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"

            className=" text-[#282860]  font-bold text-[40px] lg:text-[50px] leading-tight w-0 lg:w-[26rem]"
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
          <p className="text-[16px] font-medium pt-10 text-[#201f1f] tracking-tight">
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
