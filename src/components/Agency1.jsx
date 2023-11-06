import React from "react";
import { motion } from "framer-motion";
import agency1 from "../assets/agency.webp";
import promo from '../assets/promo.mp4'
import { sentence, letter } from "./variants";
import { NavLink } from "react-router-dom";

const Agency1 = () => {
  const line1 = "Every work of ours is a masterpiece";

  return (
    <div>
      <div className="pt-10 pb-[10%] gap-[2rem] flex flex-col lg:flex-row items-center justify-center" >
        <div className="ml-0 lg:ml-[15%]" >
          <img src={agency1} alt="agency1" className="w-fit lg:w-[35vw]" />
        </div>
        <div className="text-center w-[100%] md1:w-[70%] md:w-[100%] lg:md:w-[30%] lg:text-left mr-0  lg:mr-[10%] " >
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-[#282860] px-[2rem] md1:px-0 font-extrabold text-[50px] lg:text-[50px] leading-tight"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            
          </motion.h1>
          <p className="text-[20px] font-medium pt-[5%] text-[#201f1f] w-full px-5 lg:px-0 lg:w-[75%] tracking-tight">
            Because it should never just be work, it should be a{" "}
            <span className="text-[blue]">work of art.</span>
          </p>
        </div>
      </div>
      <div className="">
      <video
      muted
                loop
                autoPlay
                controls
                className=""
              >
                <source src={promo} />
              </video>
              
      </div>

      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[13px] mt-5 items-center flex rounded-full font-medium h-[3rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] hover:border-[blue]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Agency1;
