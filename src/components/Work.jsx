import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeOut, fadeIn } from "./variants";
import logic from "../assets/Autoflex-Logistics-01-01.jpg";
import dubai from "../assets/dubai.jpg";
import jumia from "../assets/jumia1.webp";
import foret1 from "../assets/foret1.webp";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Work = () => {
  const scrollRef = useRef(null);
  const [autoHover, setAutoHover] = useState(false);
  const [dofHover, setDofHover] = useState(false);
  const [jumiaHover, setJumiaHover] = useState(false);
  const [foretHover, setForetHover] = useState(false);

  return (
    <div className="z-0">
      <div className="bg-[#1c1b1b] mt-20 py-[9rem] overflow-hidden">
        <div className="flex flex-col justify-center items-center md:flex-row gap-[2rem] md:gap-[10rem] px-10 md:mx-60 mb-10">
          <div className="text-[white] flex flex-col font-bold text-[150px] md:text-[200px] ">
            <div className="flex gap-[2rem] md:gap-[5rem]">
              <span>W</span>
              <span>O</span>
            </div>
            <div className="flex gap-[5rem] md:gap-[10rem]">
              <span>R</span>
              <span>K</span>
            </div>
          </div>
          <div className="font-bold text-[70px] text-center md:text-left mt-0 md:mt-[20rem]">
            <h2 className="text-[#0dfff6]">
              Shit-hot work for hot-shot brands
            </h2>
          </div>
        </div>
        <div ref={scrollRef}>
          {" "}
          <div className="flex flex-col  gap-[5%] justify-center px-10 md:flex-row md:items-center">
            <div
              onMouseEnter={() => setAutoHover(true)}
              onMouseLeave={() => setAutoHover(false)}
            >
              <div>
                <div className="relative">
                  <NavLink to="/logisticsbrief">
                    <motion.div
                      variants={fadeIn("top", 0.5)}
                      viewport={{ amount: 0.7, once: true }}
                      initial="hidden"
                      whileInView={"show"}
                    >
                      <LazyLoadImage
                        className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:h-[60rem] md:w-[45rem]"
                        src={logic}
                      />
                      <div
                        className={`inset-0 absolute ${
                          autoHover
                            ? "hover:bg-[#0dfff6] hover:bg-opacity-50"
                            : ""
                        }`}
                      ></div>
                    </motion.div>
                  </NavLink>
                </div>
                <div className="text-[white] mt-[1rem] mb-[4rem] md:mb-0">
                  <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                    ART DIRECTION | BRANDING
                  </h2>
                  <h1
                    className={`text-[40px] hover:text-[#0dfff6] font-extrabold ${
                      autoHover ? "text-[#0dfff6]" : ""
                    }`}
                  >
                    <NavLink to="/logisticsbrief">
                      Autoflex Logistics Inc
                    </NavLink>
                  </h1>
                  <p className="text-[18px] mt-[0.5rem]">
                    We fully branded a pioneering healthcare concept in the US
                  </p>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => setDofHover(true)}
              onMouseLeave={() => setDofHover(false)}
              className=""
            >
              <div className="relative">
                <motion.div
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7, once: true }}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <NavLink to="/dofbrief">
                    <LazyLoadImage
                      alt="Dubai"
                      className="flex inset-0 object-contain md:object-cover flex-col h-fit md:h-[40rem] w-fit md:w-[45rem]"
                      src={dubai}
                    />{" "}
                  </NavLink>

                  <div
                    className={`inset-0 absolute ${
                      dofHover ? "hover:bg-[#0dfff6] hover:bg-opacity-50" : ""
                    }`}
                  ></div>
                </motion.div>
              </div>
              <div className="text-[white] mt-[1rem] mb-[4rem] md:mb-0">
                {" "}
                <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1
                  className={`text-[40px] hover:text-[#0dfff6] font-extrabold ${
                    dofHover ? "text-[#0dfff6]" : ""
                  }`}
                >
                  <NavLink to="/dofbrief">DOF Dubai </NavLink>
                </h1>
                <p className="text-[18px] mt-[0.5rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={scrollRef}>
          {" "}
          <div className="flex flex-col justify-center gap-[5%] px-10 md:flex-row md:items-center">
            <div
              onMouseEnter={() => setJumiaHover(true)}
              onMouseLeave={() => setJumiaHover(false)}
            >
              <div>
                <div className=" relative">
                  <motion.div
                    variants={fadeOut("bottom", 0.5)}
                    viewport={{ amount: 0.7, once: true }}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <NavLink to="/jumiabrief">
                      <LazyLoadImage
                        alt="Jumia"
                        className="flex inset-0 object-contain md:object-cover flex-col h-fit md:h-[40rem] w-fit md:w-[45rem]"
                        src={jumia}
                      />
                    </NavLink>

                    <div
                      className={`inset-0 absolute ${
                        jumiaHover
                          ? "hover:bg-[#0dfff6] hover:bg-opacity-50"
                          : ""
                      }`}
                    ></div>
                  </motion.div>
                </div>
                <div className="text-[white] mt-[1rem] mb-[4rem] md:mb-0">
                  {" "}
                  <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                    ART DIRECTION | MOTION GRAPHICS{" "}
                  </h2>
                  <h1
                    className={`text-[40px] hover:text-[#0dfff6] font-extrabold ${
                      jumiaHover ? "text-[#0dfff6]" : ""
                    }`}
                  >
                    <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
                  </h1>
                  <p className="text-[18px] mt-[0.5rem]">
                    We fully branded a pioneering healthcare concept in the US
                  </p>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => setForetHover(true)}
              onMouseLeave={() => setForetHover(false)}
            >
              <div className=" relative">
                {" "}
                <motion.div
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7, once: true }}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <NavLink to="/foretbrief">
                    <LazyLoadImage
                      
                      className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:h-[60rem] md:w-[45rem]"
                      src={foret1}
                    />
                  </NavLink>

                  <div
                    className={`inset-0 absolute ${
                      foretHover ? "hover:bg-[#0dfff6] hover:bg-opacity-50" : ""
                    }`}
                  ></div>
                </motion.div>
              </div>
              <div className="text-[white] mt-[1rem] mb-[4rem] md:mb-0">
                {" "}
                <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                  ART DIRECTION | SOCIAL MEDIA{" "}
                </h2>
                <h1
                  className={`text-[40px] hover:text-[#0dfff6] font-extrabold ${
                    foretHover ? "text-[#0dfff6]" : ""
                  }`}
                >
                  <NavLink to="/foretbrief">Foret Dubai</NavLink>
                </h1>
                <p className="text-[18px] mt-[0.5rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/works">
          {" "}
          <button className="mt-[10rem] text-center items-center flex mx-auto rounded-full hover:bg-white hover:text-black font-medium h-[3rem] text-[white] p-5 border-[white] border-[2px]">
            VIEW ALL WORKS
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Work;
