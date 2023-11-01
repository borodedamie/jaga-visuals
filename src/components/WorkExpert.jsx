import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeOut } from "./variants";
import logic from "../assets/logic.webp";
import logic1 from "../assets/Autoflex-Logistics-01-01.webp";
import dubai from "../assets/dubai.webp";
import dubai1 from "../assets/DOP-Dubai-mobile.webp";
import foret11 from "../assets/foret-mobile.webp";
import nagaad11 from "../assets/Nagaad-Organics.webp";
import jumia1 from "../assets/jumia-mobile.webp";
import jumia from "../assets/jumia1.webp";
import foret1 from "../assets/foret1.webp";
import nagaad1 from "../assets/nagaad1.webp";
import speak from "../assets/speak.webp";
import speak1 from "../assets/wavy-beauty-mobile.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HO from "../assets/HO-GAS-mobile.webp";
import { NavLink } from "react-router-dom";
import oneO from "../assets/101-Properties.webp";
import pandas from "../assets/ponda.mp4";
import pandasmobile from "../assets/pandasmobile.mp4";
const WorkExpert = () => {
  const scrollRef = useRef(null);
  const [autoHover, setAutoHover] = useState(false);
  const [dofHover, setDofHover] = useState(false);
  const [jumiaHover, setJumiaHover] = useState(false);
  const [premiumHover, setPremiumHover] = useState(false);
  const [HoHover, setHoHover] = useState(false);
  const [foretHover, setForetHover] = useState(false);
  const [wavyHover, setWavyHover] = useState(false);
  const [nagaadHover, setNagaadHover] = useState(false);
  const [pondaHover, setPondaHover] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  return (
    <div className="mb-[10rem] overflow-hidden z-0">
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col gap-[5%] justify-center px-0 lg:px-10 lg:flex-row lg:items-center">
          <div
            className="ml-5 mr-5 lg:mr-0 lg lg:ml-[10%] flex-1"
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
                    className="flex w-fit border border-1 border-[#f2f7f2] inset-0 object-contain lg:object-cover flex-col lg:w-[70vw] lg:h-[90vh]"
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
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  autoHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/logisticsbrief">Autoflex Logistics Inc</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 lg:ml-0 lg:mr-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[50vw] lg:h-[50vh]"
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
            <div className="text-[black] mt-[1rem] mb-[4rem] lg:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest  text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  dofHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/dofbrief">DOF Dubai </NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col justify-center px-0 lg:px-10 gap-[5%] lg:flex-row lg:items-center">
          <div
            onMouseEnter={() => setJumiaHover(true)}
            onMouseLeave={() => setJumiaHover(false)}
            className="ml-5 mr-5 lg:mr-0 lg:ml-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[50vw] lg:h-[50vh]"
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
            <div className="text-[black] mt-[1rem] mb-[0rem] lg:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  jumiaHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 lg:ml-0 lg lg:mr-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[70vw] lg:h-[90vh]"
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
            <div className="text-[black] mt-[1rem] mb-[4rem] lg:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  foretHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/foretbrief">Foret Dubai</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col gap-[5%] justify-center px-0 lg:px-10 lg:flex-row lg:items-center">
          <div
            className="ml-5 mr-5 lg:mr-0 lg lg:ml-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[70vw] lg:h-[90vh]"
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
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  wavyHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/wavybrief">Wavy Beauty Inc</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 lg:ml-0 lg:mr-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[50vw] lg:h-[50vh]"
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
            <div className="text-[black] mt-[1rem] mb-[4rem] lg:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  nagaadHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/nagaadbrief">Nagaad Organics</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col justify-center px-0 lg:px-10 gap-[5%] lg:flex-row lg:items-center">
          <div
            onMouseEnter={() => setPremiumHover(true)}
            onMouseLeave={() => setPremiumHover(false)}
            className="ml-5 mr-5 lg:mr-0 lg:ml-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[50vw] lg:h-[50vh]"
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
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  premiumHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/onebrief">101 Premium Properties</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            className="ml-5 mr-5 lg:ml-0 lg lg:mr-[10%] flex-1"
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
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[70vw] lg:h-[90vh]"
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
            <div className="text-[black] mt-[1rem] mb-[2rem] lg:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1
                className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                  HoHover ? "text-[blue]" : ""
                }`}
              >
                <NavLink to="/hobrief">HO Gas</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[5%] justify-center px-0 lg:px-10 lg:flex-row lg:items-center">
        <div
          className="ml-5 mr-5 lg:mr-0 lg lg:ml-[10%] flex-1"
          onMouseEnter={() => setPondaHover(true)}
          onMouseLeave={() => setPondaHover(false)}
        >
          <div className="relative">
            <motion.div
              whileInView={"show"}
              variants={fadeOut("bottom", 0.5)}
              viewport={{ amount: 0.7, once: true }}
              initial="hidden"
            >
              <NavLink to="/pondasbrief">
                <div style={{ flex: 1 }} className="flex inset-0  flex-col">
                
                    <video
                    
                    ref={videoRef}
                    className="flex w-fit inset-0 object-contain lg:object-cover flex-col lg:w-[70vw] lg:h-[90vh]"
                    loop
                    autoPlay
                    muted
                    mutedcontrols>
                      <source
                        src={pandas}
                        type="video/mp4"
                        media="(min-width: 768px)"
                      />
                      <source
                        src={pandasmobile}
                        type="video/mp4"
                        media="(max-width: 767px)"
                      />
                      Your browser does not support the video tag.
                    </video>

                    
                  <div
                    className={`inset-0 absolute ${
                      pondaHover ? "hover:bg-[blue] hover:bg-opacity-25" : ""
                    }`}
                  ></div>
                </div>
              </NavLink>
            </motion.div>
          </div>
          <div className="text-[black] mt-[1rem]">
            {" "}
            <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
              ART DIRECTION | BRANDING{" "}
            </h2>
            <h1
              className={`text-[25px] md:text-[35px] hover:text-[blue] font-[700] ${
                pondaHover ? "text-[blue]" : ""
              }`}
            >
              <NavLink to="/logisticsbrief">Ponda Tribe</NavLink>
            </h1>
            <p className="text-[18px] mt-[0.5rem] mb-[1rem] lg:mb-0">
              We fully branded a pioneering healthcare concept in the US
            </p>
          </div>
        </div>
        <div
          className="ml-5 mr-5 lg:ml-0 lg:mr-[10%] flex-1"
          onMouseEnter={() => setDofHover(true)}
          onMouseLeave={() => setDofHover(false)}
        ></div>
      </div>
      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 lg:bottom-6 lg:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 lg:py-7 lg:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default WorkExpert;
