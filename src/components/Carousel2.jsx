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
    const glide1 = new Glide(".glide1", {
      perView: 1,
      gap: 10,
    });
    glide1.mount();
  }, []);

  return (
    <div className="glide1">
      <div className="glide1__track" data-glide-el="track">
        <div className="glide1__slides">
          <div
            className="glide1__slide w-full h-full md:w-fit md:h-fit"
            style={{
              backgroundImage: `url(${journey})`,
              marginBottom: "0",
              width: "100vw",
              height: "110vh",
            }}
          >
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full py-[20rem] lg:py-0 ">
              <h2 className=" text-[40px]  text-center lg:text-left leading-[3rem] md:leading-[5rem] lg:leading-[10rem] pl-0 lg:pl-[20vw] pr-0 lg:pr-[25rem] pt-0 lg:pt-[18rem] md:text-[80px] lg:text-[150px] text-[#34eaf7] font-bold">
                Journey to
                <br />
                the future
              </h2>
              <p className="text-[40px] text-center lg:text-left w-fit pl-0 lg:pl-[45vw] pt-0 lg:pt-20 pr-0 lg:pr-[25rem]  text-[white]">
                An expansive environment that <br /> will engage all the senses
              </p>
            </div>
          </div>

          <div
            className="glide1__slide"
            style={{
              backgroundImage: `url(${make})`,
              marginBottom: "0",
              width: "100vw",
              height: "110vh",
            }}
          >
            <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[20rem] lg:py-0">
              <h2 className="text-center lg:text-left text-[40px] leading-[3rem] md:leading-[6rem] w-fit pl-0 md:pl-[23vw] pr-0 lg:pr-[25rem] pt-0 lg:pt-[14rem] md:text-[80px]  lg:text-[100px] text-[#34eaf7] font-bold">
                Make it beautiful, <br /> thoughtful and <br /> impactful
              </h2>
              <p className="text-center lg:text-left text-[25px] w-fit pl-0 lg:pl-[50vw] pt-0 lg:pt-[12rem] pr-0 lg:pr-[25rem] text-[white]">
                As artist, it's our job to ensure every website <br /> we design
                is stunning to look at, seemless to
                <br />
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
              height: "110vh",
            }}
          >
            <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[20rem] md:py-[5rem] lg:py-0 ">
              <span className="text-center lg:text-left text-[40px] leading-[3rem] md:leading-[6rem] lg:leading-[7rem] w-fit pl-0 lg:pl-[20vw] pr-0 lg:pr-[25rem] pt-0 md:pt-[15rem] md:text-[80px]  lg:text-[120px] text-[#34eaf7] font-bold">
                Trust our people <br />
                and process
              </span>
              <p className="text-center lg:text-left text-[25px] w-fit leading-[3rem] pl-0 lg:pl-[50vw] pt-0 lg:pt-[10rem] pr-0 lg:pr-[15rem] text-[white]">
                We trade hierarchy for trust and politics for processes,
                allowing talent to flourish and <br />
                new ideas to come to life through <br />
                creative autonomy.
              </p>
            </div>
          </div>
        </div>

        <div
          className="glide1__control_arrows bottom-[5rem] items-center text-center md:items-end right-20 md:right-[15rem] lg:right-[20rem] absolute text-[white] pl-0 md:pl-[5rem] lg:pl-[10rem]"
          data-glide-el="controls"
        >
          <button
            className="glide1__arrow1 glide1__arrow--left1"
            data-glide-dir="<<"
          >
            <BsArrowLeft className=" text-[30px]" />
          </button>
          <button
            className="glide1__arrow1 glide__arrow--right1"
            data-glide-dir=">>"
          >
            <BsArrowRight className="text-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
