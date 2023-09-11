import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { file } from "../assets/data";

const WorkExpert = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] justify-center items-center mx-auto">
      {file.map((file1, index) => {
        return (
          <motion.div
            variants={fadeIn("right", 0.5)}
            viewport={{ amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col justify-around px-5"
          >
            <div className="" key={file1.id}>
              <div className="border bg-[black] h-[25rem] md:h-[20rem] w-full md:w-[22rem]">
                {" "}
              </div>
              <div className="text-[black]">
                {" "}
                <h2
                  key={index}
                  className="text-[#63bbca] text-[14px] leading-10"
                >
                  {file1.title}
                </h2>
                <h1 key={index} className="text-[24px] font-bold leading-10">
                  {" "}
                  {file1.paragraph}
                </h1>
                <p key={index} className="text-[14px] w-[18rem]">
                  {file1.sentence}{" "}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkExpert;
