import React from "react";
import { data } from "../assets/data";
import Button from "./Button";
import { motion } from "framer-motion";
import { sentence, letter, fadeIn } from "./variants";
const Service1 = () => {
  const line1 = "standout websites and branding ";
  return (
    <>
      <div className="gap-[60px] flex flex-col py-20 md:flex-row items-center md:items-center justify-center">
        <div className="text-[blue] flex flex-col font-black text-[70px]">
          <motion.div
            variants={fadeIn("right", 0.5)}
            viewport={{ once: true, amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-[2rem]"
          >
            <span>S</span>
            <span>E</span>
            <span>R</span>
            <span>V</span>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.5)}
            viewport={{ once: true, amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-[2.5rem]"
          >
            <span>I</span>
            <span>C</span>
            <span>E</span>
            <span>S</span>
          </motion.div>
        </div>
        <div className="flex flex-col px-5 items-center md:items-start text-left w-full justify-center md:w-[30rem] ">
          <p className="text-[23px] font-bold pt-10 text-[grey]">
            Crafting{" "}
            {/* <span className="text-[blue]">standout websites and branding</span>{" "} */}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-[blue]"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
            using sound strategic thinking and eye-catching digital, that
            creates instant impact and sparks emotion. To really see what we can
            do, take a look at our full range of digital creative agency
            services.
          </p>
          <div className="text-[16px] text-[grey] font-semibold flex flex-row gap-20 mx-5 md:mx-0 text-left pt-10">
            <div>
              <p>Creative Design</p>
              <p>Motion Graphics</p>
              <p>Web Development</p>
            </div>
            <div>
              <p>Branding</p>
              <p>Digital Marketing</p>
              <p>Social Media Management</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[17rem] ">
      {data.map((data1, s) => {
        return (
          <motion.div 
          variants={fadeIn("right", 0.5)}
          viewport={{ once: true, amount: 0.7 }}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col md:flex-row mx-5 md:mx-20 justify-center gap-20 items-center my-20">
            <div className="" key={s}>
              <h2
                
                className="text-[35px] w-full font-bold text-[#26316c]"
              >
                {data1.title}
              </h2>
              <p
                
                className="text-[18px] w-full md:w-[24.5rem] font-bold text-[grey] leading-8 py-5"
              >
                {data1.paragraph}
              </p>
              <Button />
              
            </div>
            <img src={data1.design} className="w-full md:w-[25rem] h-[20rem] rounded-2xl"/>

          </motion.div>
        );
      })}
      </div>
    </>
  );
};

export default Service1;
