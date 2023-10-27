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
    <div>
      <div className="bg-[#1c1b1b] mt-20 py-[9rem]">
        <div className="flex flex-col md:flex-row mb-[4rem] md:mb-0 gap-0 md:gap-[10rem] mx-0 md:mx-60">
          <div
            className="text-[white] flex flex-col font-bold justify-center items-center md:items-start text-[120px] md:text-[170px]"
            style={{ flex: 1 }}
          >
            <div className="flex gap-[5rem]">
              <span>W</span>
              <span>O</span>
            </div>
            <div className="flex gap-[7rem] md:gap-[10rem]">
              <span>R</span>
              <span>K</span>
            </div>
          </div>
          <div
            className="font-bold text-[50px] md:text-[60px] text-center md:text-left mt-[0] md:mt-[10rem]"
            style={{ flex: 1 }}
          >
            <h2 className="text-[#0dfff6]">
              Shit-hot work for hot-shot brands
            </h2>
          </div>
        </div>
        <div ref={scrollRef}>
          {" "}
          <div className="flex flex-col gap-0 md:gap-[5%] justify-center px-0 md:px-10 md:flex-row md:items-center">
            <div
              className="ml-5 mr-5 md:mr-0 md md:ml-[10%] flex-1"
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
                        className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[70vw] md:h-[80vh]"
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
                <div className="text-[white] mt-[1rem] mb-0 md:mb-[4rem] md:mb-0">
                  <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                    ART DIRECTION | BRANDING
                  </h2>
                  <h1
                    className={`text-[40px] hover:text-[#0dfff6] font-[700] ${
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
              className="ml-5 mr-5 md:ml-0 md:mr-[10%] flex-1"
              onMouseEnter={() => setDofHover(true)}
              onMouseLeave={() => setDofHover(false)}
            >
              <div className="relative">
                <NavLink to="/dofbrief">
                  <motion.div
                    variants={fadeOut("bottom", 0.5)}
                    viewport={{ amount: 0.7, once: true }}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <LazyLoadImage
                      alt="Dubai"
                      className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[50vw] md:h-[50vh]"
                      src={dubai}
                    />{" "}
                    <div
                      className={`inset-0 absolute ${
                        dofHover ? "hover:bg-[#0dfff6] hover:bg-opacity-50" : ""
                      }`}
                    ></div>
                  </motion.div>
                </NavLink>
              </div>
              <div className="text-[white] mt-[1rem] mb-0 md:mb-[4rem]">
                {" "}
                <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1
                  className={`text-[40px] hover:text-[#0dfff6] font-[700]  ${
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
          <div className="flex flex-col justify-center px-0 md:px-10 gap-0 md:gap-[5%] md:flex-row md:items-center">
            <div
              className="ml-5 mr-5 md:mr-0 md:ml-[10%] flex-1"
              onMouseEnter={() => setJumiaHover(true)}
              onMouseLeave={() => setJumiaHover(false)}
            >
              <div>
                <div className=" relative">
                <NavLink to="/jumiabrief">

                  <motion.div
                    variants={fadeOut("bottom", 0.5)}
                    viewport={{ amount: 0.7, once: true }}
                    initial="hidden"
                    whileInView={"show"}
                  >
                      <LazyLoadImage
                        alt="Jumia"
                        className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[50vw] md:h-[50vh]"
                        src={jumia}
                      />

                    <div
                      className={`inset-0 absolute ${
                        jumiaHover
                          ? "hover:bg-[#0dfff6] hover:bg-opacity-50"
                          : ""
                      }`}
                    ></div>
                  </motion.div>
                  </NavLink>

                </div>
                <div className="text-[white] mt-[1rem] mb-[4rem] md:mb-0">
                  {" "}
                  <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                    ART DIRECTION | MOTION GRAPHICS{" "}
                  </h2>
                  <h1
                    className={`text-[40px] hover:text-[#0dfff6] font-[700] ${
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
              className="ml-5 mr-5 md:ml-0 md md:mr-[10%] flex-1"
            >
              <div className=" relative">
                {" "}
                <NavLink to="/foretbrief">

                <motion.div
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7, once: true }}
                  initial="hidden"
                  whileInView={"show"}
                >
                    <LazyLoadImage
                      className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[70vw] md:h-[80vh]"
                      src={foret1}
                    />

                  <div
                    className={`inset-0 absolute ${
                      foretHover ? "hover:bg-[#0dfff6] hover:bg-opacity-50" : ""
                    }`}
                  ></div>
                </motion.div>
                </NavLink>

              </div>
              <div className="text-[white] mt-[1rem] mb-[4rem] md:mb-0">
                {" "}
                <h2 className="text-[#0dfff6] tracking-widest text-[14px] leading-10">
                  ART DIRECTION | SOCIAL MEDIA{" "}
                </h2>
                <h1
                  className={`text-[40px] hover:text-[#0dfff6] font-[700] ${
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
          <button className="mt-[2rem] md:mt-[10rem]  text-center items-center flex mx-auto rounded-full hover:bg-white hover:text-black font-medium h-[3rem] text-[white] p-5 border-[white] border-[2px]">
            VIEW ALL WORKS
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Work;
