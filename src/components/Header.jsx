import React from "react";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
import idea1 from "../assets/idea.png";

const Header = () => {

  const line1 = "Creativity never goes"
  const line2 = "out of style"

  return (
    <div className="pt-10 pb-20 gap-[150px] flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-[35rem] md:h-[30rem] lg:w-[35rem] lg:h-[40rem]">
        <img src={idea1} alt='idea1' style={{ maxWidth: 'none', width: '700px' }}/>
      </div>
      <div className="md:text-left">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-[blue] md:w-[30rem] font-bold text-[40px] md:text-[44px] leading-tight">
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
        <p className="text-[22px] text-[#403e3e] font-medium pt-10 md:w-[30rem] tracking-tight">
          We're a creative design agency based in Dubai that crafts beautiful
          and original websites for brands who{" "}
          <span className="text-[blue]">refuse to blend in.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
