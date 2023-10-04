import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeOut } from "./variants";
import logic from "../assets/logic.jpg";
import logic1 from "../assets/logic-mobile.jpg";
import dubai from "../assets/dubai.jpg";
import dubai1 from "../assets/DOP-Dubai-mobile.jpg";
import foret11 from "../assets/foret-mobile.jpg";
import nagaad11 from "../assets/Nagaad-Organics.jpg";
import jumia1 from "../assets/jumia-mobile.jpg";
import jumia from "../assets/jumia1.webp";
import foret1 from "../assets/foret1.webp";
import nagaad1 from "../assets/nagaad1.webp";
import speak from "../assets/speak.webp";
import speak1 from "../assets/wavy-beauty-mobile.jpg";
import HO from "../assets/HO-GAS-mobile.jpg";
import { NavLink } from "react-router-dom";
import oneO from "../assets/101-Properties-mobile.jpg";

const WorkExpert = () => {
  const scrollRef = useRef(null);

  return (
    <div className="mb-[10rem] ">
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col md:flex-row gap-[5rem] justify-center md:items-center px-5">
          <div>
            <div className="w-full">
            <div className="opacity-100 hover:opacity-75 ">
              <NavLink to="/logisticsbrief">
              <motion.img
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7 }}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex flex-col w-[32rem]"
                  src={logic}
                  sizes="(max-width: 600px) 480px,
         800px"
                  srcSet={logic1}
                ></motion.img>
              </NavLink>

               
              </div>
              <div className="text-[black]">
                {" "}
                <h2 className="text-[blue] text-[14px] leading-10">
                  ART DIRECTION | BRANDING{" "}
                </h2>
                <h1 className="text-[24px] hover:text-[blue]  font-bold leading-10">

                  <NavLink to="/logisticsbrief">Autoflex Logistics Inc</NavLink>
                </h1>
                <p className="text-[14px] w-[18rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
          <div className="">
          <div className="opacity-100 hover:opacity-75 ">
            <NavLink to="/dofbrief">
            <motion.img
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
                className="flex flex-col w-[32rem] md:h-[26rem]"
                src={dubai}
                sizes="(max-width: 600px) 480px,
         800px"
                srcSet={dubai1}
              ></motion.img>
            </NavLink>

              
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[blue]  text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
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
        <div className="flex flex-col md:flex-row gap-[5rem] justify-center md:items-center px-5">
          <div>
            <div className="w-full">
            <div className="opacity-100 hover:opacity-75 ">
              <NavLink to="/jumiabrief">
              <motion.img
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7 }}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex flex-col w-[32rem] md:h-[26rem]"
                  sizes="(max-width: 600px) 480px,
           800px"
                  srcSet={jumia1}
                  src={jumia}
                ></motion.img>
              </NavLink>

               
              </div>
              <div className="text-[black]">
                {" "}
                <h2 className="text-[blue]  text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
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
          <motion.img
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
                src={foret1}
                className="flex flex-col w-[32rem]"
                sizes="(max-width: 600px) 480px,
         800px"
                srcSet={foret11}
              ></motion.img>
          </NavLink>

              
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[blue] text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
                <NavLink to="/foretbrief">Foret Dubai</NavLink>
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
        <div className="flex flex-col md:flex-row gap-[5rem] justify-center md:items-center px-5">
          <div>
            <div className="w-full">
            <div className="opacity-100 hover:opacity-75 ">
            <NavLink to="/wavybrief">
            <motion.img
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7 }}
                  initial="hidden"
                  whileInView={"show"}
                  src={speak}
                  className="flex flex-col w-[32rem]"
                  sizes="(max-width: 600px) 480px,
         800px"
                  srcSet={speak1}
                ></motion.img>
            </NavLink>

                
              </div>
              <div className="text-[black]">
                {" "}
                <h2 className="text-[blue]  text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
                  <NavLink to="/wavybrief">Wavy Beauty Inc</NavLink>
                </h1>
                <p className="text-[14px] w-[18rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
          <div className="">
          <div className="opacity-100 hover:opacity-75 ">
            <NavLink to="/nagaadbrief">
            <motion.img
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
                src={nagaad1}
                className="flex flex-col w-[32rem] md:h-[26rem]"
                sizes="(max-width: 600px) 480px,
         800px"
                srcSet={nagaad11}
              ></motion.img>
            </NavLink>

             
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[blue]  text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
                <NavLink to="/nagaadbrief">Nagaad Organics</NavLink>
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
        <div className="flex flex-col md:flex-row gap-[5rem] justify-center md:items-center px-5">
          <div>
            <div className="w-full">
            <div className="opacity-100 hover:opacity-75 ">
            <NavLink to="/onebrief">
            <motion.img
                  variants={fadeOut("bottom", 0.5)}
                  viewport={{ amount: 0.7 }}
                  initial="hidden"
                  whileInView={"show"}
                  src={oneO}
                  className="flex flex-col w-[32rem] md:h-[26rem]"
                  sizes="(max-width: 600px) 480px,
         800px"
                ></motion.img>
            </NavLink>

                
              </div>
              <div className="text-[black]">
                {" "}
                <h2 className="text-[blue]  text-[14px] leading-10">
                  ART DIRECTION | MOTION GRAPHICS{" "}
                </h2>
                <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
                  <NavLink to="/onebrief">101 Premium Properties</NavLink>
                </h1>
                <p className="text-[14px] w-[18rem]">
                  We fully branded a pioneering healthcare concept in the US
                </p>
              </div>
            </div>
          </div>
          <div className="">
          <div className="opacity-100 hover:opacity-75 ">
            <NavLink to="/hobrief">
            <motion.img
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
                src={HO}
                className="flex flex-col w-[32rem]"
                sizes="(max-width: 600px) 480px,
         800px"
                srcSet={HO}
              ></motion.img>
            </NavLink>

              
            </div>
            <div className="text-[black]">
              {" "}
              <h2 className="text-[blue]  text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1 className="text-[24px] hover:text-[blue] font-bold leading-10">
                <NavLink to="/hobrief">HO Gas</NavLink>
              </h1>
              <p className="text-[14px] w-[18rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExpert;
