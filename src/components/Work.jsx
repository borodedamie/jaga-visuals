import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeOut, fadeIn } from "./variants";
import logic from "../assets/logic.jpg";
import dubai from "../assets/dubai.jpg";
import jumia from "../assets/jumia1.webp";
import foret1 from "../assets/foret1.webp";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Work = () => {
  const scrollRef = useRef(null);
  return (
    <div>
      <div className="bg-[#1c1b1b] mt-20 py-[9rem]">
        <div className="flex flex-col md:flex-row gap-[7rem] md:mx-60 items-center justify-center">
          <div className="text-[white] flex flex-col font-bold text-[120px]">
            <div className="flex gap-[5rem]">
              <span>W</span>
              <span>O</span>
            </div>
            <div className="flex gap-[8rem]">
              <span>R</span>
              <span>K</span>
            </div>
          </div>
          <div className="w-[22rem] md:w-[20rem] flex flex-col font-black text-[50px] text-left">
            <h2 className="text-[#0dfff6] ">
              Shit-hot work for hot-shot brands
            </h2>
          </div>
        </div>
        <div ref={scrollRef}>
          {" "}
          <div className="flex flex-col md:flex-row gap-10 justify-center md:items-center px-10">
            <div>
              <div className="w-full">
                <div className="opacity-100 hover:opacity-75 ">
                  <NavLink to="/logisticsbrief">
                    <motion.div
                      variants={fadeOut("bottom", 0.5)}
                      viewport={{ amount: 0.7 }}
                      initial="hidden"
                      whileInView={"show"}
                    >
                      <LazyLoadImage
                        className="flex flex-col h-[36rem] w-full md:w-[32rem]"
                        src={logic}
                      />
                    </motion.div>
                  </NavLink>
                </div>
                <div className="text-[white]">
                  {" "}
                  <h2 className="text-[#0dfff6]  text-[14px] leading-10">
                    ART DIRECTION | BRANDING{" "}
                  </h2>
                  <h1 className="text-[24px] hover:text-[#0dfff6] font-bold leading-10">
                    <NavLink to="/logisticsbrief">
                      Autoflex Logistics Inc
                    </NavLink>
                  </h1>
                  <p className="text-[14px] w-[18rem]">
                    We fully branded a pioneering healthcare concept in the US
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="opacity-100 hover:opacity-75">
                <NavLink to="/dofbrief">
                  <motion.div
                    variants={fadeOut("bottom", 0.5)}
                    viewport={{ amount: 0.7 }}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <LazyLoadImage
                      alt="Dubai"
                      className="flex flex-col h-[28rem] w-full md:w-[32rem]"
                      src={dubai}
                    />{" "}
                  </motion.div>
                </NavLink>
              </div>
              <div className="text-[white]">
                {" "}
                <h2 className="text-[#0dfff6]  text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1 className="text-[24px] hover:text-[#0dfff6] font-bold leading-10">
                  <NavLink to="/dofbrief">DOF Dubai </NavLink>
                </h1>
                <p className="text-[14px] w-[18rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={scrollRef}>
          {" "}
          <div className="flex flex-col md:flex-row gap-10 justify-center md:items-center px-10">
            <div>
              <div className="w-full">
                <div className="opacity-100 hover:opacity-75 ">
                  <NavLink to="/jumiabrief">
                    <motion.div
                      variants={fadeOut("bottom", 0.5)}
                      viewport={{ amount: 0.7 }}
                      initial="hidden"
                      whileInView={"show"}
                    >
                      <LazyLoadImage
                        alt="Jumia"
                        className="flex flex-col h-[28rem] w-full md:w-[32rem]"
                        src={jumia}
                      />
                    </motion.div>
                  </NavLink>
                </div>
                <div className="text-[white]">
                  {" "}
                  <h2 className="text-[#0dfff6]  text-[14px] leading-10">
                    ART DIRECTION | MOTION GRPAHICS{" "}
                  </h2>
                  <h1 className="text-[24px] hover:text-[#0dfff6] font-bold leading-10">
                    <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
                  </h1>
                  <p className="text-[14px] w-[18rem]">
                    We fully branded a pioneering healthcare concept in the US
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="opacity-100 hover:opacity-75 ">
                <NavLink to="/foretbrief">
                  {" "}
                  <motion.div
                    variants={fadeOut("bottom", 0.5)}
                    viewport={{ amount: 0.7 }}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <LazyLoadImage
                      variants={fadeOut("bottom", 0.5)}
                      viewport={{ amount: 0.7 }}
                      initial="hidden"
                      whileInView={"show"}
                      className="flex flex-col h-[36rem] w-full md:w-[32rem]"
                      src={foret1}
                    />
                  </motion.div>
                </NavLink>
              </div>
              <div className="text-[white]">
                {" "}
                <h2 className="text-[#0dfff6]  text-[14px] leading-10">
                  ART DIRECTION | SOCIAL MEDIA{" "}
                </h2>
                <h1 className="text-[24px] hover:text-[#0dfff6] font-bold leading-10">
                  <NavLink to="/foretbrief">Foret Dubai</NavLink>
                </h1>
                <p className="text-[14px] w-[18rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/works">
          {" "}
          <button className="mt-[7rem] text-center items-center flex mx-auto rounded-full hover:bg-white hover:text-black font-medium h-[2rem] text-[white] p-5 border-[white] border-[2px]">
            VIEW ALL WORKS
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Work;
