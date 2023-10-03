import React from "react";
import { motion } from "framer-motion";
import { sentence,letter, fadeIn } from "./variants";

const Work1 = () => {
  const line1 = "We are experts in"
  const line2 = "bringing brands to life digitally"
  return (
    <div className="px-5">
    <div className="w-full gap-[60px] flex flex-col py-20 md:flex-row items-center justify-center">
      <div className="text-[blue] flex flex-col font-black text-[110px]">
        <motion.div variants={fadeIn("right", 0.5)}
        viewport={{ amount: 0.7 }}
        initial="hidden"
        whileInView={"show"} 
        className="flex gap-[5rem]">
          <span>W</span>
          <span>O</span>
        </motion.div>

        <motion.div
        variants={fadeIn("right", 0.5)}
        viewport={{ amount: 0.7 }}
        initial="hidden"
        whileInView={"show"} 
        className="flex gap-[8rem]">
          <span>R</span>
          <span>K</span>
        </motion.div>
      </div>
      <div className="text-left w-full justify-center items-center flex flex-col md:w-[26.5rem] ">
      
          <motion.h2
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-[#3b3b70] font-bold text-[30px] md:text-[35px] leading-10">
          {line1.split("").map((char,index) => {
            return(
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
          <br/>
          {line2.split("").map((char,index) => {
            return(
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h2>
        <p 
        
   className="text-[18px] font-bold pt-10 text-[#201f1f]">
          JAGA VISUALS is a progressive and insightful design agency,
          technically and creatively skilled to translate your brand into its
          best digital self. Our design and development approach creates
          impactful, engaging brands and immersive digital experiences that
          bring you a return on creativity.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Work1;
