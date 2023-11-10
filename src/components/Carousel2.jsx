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
  const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    return width;
  };

  useEffect(() => {
    new Glide(".glide1", {
      perView: 1,
      gap: 10,
    }).mount();
  }, []);
  const screenWidth = useScreenWidth();

  return (
    <div className="glide1">
      <div className="glide1__track" data-glide-el="track">
        <div className="glide1__slides mb-0">
          <div className="glide1__slide relative">
            <div className="flex flex-col ">
              {screenWidth <= 767 ? (
                <img  src={journey1} alt="Mobile Image" />
              ) : (
                <img src={journey} alt="Desktop Image" />
              )}
              <div className="flex absolute flex-col z-1 md:top-[5vw] items-center justify-center lg:items-start lg:justify-start w-full py-[10vw]  md:py-[5vw]  lg:py-0">
                <h2 className="text-[40px] text-center pl-0 lg:pl-[5vw] xl:pl-[5vw] 2xl:pl-[23vw] pr-0 lg:pr-[10vw] xl:pr-[45rem] pt-0 lg:pt-[0vw] xl:pt-[0] 2xl:pt-[14rem] lg:text-left leading-[3rem] lg:leading-[6rem] md:text-[30px]  lg:text-[80px] text-[#34eaf7] font-bold">
                  Journey to
                  <br />
                  the future
                </h2>
                <p className="text-center pl-0 lg:pl-[30vw] xl:pl-[50vw] pt-[3rem] lg:pt-[2rem] xl:pt-[5rem] pr-0 lg:pr-[25rem] xl:pr-[15rem] 2xl:pr-[25rem] lg:text-left text-[16px] md:text-[25px] w-fit text-[white]">
                  An expansive environment that <br /> will engage all the
                  senses
                </p>
              </div>
            </div>
          </div>
          <div className="glide1__slide relative">
            <div className="flex flex-col ">
            {screenWidth <= 767 ? (
                <img  src={make1} alt="Mobile Image" />
              ) : (
                <img src={make} alt="Desktop Image" />
              )}
              <div className="flex absolute md:top-[5vw] flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[10vw] md:py-[5vw] lg:py-0">
                <h2 className="text-center lg:text-left text-[40px] md:text-[30px] lg:text-[80px] leading-[3rem] lg:leading-[6rem] w-fit pl-0 lg:pl-[5vw] xl:pl-[5vw] 2xl:pl-[23vw] pr-0 lg:pr-[20vw] xl:pr-[25rem] 2xl:pr-[45rem] pt-0 lg:pt-[0vw] xl:pt-[0] 2xl:pt-[14rem] text-[#34eaf7] font-bold">
                  Make it beautiful, thoughtful and impactful
                </h2>
                <p className="text-center lg:text-left text-[16px] md:text-[25px] w-fit  lg:pl-[30vw] xl:pl-[50vw] pt-[2rem] lg:pt-[2rem] xl:pt-[5rem] lg:pr-[25rem] xl:pr-[15rem] 2xl:pr-[25rem] text-[white] px-[2rem] lg:px-0">
                  As artists, it's our job to ensure every website we design is
                  stunning to look at, seemless to navigate and successful in
                  its purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="glide1__slide relative ">
            <div className="flex flex-col ">
            {screenWidth <= 767 ? (
                <img  src={trust1} alt="Mobile Image" />
              ) : (
                <img src={trust} alt="Desktop Image" />
              )}
              <div className="flex absolute md:top-[5vw]  flex-col w-full items-center justify-center lg:items-start lg:justify-start  py-[10vw]  md:py-[5vw]  lg:py-0">
                <h2 className="text-center lg:text-left text-[40px] md:text-[30px] lg:text-[80px] leading-[3rem] lg:leading-[6rem] w-fit pl-0 lg:pl-[5vw] xl:pl-[5vw] 2xl:pl-[23vw] pr-0 lg:pr-[10vw] xl:pr-[45rem] pt-0 lg:pt-[0vw] xl:pt-[0] 2xl:pt-[14rem]  text-[#34eaf7] font-bold">
                  Trust our people <br />
                  and process{" "}
                </h2>
                <p className="text-center lg:text-left text-[16px] md1:text-[18px] md:text-[25px] w-fit pl-[2rem] lg:pl-[30vw] xl:pl-[50vw] pt-[3rem] lg:pt-[2rem]  xl:pt-[5rem] pr-[2rem] lg:pr-[25rem] xl:pr-[15rem] 2xl:pr-[25rem] text-[white]">
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
        className="glide1__arrows ml-[6%]  absolute bottom-[12vw] md:bottom-[5vw] lg:bottom-[5vw] justify-center items-center text-center md:items-end sm:right-[29vw] md:right-[40vw] lg:right-[5rem] xl:right-[12.5rem]  text-[white] md:pl-[5rem] lg:pl-[10rem]"
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
