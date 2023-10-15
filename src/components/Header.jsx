import React from "react";
import { motion } from "framer-motion";
import { sentence,letter,fadeIn } from "./variants";
import idea1 from "../assets/idea.png";

const Header = () => {

  const line1 = "Creativity never goes"
  const line2 = "out of style"

  return (
    <div className="px-5 pb-20 gap-[60px] flex flex-col md:flex-row items-center justify-center">
      <div className="w-fit h-fit md:w-[35rem] md:h-[30rem] lg:w-[35rem] lg:h-[40rem] pt-10 flex flex-col font-black">
          <img src={idea1} alt='idea1'/>
        </div>
      <div className="text-center md:text-left">
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
