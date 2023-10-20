import React from "react";
import { data } from "../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import { motion } from "framer-motion";
import services2 from "../assets/services.png";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-dom"
import { sentence, letter, fadeIn } from "./variants";

const Service1 = () => {
  const line1 = "standout websites and branding ";

  return (
    <>
      <div className="px-[10rem] py-[10rem] gap-[1rem] flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-[35rem] md:h-[20rem]" style={{ flex: 1 }}>
          <img src={services2} alt='services' style={{ maxWidth: 'none', width: '30vw' }} />
        </div>
        <div className="flex flex-col items-center md:items-start text-left justify-center md:w-[30rem]" style={{ flex: 1 }}>
          <p className="text-[20px] font-medium text-[grey]">
            Crafting{" "}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-[blue]"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
            using sound strategic thinking and eye-catching digital, that
            creates instant impact and sparks emotion. To really see what we can
            do, take a look at our full range of digital creative agency
            services.
          </p>
          <div className="text-[16px] text-[grey] font-semibold flex flex-row gap-20 mx-5 md:mx-0 text-left pt-10">
            <div>
              <p style={{ display: 'flex', alignItems: 'center' }}><MdNavigateNext style={{ fontSize: '20px', color: 'blue' }}/>Creative Design</p>
              <p style={{ display: 'flex', alignItems: 'center' }}><MdNavigateNext style={{ fontSize: '20px', color: 'blue' }} />Motion Graphics</p>
              <p style={{ display: 'flex', alignItems: 'center' }}><MdNavigateNext style={{ fontSize: '20px', color: 'blue' }} />Web Development</p>
            </div>
            <div>
              <p style={{ display: 'flex', alignItems: 'center' }}><MdNavigateNext style={{ fontSize: '20px', color: 'blue' }} />Branding</p>
              <p style={{ display: 'flex', alignItems: 'center' }}><MdNavigateNext style={{ fontSize: '20px', color: 'blue' }} />Digital Marketing</p>
              <p style={{ display: 'flex', alignItems: 'center' }}><MdNavigateNext style={{ fontSize: '20px', color: 'blue' }} />Social Media Management</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[10rem]" style={{ padding: "0 5%" }}>
        {data.map((data1, s) => {
          return (
            <motion.div
              variants={fadeIn("right", 0.5)}
              viewport={{ once: true, amount: 0.7 }}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col md:flex-row mx-5 md:mx-20 justify-center gap-[3rem] items-center my-[10%]">
              <div key={s} style={{ flex: 1 }}>
                <h2 className="text-[40px] font-bold text-[#26316c]">
                  {data1.title}
                </h2>
                <p className="text-[18px] font-medium text-[grey] leading-8 py-5">
                  {data1.paragraph}
                </p>
                <Button />
              </div>
              <LazyLoadImage src={data1.design} className="rounded-2xl" style={{ flex: 1, width: '35vw', height: '60vh' }} />
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
                <NavLink to="/contact">
                  <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
                    START YOUR PROJECT
                  </button>
                </NavLink>
              </div>
    </>
  );
};

export default Service1;
