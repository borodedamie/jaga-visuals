import React, { useRef } from "react";
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

  return (
    <div className="px-5 ">
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col md:flex-row gap-[5rem] justify-center md:items-center px-5">
          <div>
            <div className="w-full">
              <h2 className="text-[black] font-bold text-[40px]">
                Related Projects
              </h2>

              <motion.div
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
              >
                <LazyLoadImage
                  className="flex flex-col w-[32rem]"
                  sizes="(max-width: 600px) 480px,
           800px"
                  srcSet={jumia1}
                  src={jumia}
                />
              </motion.div>
              <div className="text-[black]">
                {" "}
                <h2 className="text-[blue] font-bold text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1 className="text-[24px] font-bold leading-10">
                  <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
                </h1>
                <p className="text-[14px] w-[18rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-[white] font-bold text-[40px]">
              Related Projects
            </h2>

            <motion.div
              variants={fadeOut("bottom", 0.5)}
              viewport={{ amount: 0.7 }}
              initial="hidden"
              whileInView={"show"}
            >
              <LazyLoadImage
                src={foret1}
                className="flex flex-col w-[32rem]"
                sizes="(max-width: 600px) 480px,
         800px"
                srcSet={foret11}
              />
            </motion.div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[blue] font-bold text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1 className="text-[24px] font-bold leading-10">
                <NavLink to="/foretbrief">Foret Dubai</NavLink>
              </h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-20 pb-40 flex-row items-center gap-10 justify-center">
          <h2 className="text-[blue] font-bold text-[30px]">Don't be Shy</h2>
          <hr className="border-3 h-[4rem] w-1 bg-[#7979cf]" />
          <div className="flex flex-row items-center justify-center">
            <NavLink to="/contact">
              <button className=" text-center mt-5 items-center flex rounded-full font-medium h-[2rem] text-[white] p-5 border-[blue] bg-[blue] border-[2px]">
                START YOUR PROJECT
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Related;
