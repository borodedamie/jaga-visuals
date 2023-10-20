import React from "react";
import { motion } from "framer-motion";
import agency1 from "../assets/agency.png";

import { sentence, letter } from "./variants";

const Agency1 = () => {
  const line1 = "Proudly signing every";
  const line2 = "piece";

  return (
    <div>
      <div className="pt-10 pb-[10%] gap-[2rem] flex flex-col md:flex-row items-center justify-center" >
        <div className="" style={{ flex: 1, marginLeft: '15%' }}>
          <img src={agency1} alt="agency1" style={{ maxWidth: 'none', width: '35vw' }} />
        </div>
        <div className="text-center md:text-left" style={{ flex: 1, marginRight: '10%' }}>
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#282860] font-bold text-[40px] leading-tight"
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
          </motion.h1>
          <p className="text-[20px] font-medium pt-[5%] text-[#201f1f] md:w-[75%] tracking-tight">
            Because it should never just be work, it should be a{" "}
            <span className="text-[blue]">work of art</span>
          </p>
        </div>
      </div>
      <div className="bg-[#d2d0d0] w-full h-[50rem]"></div>
    </div>
  );
};

export default Agency1;
