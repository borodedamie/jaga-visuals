import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
const WorkExpert = () => {
  return (
    <div>
      <div className="flex flex-col justify-around items-center">
      <motion.div 
     variants={fadeIn("right", 0.5)}
     viewport={{ once: true, amount: 0.7 }}
     initial="hidden"
     whileInView={"show"} 
       className="flex w-full flex-col md:flex-row justify-center px-5 gap-10">
          <div className="my-20 md:my-0">
            <div className="border bg-[black] h-[25rem] w-full md:w-[22rem]"></div>
            <div className="text-[black]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | BRANDING
              </h2>
              <h1 className="text-[24px] font-bold leading-10">
                Autoflex Logistics Inc
              </h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div>
            <div className="border bg-[black] h-[25rem] md:h-[20rem] w-full md:w-[22rem]"></div>
            <div className="text-[black]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS
              </h2>
              <h1 className="text-[24px] font-bold leading-10">DOF Dubai</h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("right", 0.5)}
        viewport={{ once: true, amount: 0.7 }}
        initial="hidden"
        whileInView={"show"} 
           className="flex w-full flex-col md:flex-row justify-center px-5 gap-10 py-20">
          <div className="my-20 md:my-0">
            <div className="border bg-[black] h-[25rem] md:h-[20rem] w-full md:w-[22rem]">
              {" "}
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS
              </h2>
              <h1 className="text-[24px] font-bold leading-10">Jumia Pay App</h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div>
            <div className="border bg-[black] h-[25rem] w-full md:w-[22rem]"></div>
            <div className="text-[black]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA
              </h2>
              <h1 className="text-[24px] font-bold leading-10">Foret Dubai</h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("right", 0.5)}
        viewport={{ once: true, amount: 0.7 }}
        initial="hidden"
        whileInView={"show"} 
           className="flex w-full flex-col md:flex-row justify-center px-5 gap-10 py-20">
          <div className="my-20 md:my-0">
            <div className="border bg-[black] h-[25rem] w-full md:w-[22rem]"></div>
            <div className="text-[black]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | BRANDING
              </h2>
              <h1 className="text-[24px] font-bold leading-10">
                Autoflex Logistics Inc
              </h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div>
            <div className="border bg-[black] h-[25rem] md:h-[20rem] w-full md:w-[22rem]"></div>
            <div className="text-[black]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS
              </h2>
              <h1 className="text-[24px] font-bold leading-10">DOF Dubai</h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("right", 0.5)}
        viewport={{ once: true, amount: 0.7 }}
        initial="hidden"
        whileInView={"show"} 
          className="flex w-full flex-col md:flex-row justify-center px-5 gap-10 py-20">
          <div className="my-20 md:my-0">
            <div className="border bg-[black] h-[25rem] md:h-[20rem] w-full md:w-[22rem]">
              {" "}
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS
              </h2>
              <h1 className="text-[24px] font-bold leading-10">Wavy Beauty Inc</h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div>
            <div className="border bg-[black] h-[25rem] w-full md:w-[22rem]"></div>
            <div className="text-[black]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS
              </h2>
              <h1 className="text-[24px] font-bold leading-10">Nagaad Organic</h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExpert;
