import React from "react";
import { motion } from "framer-motion";
import { sentence,letter,fadeIn } from "./variants";

const Header = () => {

  const line1 = "Creativity never goes"
  const line2 = "out of style"

  return (
    <div className="px-5 gap-[60px] flex flex-col py-20 md:flex-row items-center justify-center">
      <div className="text-[blue] flex flex-col font-black text-[110px]">
        <motion.div
         variants={fadeIn("right", 0.5)}
        viewport={{ once: true, amount: 0.7 }}
        initial="hidden"
        whileInView={"show"}  className="flex gap-[5rem]">
          <span>I</span>
          <span>D</span>
        </motion.div>

        <motion.div variants={fadeIn("right", 0.5)}
        viewport={{ once: true, amount: 0.7 }}
        initial="hidden"
        whileInView={"show"} 
        className="flex gap-[4rem]">
          <span>E</span>
          <span>A</span>
        </motion.div>
      </div>
      <div className="text-left md:text-left">
        <motion.h2
        variants={sentence}
        initial="hidden"
        animate="visible"
         className="text-[blue] w-full md:w-[30rem] font-bold text-[36px] md:text-[44px] leading-11">
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
        <p className="text-[22px] font-bold pt-10 w-full md:w-[30rem]">
          We're a creative design agency based in Dubai that crafts beautiful
          and original websites for brands who{" "}
          <span className="text-[blue]">refuse to blend in.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
