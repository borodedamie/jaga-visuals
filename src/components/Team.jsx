import React, { useEffect } from "react";
import damage from "../assets/damage.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/data";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";

const Team = () => {
  useEffect(() => {
    new Glide(".glide", {
      perView: 5,
      breakpoints: {
        420:{
          perView: 1.5, 

        },
        768: {
          perView: 2.5, 
        },
        1024: {
          perView: 3.5,
        },
        1280: {
          perView: 5, 
        },
      },
      gap: 10,
    }).mount();
  }, []);

  return (
    <div>
      <div className="bg-[#1c1b1b] mt-[10%] pt-[9rem] ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[0] md:gap-[5rem]  lg:gap-[20rem]">
          <div className="text-[white] font-[900] text-[140px] md:text-[140px] lg:text-[225px] ml-0 md:ml-[10%] ">
            <div className="flex pl-3 gap-[7rem] text-[#0dfff6]">
              <span>T</span>
              <span>E</span>
            </div>
            <div className="flex gap-[5rem] lg:gap-[3rem] text-[#0dfff6]">
              <span>A</span>
              <span>M</span>
            </div>
          </div>
          <div className="px-5 md:px-0 font-medium text-[20px] text-center md:text-left mr-0 lg:mr-[10%]">
            <h2 className="text-white md:w-[70%] tracking-tight">
              You will find our team working across Creative Web Designs, Web
              Development, Branding and Digital Marketing.
            </h2>
          </div>
        </div>

        <Carousel1/>
      </div>
      <Carousel2/>

    </div>
  );
};

export default Team;
