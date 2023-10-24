import React, { useRef, useState } from "react";
import jumia1 from "../assets/jumia-mobile.jpg";
import jumia from "../assets/jumia1.webp";
import foret11 from "../assets/foret-mobile.jpg";
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
    <div className="px-[10%]">
      <h2 className="text-[black] font-bold text-[35px] my-[5%]">
        Related Projects
      </h2>
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col md:flex-row gap-[5rem] justify-center md:items-center">
          <div
            onMouseEnter={() => setJumiaHover(true)}
            onMouseLeave={() => setJumiaHover(false)}
          >
            <div>
              <div className="relative">
                <motion.div
                  className="opacity-100 hover:opacity-75 "
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7 }}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <LazyLoadImage
                    alt="Jumia"
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[30vw] md:h-[50vh]"
                    srcSet={jumia1}
                    src={jumia}
                  />
                  <div
                    className={`inset-0 absolute ${jumiaHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                      }`}
                  ></div>
                </motion.div>
              </div>

              <div className="text-[black]">
                {" "}
                <h2 className="mt-[1rem] text-[blue] tracking-widest text-[14px] leading-tight">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1 className={`text-[35px] hover:text-[blue] font-[700] ${jumiaHover ? "text-[blue]" : ""
                  }`}>
                  <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
                </h1>
                {/* <p className="text-[18px] mt-[0.5rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p> */}
              </div>
            </div>
          </div>
          <div className=""
            onMouseEnter={() => setForetHover(true)}
            onMouseLeave={() => setForetHover(false)}
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
              >
                <LazyLoadImage
                  src={foret1}
                  className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[30vw] md:h-[50vh]"
                  sizes="(max-width: 600px) 480px,
         800px"
                  srcSet={foret11}
                />
                <div
                    className={`inset-0 absolute ${
                      foretHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
              </motion.div>
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="mt-[1rem] text-[blue] tracking-widest text-[14px] leading-tight">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1 
                className={`text-[35px] hover:text-[blue] font-[700] ${
                  foretHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/foretbrief">Foret Dubai</NavLink>
              </h1>
              {/* <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p> */}
            </div>
          </div>
        </div>
        <div className="flex pt-20 pb-40 flex-row items-center gap-10 justify-center">
          <h2 className="text-[blue] font-bold text-[30px]">Don't be Shy</h2>
          <hr className="border-3 h-[4rem] w-0.5 bg-[#7979cf]" />
          <div className="flex flex-row items-center justify-center">
            <NavLink to="/contact">
              <button className="text-[12px] text-center items-center flex rounded-full font-medium h-[2rem] text-[white] p-5 border-[blue] bg-[blue] border-[2px] hover:bg-[white] hover:text-[blue] hover:border-[blue]">
                START YOUR PROJECT
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div> */}
    </div>
  );
};

export default Related;
