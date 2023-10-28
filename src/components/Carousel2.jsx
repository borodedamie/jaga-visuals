import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel1 } from "../assets/data";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";
import journey from "../assets/journey.jpg";
import make from "../assets/make.jpg";
import trust from "../assets/trust.jpg";

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
        <div className="glide1__slides">
          <div
            className="glide1__slide"
            style={{
              backgroundImage: `url(${journey})`,
              marginBottom: "0",
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              position: "relative"

            }}
          >
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full py-[50vw] md:py-[20rem] lg:py-0 ">
              <h2 className=" text-[35px]  text-center lg:text-left leading-[3rem] md:leading-[5rem] lg:leading-[6rem] pl-0 lg:pl-[5vw] xl:pl-[25vw] pr-0 lg:pr-[15rem] xl:pr-[25rem] pt-0 lg:pt-[10vw] xl:pt-[20rem] md:text-[80px] lg:text-[80px] text-[#34eaf7] font-bold">
                Journey to
                <br />
                the future
              </h2>
              <p className="text-center lg:text-left text-[20px] w-fit pl-0 lg:pl-[30vw] xl:pl-[50vw] pt-0 md:pt-[5rem] lg:pt-[2rem] xl:pt-[5rem]  pr-0 lg:pr-[25rem] text-[white]">
                An expansive environment that <br /> will engage all the senses
              </p>
            </div>
          </div>

          <div
            className="glide1__slide relative"
            style={{
              backgroundImage: `url(${make})`,
              marginBottom: "0",
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              position: "relative"
            }}
          >
            <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[40vw] lg:py-0">
              <h2 className="text-center lg:text-left text-[35px] leading-[3rem] md:leading-[6rem] w-fit pl-0 lg:pl-[5vw] xl:pl-[23vw] pr-0 lg:pr-[10vw] xl:pr-[45rem] pt-0 lg:pt-[10vw] xl:pt-[14rem]  md:text-[80px] lg:text-[80px] text-[#34eaf7] font-bold">
                Make it beautiful, thoughtful and impactful
              </h2>
              <p className="text-center lg:text-left text-[20px] w-fit pl-0 lg:pl-[30vw] xl:pl-[50vw] pt-0 lg:pt-[2rem] xl:pt-[5rem] pr-0 lg:pr-[25rem] text-[white]">
                As artist, it's our job to ensure every website we design
                is stunning to look at, seemless to
                navigate and successful in its purpose.
              </p>
            </div>
          </div>

          <div
            className="glide1__slide"
            style={{
              backgroundImage: `url(${trust})`,
              marginBottom: "0",
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              position: "relative"

            }}
          >
            <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[40vw]  lg:py-0 ">
              <span className="text-center lg:text-left text-[35px] leading-[3rem] md:leading-[6rem] lg:leading-[5rem] xl:leading-[6rem] w-fit pl-0 lg:pl-[5vw] xl:pl-[20vw]  pr-0 lg:pr-[15rem] xl:pr-[25rem] pt-0 md:pt-[5vw] lg:pt-[10vw] xl:pt[15rem] md:text-[80px]  xl:text-[80px] text-[#34eaf7] font-bold">
                Trust our people <br />
                and process
              </span>
              <p className="text-center lg:text-left text-[20px] w-fit pl-0 lg:pl-[20vw] xl:pl-[50vw] pt-0 lg:pt-[4rem] pr-0 lg:pr-[25rem] text-[white]">
                We trade hierarchy for trust and politics for processes,
                allowing talent to flourish and 
                new ideas to come to life through 
                creative autonomy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="glide1__arrows bottom-[40vw] md1:bottom-[10vw] md:bottom-[2.5rem] lg:bottom-[2.5rem] items-center text-center md:items-end right-5 lg:right-[5rem] xl:right-[12.5rem] absolute text-[white] pl-0 md:pl-[5rem] lg:pl-[10rem]"
        data-glide-el="controls"
      >
        <button
          className="glide1__arrow1 glide1__arrow--left1"
          data-glide-dir="<"
        >
          <BsArrowLeft className=" text-[30px]" />
        </button>
        <button
          className="glide1__arrow1 glide__arrow--right1"
          data-glide-dir=">"
        >
          <BsArrowRight className="text-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
