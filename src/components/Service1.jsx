import React from "react";
import { data } from "../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import { motion } from "framer-motion";
import services2 from "../assets/services.webp";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { sentence, letter, fadeIn } from "./variants";
import useWhiteBackground from '../hooks/useWhiteBackground';

const Service1 = () => {
  const line1 = "extraordinary websites and branding ";
  const isWhiteBackground = useWhiteBackground();
  console.log(isWhiteBackground);

  return (
    <>
      <div className="px-5 md:px-[10rem] py-[3rem] md:py-[10rem] gap-[1rem] flex flex-col md:flex-col lg:flex-row items-center justify-center">
        <div className="" style={{ flex: 1 }}>
          <img src={services2} alt="services" className="w-fit lg:w-[35vw]" />
        </div>
        <div className="flex flex-1 flex-col items-start justify-center text-center lg:text-left w-full md:w-[30rem]">
          <p className="text-[18px] md:text-[23px] font-medium text-[grey]">
            We create{" "}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-[#282860]"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
            through a tapestry of strategic brilliance and visually arresting digital artistry, igniting immediate impressions and kindling profound emotions. To reeally see the depth of our craft, explore the comprehensive spectrum of services offered by our digital creative agency.
          </p>
          <div className="text-[18px] md:text-[23px] text-[grey] font-semibold hidden lg:flex flex-col md:flex-row gap-0 md:gap-20 text-left pt-10">
            <div>
              <p className="flex items-center">
                <MdNavigateNext className="text-[20px] md:text-[24px] text-[blue]" />
                Creative Design
              </p>
              <p className="flex items-center">
                <MdNavigateNext className="text-[20px] md:text-[24px] text-[blue]" />
                Motion Graphics
              </p>
              <p className="flex items-center">
                <MdNavigateNext className="text-[20px] md:text-[24px] text-[blue]" />
                Web Development
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <MdNavigateNext className="text-[20px] md:text-[24px] text-[blue]" />
                Branding
              </p>
              <p className="flex items-center">
                <MdNavigateNext className="text-[20px] md:text-[24px] text-[blue]" />
                Digital Marketing
              </p>
              <p className="flex items-center">
                <MdNavigateNext className="text-[20px] md:text-[24px] text-[blue]" />
                Social Media Management
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-0 md:mx-[5%] ">
        {data.map((data1, s) => {
          return (
            <motion.div
              variants={fadeIn("right", 0.5)}
              viewport={{ once: true, amount: 0.7 }}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col max-w-fit md:max-w-[100%] w-fit md:w-[100%] max-h-[100%] h-[100%] md:flex-row px-5 md:px-20 justify-center gap-[3rem] items-center my-[10%]"
            >
              <div
                key={s}
                style={{ flex: 1 }}
                className="max-w-fit md:max-w-[50%] w-[100%] max-h-[50%] h-[100%]"
              >
                <h2 className="text-[22px] md:text-[40px] font-bold text-[#26316c]">
                  {data1.title}
                </h2>
                <p className="text-[18px] font-medium text-[grey] leading-8 py-5">
                  {data1.paragraph}
                </p>
                <Button />
              </div>
              <LazyLoadImage
                src={data1.design}
                className="rounded-2xl  h-[100%] max-w-fit max-h-fit w-[100%] md:max-w-[50%] md:h-fit lg:h-[50%]"
              />
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className={`text-center text-[12px] mt-5 items-center flex rounded-full font-medium h-[3rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10  ${isWhiteBackground ? 'hover:border-[blue] bg-[blue] hover:bg-[white]' : 'border-[white] bg-[blue] hover:bg-[white]'}`}>
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Service1;
