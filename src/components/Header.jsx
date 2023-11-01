import React from "react";
import { motion } from "framer-motion";
import { sentence, letter } from "./variants";
import idea1 from "../assets/idea.webp";

const Header = () => {

  const line1 = "Creativity never goes"
  const line2 = "out of style"

  return (
    <div 
    className="pt-10 pb-20 gap-[1rem] overflow-hidden flex flex-col md:flex-row items-center ">
      <div className="flex-1 max-w-none ml-0 md:ml-[15%]" >
        <img src={idea1} alt='idea1' className="w-fit md:w-[35vw]"/>
      </div>
      <div className="text-center flex-1 md:text-left mr-0 md:mr-[10%]" >
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-[#282860] md:w-[90%] font-[700] text-[40px] md:text-[50px] leading-tight ">
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
          <br />
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
        <p className="text-[18px] md:text-[22px] px-5 md:px-0 text-[#403e3e] font-medium pt-[5%] md:w-[80%] tracking-tight ">
          We're a creative design agency based in Dubai that crafts beautiful
          and original websites for brands who{" "}
          <span className="text-[blue]">refuse to blend in.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
