import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
const Agency1 = () => {
  const line1 = "Proudly signing every";
  const line2 = "piece";
  return (
    <div className="">
      <div className="px-5 w-full gap-[60px] flex flex-col py-20 md:flex-row items-center justify-center">
        <div className="text-[blue] flex flex-col font-black text-[110px]">
          <motion.div
            variants={fadeIn("right", 0.5)}
            viewport={{ amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-[5rem]"
          >
            <span>A</span>
            <span>G</span>
            <span>E</span>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.5)}
            viewport={{ amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-[5rem]"
          >
            <span>N</span>
            <span>C</span>
            <span>Y</span>
          </motion.div>
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
