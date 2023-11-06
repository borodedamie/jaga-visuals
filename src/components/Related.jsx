import React, { useRef, useState } from "react";
import jumia1 from "../assets/jumia-mobile.webp";
import jumia from "../assets/jumia1.webp";
import foret11 from "../assets/foret-mobile.webp";
import foret1 from "../assets/foret1.webp";
import { motion } from "framer-motion";
import { fadeOut } from "./variants";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Related = () => {
  const scrollRef = useRef(null);

  const [jumiaHover, setJumiaHover] = useState(false);
  const [foretHover, setForetHover] = useState(false);

  return (
    <div className="px-[2rem] pb-[3rem] md:pb-[5rem] lg:px-[7rem] flex flex-col">
       <div className="flex pt-[4rem] md:pt-[15rem] pb-20 md:pb-30 flex-col md:flex-row items-center gap-10 justify-center lg:justify-center">
        <h2 className="text-[blue] font-bold text-[30px] md:text-[45px] ">
          Let's create magic
        </h2>
        <hr className="hidden md:flex border-3 h-[7rem] w-[.3rem] bg-[blue]" />
        <div className="flex flex-row items-center justify-center">
          <NavLink to="/contact">
            <button className="text-[14px] px-10 justify-center items-center text-center flex rounded-full font-medium h-[4rem] text-[white] border-[blue] py-5 w-fit bg-[blue] border-[2px] hover:bg-[white] hover:text-[blue] hover:border-[blue]">
              START YOUR PROJECT
            </button>
          </NavLink>
        </div>
      </div>

      <h2 className="text-[black] font-bold text-[35px] md:text-[45px] my-[5%]">
        Related Projects
      </h2>
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-5 md:gap-10 mb-[7%]">
          <div
            className=""
            onMouseEnter={() => setJumiaHover(true)}
            onMouseLeave={() => setJumiaHover(false)}
          >
            <div>
              <div className="relative w-[20rem] h-[20rem] md:w-[40vw] md:h-fit">
                <NavLink to="/jumiabrief">
                  <motion.div
                    className="opacity-100 hover:opacity-75 "
                    variants={fadeOut("bottom", 0.5)}
                    viewport={{ amount: 0.7, once: true }}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <LazyLoadImage
                      alt="Jumia"
                      className="flex inset-0 object-contain md:object-cover flex-col w-[20rem] h-[20rem] md:w-[40vw] md:h-fit "
                      srcSet={jumia1}
                      src={jumia}
                    />
                    <div
                      className={`inset-0 absolute ${
                        jumiaHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                      }`}
                    ></div>
                  </motion.div>
                </NavLink>
              </div>

              <div className="text-[black]">
                {" "}
                <h2 className="mt-[1rem] text-[blue] tracking-widest text-[14px] leading-tight">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1
                  className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                    jumiaHover ? "text-[blue]" : ""
                  }`}
                >
                  <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
                </h1>
              </div>
            </div>
          </div>
          <div
            className=""
            onMouseEnter={() => setForetHover(true)}
            onMouseLeave={() => setForetHover(false)}
          >
            <div className="relative w-[20rem] h-[20rem] md:w-[40vw] md:h-fit">
              <NavLink to="/foretbrief">
                <motion.div
                  className="opacity-100 hover:opacity-75 "
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7, once: true }}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <LazyLoadImage
                    src={foret1}
                    className="flex inset-0 object-contain md:object-cover flex-col w-[20rem] h-[20rem] md:w-[40vw] md:h-fit"
                    srcSet={foret11}
                  />
                  <div
                    className={`inset-0 absolute ${
                      foretHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </motion.div>
              </NavLink>
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="mt-[1rem] text-[blue] tracking-widest text-[14px] leading-tight">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  foretHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/foretbrief">Foret Dubai</NavLink>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
