import React, { useState, useRef,useEffect } from "react";
import { NavLink } from "react-router-dom";
import useWhiteBackground from "../hooks/useWhiteBackground";
import pandas from "../assets/tribe.mp4";

const BriefPonda = () => {
  const isWhiteBackground = useWhiteBackground();
  console.log(isWhiteBackground);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);
  return (
    <div className="pt-[5%]">
      <div className="flex mb-[5rem] flex-col justify-around gap-5 w-full px-5 md:pl-[10%] ">
        <h2 className="text-[blue] text-[35px] md:text-[50px] font-bold">
          The Brief
        </h2>
        <div className="flex">
          <p className="flex items-end text-left text-[20px] text-[#797070] w-[100vw] xl:w-[60vw]">
            Ponda Tribe is a collection of unique mean pandas of 2,202 NFTs,
            each representing popular icons as digitalized price of art.
          </p>
        </div>
      </div>

        <video
          ref={videoRef}
          loop
          autoPlay
          muted 
          controls  
          className="w-[100%] object-cover h-[100%]"      >
          <source src={pandas} type="video/mp4" />
        </video>

      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button
            className={`text-center text-[12px] mt-5 items-center flex rounded-full font-medium h-[3rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10  ${
              isWhiteBackground
                ? "hover:border-[blue] bg-[blue] hover:bg-[white]"
                : "border-[white] bg-[blue] hover:bg-[white]"
            }`}
          >
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BriefPonda;
