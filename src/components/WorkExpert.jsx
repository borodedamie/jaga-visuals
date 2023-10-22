import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeOut } from "./variants";
import logic from "../assets/logic.jpg";
import logic1 from "../assets/Autoflex-Logistics-01-01.jpg";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import HO from "../assets/HO-GAS-mobile.jpg";
import { NavLink } from "react-router-dom";
import oneO from "../assets/101-Properties.jpg";

const WorkExpert = () => {
  const scrollRef = useRef(null);
  const [autoHover, setAutoHover] = useState(false);
  const [dofHover, setDofHover] = useState(false);
  const [jumiaHover, setJumiaHover] = useState(false);
  const [foretHover, setForetHover] = useState(false);
  const [wavyHover, setWavyHover] = useState(false);
  const [nagaadHover, setNagaadHover] = useState(false);
  const [premiumHover, setPremiumHover] = useState(false);
  const [HoHover, setHoHover] = useState(false);

  return (
    <div className="mb-[10rem] overflow-hidden z-0">
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col gap-[5%] justify-center px-0 md:px-10 md:flex-row md:items-center">
          <div
            className="ml-5 mr-5 md:mr-0 md md:ml-[10%] flex-1"
            onMouseEnter={() => setAutoHover(true)}
            onMouseLeave={() => setAutoHover(false)}
          >
            <div className="relative">
              <motion.div
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                <NavLink to="/logisticsbrief">
                  <LazyLoadImage
                    alt="Images"
                    className="flex w-fit h-fit border border-1 border-[#f2f7f2] inset-0 object-contain md:object-cover flex-col md:w-[70vw] md:h-[90vh]"
                    src={logic}
                    srcSet={logic1}
                  />
                  <div
                    className={`inset-0 absolute ${
                      autoHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem]">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | BRANDING{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  autoHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/logisticsbrief">Autoflex Logistics Inc</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 md:ml-0 md:mr-[10%] flex-1"
            onMouseEnter={() => setDofHover(true)}
            onMouseLeave={() => setDofHover(false)}
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/dofbrief">
                  <LazyLoadImage
                    alt="Images"
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[50vw] md:h-[50vh]"
                    src={dubai}
                    srcSet={dubai1}
                  />
                  <div
                    className={`inset-0 absolute ${
                      dofHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[4rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest  text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  dofHover ? "text-[blue]" : ""
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
        <div className="flex flex-col justify-center px-0 md:px-10 gap-[5%] md:flex-row md:items-center">
          <div
            onMouseEnter={() => setJumiaHover(true)}
            onMouseLeave={() => setJumiaHover(false)}
            className="ml-5 mr-5 md:mr-0 md:ml-[10%] flex-1"
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/jumiabrief">
                  <LazyLoadImage
                    alt="Jumia"
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[50vw] md:h-[50vh]"
                    srcSet={jumia1}
                    src={jumia}
                  />
                  <div
                    className={`inset-0 absolute ${
                      jumiaHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[0rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  jumiaHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 md:ml-0 md md:mr-[10%] flex-1"
            onMouseEnter={() => setForetHover(true)}
            onMouseLeave={() => setForetHover(false)}
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/foretbrief">
                  <LazyLoadImage
                    alt="Foret"
                    src={foret1}
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[70vw] md:h-[90vh]"
                    srcSet={foret11}
                  />
                  <div
                    className={`inset-0 absolute ${
                      foretHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[4rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  foretHover ? "text-[blue]" : ""
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
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col gap-[5%] justify-center px-0 md:px-10 md:flex-row md:items-center">
          <div
            className="ml-5 mr-5 md:mr-0 md md:ml-[10%] flex-1"
            onMouseEnter={() => setWavyHover(true)}
            onMouseLeave={() => setWavyHover(false)}
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/wavybrief">
                  <LazyLoadImage
                    alt="Ladies talking"
                    src={speak}
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[70vw] md:h-[90vh]"
                    srcSet={speak1}
                  />
                  <div
                    className={`inset-0 absolute ${
                      wavyHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem]">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  wavyHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/wavybrief">Wavy Beauty Inc</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 md:ml-0 md:mr-[10%] flex-1"
            onMouseEnter={() => setNagaadHover(true)}
            onMouseLeave={() => setNagaadHover(false)}
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/nagaadbrief">
                  <LazyLoadImage
                    alt="Nagaad"
                    src={nagaad1}
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[50vw] md:h-[50vh]"
                    srcSet={nagaad11}
                  />
                  <div
                    className={`inset-0 absolute ${
                      nagaadHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[4rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  nagaadHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/nagaadbrief">Nagaad Organics</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] ">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col justify-center px-0 md:px-10 gap-[5%] md:flex-row md:items-center">
          <div
            onMouseEnter={() => setPremiumHover(true)}
            onMouseLeave={() => setPremiumHover(false)}
            className="ml-5 mr-5 md:mr-0 md:ml-[10%] flex-1"
            >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/onebrief">
                  <LazyLoadImage
                    alt="101 Premium Properties"
                    src={oneO}
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[50vw] md:h-[50vh]"
                  
                  />
                  <div
                    className={`inset-0 absolute ${
                      premiumHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem]">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  premiumHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/onebrief">101 Premium Properties</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
              className="ml-5 mr-5 md:ml-0 md md:mr-[10%] flex-1"
              onMouseEnter={() => setHoHover(true)}
            onMouseLeave={() => setHoHover(false)}
          >
            <div className="relative">
              <motion.div
                className="opacity-100 hover:opacity-75 "
                whileInView={"show"}
                variants={fadeOut("bottom", 0.5)}
                viewport={{ amount: 0.7, once: true }}
                initial="hidden"
              >
                {" "}
                <NavLink to="/hobrief">
                  <LazyLoadImage
                    alt="HO gas"
                    src={HO}
                    className="flex w-fit h-fit inset-0 object-contain md:object-cover flex-col md:w-[70vw] md:h-[90vh]"
                    srcSet={HO}
                  />
                  <div
                    className={`inset-0 absolute ${
                      HoHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[2rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1
                className={`text-[40px] hover:text-[blue] font-[700] ${
                  HoHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/hobrief">HO Gas</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
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
