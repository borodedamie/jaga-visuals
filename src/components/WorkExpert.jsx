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
    <div className="mb-[10rem] ">
      <div ref={scrollRef}>
        {" "}
        <div className="flex flex-col md:flex-row gap-[5%] md:items-center">
          <div
            onMouseEnter={() => setAutoHover(true)}
            onMouseLeave={() => setAutoHover(false)}
            style={{ flex: 1, paddingLeft: '10%' }}>
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
                    className="flex flex-col inset-0 object-cover"
                    src={logic}
                    //               sizes="(max-width: 600px) 480px,
                    //  800px"
                    srcSet={logic1}
                    style={{ width: '70vw', height: '90vh', border: '1px solid #f2f7f2' }}
                  />
                  <div className={`inset-0 absolute ${autoHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem]">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | BRANDING{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${autoHover ? 'text-[blue]' : ''}`}>
                <NavLink to="/logisticsbrief">Autoflex Logistics Inc</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setDofHover(true)}
            onMouseLeave={() => setDofHover(false)}
            style={{ flex: 1, paddingRight: '10%' }}>
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
                    className="flex inset-0 object-cover flex-col md:h-[26rem]"
                    src={dubai}
                    //             sizes="(max-width: 600px) 480px,
                    //  800px"
                    srcSet={dubai1}
                    style={{ width: '50vw', height: '50vh' }}
                  />
                  <div className={`inset-0 absolute ${dofHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[4rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest  text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${dofHover ? 'text-[blue]' : ''}`}>
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
        <div className="flex flex-col md:flex-row gap-[5%] md:items-center">
          <div
            onMouseEnter={() => setJumiaHover(true)}
            onMouseLeave={() => setJumiaHover(false)}
            style={{ flex: 1, paddingLeft: '10%' }}>
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
                    className="flex  inset-0 object-cover flex-col md:h-[26rem]"
                    //           sizes="(max-width: 600px) 480px,
                    //  800px"
                    srcSet={jumia1}
                    src={jumia}
                    style={{ width: '50vw', height: '50vh' }}
                  />
                  <div className={`inset-0 absolute ${jumiaHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[0rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${jumiaHover ? 'text-[blue]' : ''}`}>
                <NavLink to="/jumiabrief">Jumia Pay App</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setForetHover(true)}
            onMouseLeave={() => setForetHover(false)}
            style={{ flex: 1, paddingRight: '10rem' }}>
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
                    className="flex flex-col"
                    //             sizes="(max-width: 600px) 480px,
                    //  800px"
                    srcSet={foret11}
                    style={{ width: '70vw', height: '90vh' }}
                  />
                  <div className={`inset-0 absolute ${foretHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[4rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${foretHover ? 'text-[blue]' : ''}`}>
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
        <div className="flex flex-col md:flex-row gap-[5%] md:items-center">
          <div
            onMouseEnter={() => setWavyHover(true)}
            onMouseLeave={() => setWavyHover(false)}
            style={{ flex: 1, paddingLeft: '10%' }}>
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
                    className="flex inset-0 object-cover flex-col"
                    //               sizes="(max-width: 600px) 480px,
                    //  800px"
                    srcSet={speak1}
                    style={{ width: '70vw', height: '90vh' }}
                  />
                  <div className={`inset-0 absolute ${wavyHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem]">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${wavyHover ? 'text-[blue]' : ''}`}>
                <NavLink to="/wavybrief">Wavy Beauty Inc</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setNagaadHover(true)}
            onMouseLeave={() => setNagaadHover(false)}
            style={{ flex: 1, paddingRight: '10%' }}>
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
                    className="flex inset-0 object-cover flex-col md:h-[26rem]"
                    //             sizes="(max-width: 600px) 480px,
                    //  800px"
                    srcSet={nagaad11}
                    style={{ width: '50vw', height: '50vh' }}
                  />
                  <div className={`inset-0 absolute ${nagaadHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[4rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${nagaadHover ? 'text-[blue]' : ''}`}>
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
        <div className="flex flex-col md:flex-row gap-[5%] md:items-center">
          <div
            onMouseEnter={() => setPremiumHover(true)}
            onMouseLeave={() => setPremiumHover(false)}
            style={{ flex: 1, paddingLeft: '10%' }}>
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
                    className="flex inset-0 object-cover flex-col md:h-[26rem]"
                    //             sizes="(max-width: 600px) 480px,
                    //  800px"
                    style={{ width: '50vw', height: '50vh' }}
                  />
                  <div className={`inset-0 absolute ${premiumHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>
                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem]">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | MOTION GRAPHICS{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${premiumHover ? 'text-[blue]' : ''}`}>
                <NavLink to="/onebrief">101 Premium Properties</NavLink>
              </h1>
              <p className="text-[18px] mt-[0.5rem]">
                We fully branded a pioneering healthcare concept in the US
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHoHover(true)}
            onMouseLeave={() => setHoHover(false)}
            style={{ flex: 1, paddingRight: '10%' }}>
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
                    className="flex inset-0 object-cover  flex-col"
        //             sizes="(max-width: 600px) 480px,
        //  800px"
                    srcSet={HO}
                    style={{ width: '70vw', height: '90vh' }}
                  />
                  <div className={`inset-0 absolute ${HoHover ? 'hover:bg-[blue] hover:bg-opacity-25' : ''}`}></div>

                </NavLink>
              </motion.div>
            </div>
            <div className="text-[black] mt-[1rem] mb-[2rem] md:mb-0">
              {" "}
              <h2 className="text-[blue] tracking-widest text-[14px] leading-10">
                ART DIRECTION | SOCIAL MEDIA{" "}
              </h2>
              <h1 className={`text-[40px] hover:text-[blue] font-extrabold ${HoHover ? 'text-[blue]' : ''}`}>
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
