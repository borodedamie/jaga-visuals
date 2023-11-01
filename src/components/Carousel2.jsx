import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel1 } from "../assets/data";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";
import journey from "../assets/journey.webp";
import journey1 from "../assets/journey1.webp";
import make from "../assets/make.webp";
import make1 from "../assets/make1.webp";
import trust1 from "../assets/trust1.webp";
import trust from "../assets/trust.webp";

const Carousel2 = () => {
  useEffect(() => {
    new Glide(".glide1", {
      perView: 1,
      gap: 10,
    }).mount();
  }, []);

  return (
    <div className="glide1">
      <div className="glide1__track" data-glide-el="track">
        <div className="glide1__slides mb-0">
          <div className="glide1__slide relative">
            <div className="flex flex-col ">
              <img srcSet={journey} src={journey1} className="h-[100%] bg-cover" />
              <div className="flex absolute flex-col z-1 md:top-[5vw] items-center justify-center lg:items-start lg:justify-start w-full py-[1vw] lg:py-0">
                <h2 className="text-[22px] text-center pl-0 lg:pl-[5vw] xl:pl-[5vw] 2xl:pl-[23vw] pr-0 lg:pr-[10vw] xl:pr-[45rem] pt-0 lg:pt-[0vw]xl:pt-[0] 2xl:pt-[14rem] lg:text-left leading-[2rem] md:leading-[5rem] lg:leading-[6rem] md1:text-[30px]  lg:text-[80px] text-[#34eaf7] font-bold">
                  Journey to
                  <br />
                  the future
                </h2>
                <p className="text-center pl-0 lg:pl-[30vw] xl:pl-[50vw] pt-0 lg:pt-[2rem] xl:pt-[5rem] pr-0 lg:pr-[25rem] xl:pr-[15rem] 2xl:pr-[25rem] lg:text-left text-[20px] md1:text-[20px] md:text-[25px] w-fit text-[white]">
                  An expansive environment that <br /> will engage all the
                  senses
                </p>
              </div>
            </div>
          </div>
          <div className="glide1__slide relative">
            <div className="flex flex-col ">
              <img src={make1} srcSet={make} className=" bg-cover" />

              <div className="flex absolute md:top-[5vw] flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[1vw] lg:py-0">
                <h2 className="text-center lg:text-left text-[22px] md1:text-[25px] md:text-[30px] lg:text-[80px] leading-[1.5rem] md1:leading-[2rem] md:leading-[6rem] w-fit pl-0 lg:pl-[5vw] xl:pl-[5vw] 2xl:pl-[23vw] pr-0 lg:pr-[10vw] xl:pr-[25rem] 2xl:pr-[45rem] pt-0 lg:pt-[0vw] xl:pt-[0] 2xl:pt-[14rem] text-[#34eaf7] font-bold">
                  Make it beautiful, thoughtful and impactful
                </h2>
                <p className="text-center lg:text-left text-[16px] md1:text-[18px] md:text-[25px] w-fit pl-0 lg:pl-[30vw] xl:pl-[50vw] pt-0 lg:pt-[2rem] xl:pt-[5rem] pr-0 lg:pr-[25rem] xl:pr-[15rem] 2xl:pr-[25rem] text-[white]">
                  As artist, it's our job to ensure every website we design is
                  stunning to look at, seemless to navigate and successful in
                  its purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="glide1__slide relative ">
            <div className="flex flex-col ">
              <img src={trust1} srcSet={trust} className=" bg-cover" />

              <div className="flex absolute md:top-[5vw]  flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[1vw] lg:py-0">
                <h2 className="text-center lg:text-left text-[22px] md1:text-[25px] md:text-[30px] lg:text-[80px] leading-[1.5rem] md1:leading-[2rem] md:leading-[3rem] xl:leading-[6rem] w-fit pl-0 lg:pl-[5vw] xl:pl-[5vw] 2xl:pl-[23vw] pr-0 lg:pr-[10vw] xl:pr-[45rem] pt-0 lg:pt-[0vw] xl:pt-[0] 2xl:pt-[14rem]  text-[#34eaf7] font-bold">
                  Trust our people <br />
                  and process{" "}
                </h2>
                <p className="text-center lg:text-left text-[16px] md1:text-[18px] md:text-[25px] w-fit pl-0 lg:pl-[30vw] xl:pl-[50vw] pt-0 lg:pt-[2rem]  xl:pt-[5rem] pr-0 lg:pr-[25rem] xl:pr-[15rem] 2xl:pr-[25rem] text-[white]">
                  We trade hierarchy for trust and politics for processes,
                  allowing talent to flourish and new ideas to come to life
                  through creative autonomy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="glide1__arrows ml-[6%]  absolute bottom-[5vw] items-center text-center md:items-end right-5 lg:right-[5rem] xl:right-[12.5rem]  text-[white] pl-0 md:pl-[5rem] lg:pl-[10rem]"
        data-glide-el="controls"
      >
        <button
          className="glide1__arrow1 glide1__arrow--left1 "
          data-glide-dir="<"
          style={{ borderColor: "#34eaf7" }}
        >
          <BsArrowLeft className=" text-[30px]" />
        </button>
        <button
          className="glide1__arrow1 glide1__arrow--right1"
          data-glide-dir=">"
          style={{ borderColor: "#34eaf7" }}
        >
          <BsArrowRight className=" text-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default Carousel2;

