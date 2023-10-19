import React, { useEffect, useRef } from "react";
import hero from "../assets/bg.webp";
import homevideo from "../assets/homevideo.mp4";
import { NavLink } from "react-router-dom";
const Shape1 = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${hero})`, paddingTop: "5rem" }}
      className="px-[2rem] md:px-[10rem] h-[37rem] lg:h-screen py-[7rem] md:py-0 mt-10 flex-none md:flex flex-col md:flex-row lg:flex-row md:max-w-[100%] md:gap-20 justify-center text-left items-center bg-cover bg-center"
    >
      <div style={{ flex: 1 }}>
        <video
          ref={videoRef}
          className="w-fit h-[28rem] lg:w-[80vh] object-cover lg:h-[80vh] mb-20"
          loop
          autoPlay
          muted
        >
          <source src={homevideo} type="video/mp4" />
        </video>
      </div>
      <div
        className="w-full md:w-[35rem] lg:w-[30rem] md:mx-0 md:pt-0 flex flex-col justify-center"
        style={{ flex: 1 }}
      >
        <h1 className="text-[black] md:text-[white] font-bold text-[50px] leading-tight">
          Making brands a <br /> damn site better
        </h1>
        <p className="text-[18px] text-[grey] md:text-[white] font-medium pt-10">
          Let's face it, first impressions matter. Your website's an opportunity
          to wow your audience, so why waste it with bad design? Because brands
          win new fans when they're brave enough to go beyond their creative
          comfort zone.
        </p>
      </div>
      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[15px] mt-5 items-center flex rounded-full font-medium h-[4rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] border-[0]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Shape1;
