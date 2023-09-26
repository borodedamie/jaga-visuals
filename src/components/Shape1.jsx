import React from "react";
import ReactPlayer from "react-player";
import hero from "../assets/bg.webp";
import home from "../assets/jagav.mp4";
const Shape1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="h-[37rem] lg:h-screen py-[7rem] md:py-0 mt-10 flex-none md:flex flex-col md:flex-row md:max-w-[100%] md:gap-20 justify-center text-left items-center bg-cover bg-center"
    >
      <div className=" rounded-3xl h-[23rem] mx-auto md:mx-0 w-[20rem]">
        <ReactPlayer
          light={true}
          controls={true}
          url={"https://youtu.be/xcL_y9h3QiI"}
          width="20rem"
          height="23rem"
          className="rounded-3xl object-fill"
        />
      </div>
      <div className="w-full px-5 md:w-[30rem] mx-auto md:mx-0 pt-[10rem] md:pt-0 flex flex-col justify-center">
        <h1 className="text-[black] md:text-[white] font-bold text-[50px] leading-11">
          Making brands a damn site better
        </h1>
        <p className="text-[18px] text-[grey] md:text-[white] font-bold pt-10">
          Let’s face it, first impressions matter. Your website’s an opportunity
          to wow your audience, so why waste it with bad design? Because brands
          win new fans when they’re brave enough to go beyond their creative
          comfort zone.
        </p>
      </div>
    </div>
  );
};

export default Shape1;
