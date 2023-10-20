import React from "react";
import { motion } from "framer-motion";
import agency1 from "../assets/agency.png";

import { sentence, letter } from "./variants";

const Agency1 = () => {
  const line1 = "Proudly signing every";
  const line2 = "piece";

  return (
    <div>
      <div className="gap-[4rem] flex flex-col md:flex-row items-center justify-center" style={{ paddingLeft: "15%", paddingRight: "10%", paddingTop: "5%", paddingBottom: "10%" }}>
        <div className="md:w-[20rem] flex flex-col" style={{ flex: 1 }}>
          <img src={agency1} alt="agency1" style={{ maxWidth: 'none', width: '35vw' }} />
        </div>
        <div className="text-left flex flex-col md:w-[26.5rem] " style={{ flex: 1 }}>
          <motion.h2
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
          </motion.h2>
          <p className="text-[20px] font-medium pt-10 text-[#201f1f]">
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
