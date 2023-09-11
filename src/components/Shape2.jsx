import React from "react";
import { motion } from "framer-motion";
const Shape2 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 mt-[30rem] md:mt-0 mx-auto md:mx-0 px-5">
      <motion.h2
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1 }}
        className="text-[blue] font-bold text-[38px] text-left leading-11 overflow-hidden w-full md:w-[42rem] py-10"
      >
        Our creative digital agency designs and develops bespoke websites with
        three things in mind
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[10rem] pt-10">
        <div>
          <h2 className="text-[#403e3e] text-[30px] font-extrabold">Beauty</h2>
          <p className="text-[#464545] text-[18px] font-semibold w-full">
            Developing stunning one-of-a-kind digital design that catches
            people’s eye and brings your brand to life online.
          </p>
        </div>
        <div>
          <h2 className="text-[#403e3e] text-[30px] font-extrabold">
            Thoughts
          </h2>
          <p className="text-[#464545] text-[18px] font-semibold w-full">
            As a Design design agency, we love to deliver meaningful design that
            build trust with your target audience.
          </p>
        </div>
        <div>
          <h2 className="text-[#403e3e] text-[30px] font-extrabold">Impacts</h2>
          <p className="text-[#464545] text-[18px] font-semibold w-full">
            Designing tailor made solutions that resonate with your customers
            and drives them to act.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shape2;
