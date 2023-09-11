import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { expert } from "../assets/data";

const Work = () => {
  return (
    <div>
      <div className="bg-[#1c1b1b] mt-20 py-[9rem]">
        <div className="flex flex-col md:flex-row gap-[7rem] md:mx-60 items-center justify-center">
          <div className="text-[white] flex flex-col font-bold text-[120px]">
            <div className="flex gap-[5rem]">
              <span>W</span>
              <span>O</span>
            </div>
            <div className="flex gap-[9rem]">
              <span>R</span>
              <span>K</span>
            </div>
          </div>
          <div className="text-[#63bbca] w-[22rem] md:w-[20rem] flex flex-col font-black text-[50px] text-left">
            <h2>Shit-hot work for hot-shot brands</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] justify-center items-center mx-auto">
      {expert.map((expert1, index) => {
        return (
          <motion.div
            variants={fadeIn("right", 0.5)}
            viewport={{ amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col justify-around px-5"
          >
            <div className="" key={expert1.id}>
              <div className="border bg-[white] h-[25rem] md:h-[20rem] w-full md:w-[22rem]">
                {" "}
              </div>
              <div className="text-[white]">
                {" "}
                <h2
                  key={index}
                  className="text-[#63bbca] text-[14px] leading-10"
                >
                  {expert1.title}
                </h2>
                <h1 key={index} className="text-[24px] font-bold leading-10">
                  {" "}
                  {expert1.paragraph}
                </h1>
                <p key={index} className="text-[14px] w-[18rem]">
                  {expert1.sentence}{" "}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
      </div>
    </div>
  );
};

export default Work;
