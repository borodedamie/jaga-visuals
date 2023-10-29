import React, { useState } from "react";
import { urlsHO } from "../assets/data";
import ReactPlayer from "react-player";
import Related from "./Related";
import { NavLink } from "react-router-dom";

const BriefHO = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoPlay = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const handleVideoPause = () => {
    setCurrentVideo(videoUrl);
  };
  return (
    <div className="px-5 md:px-[10%] pt-[5%]">
      <div className="flex flex-col justify-around gap-5 w-full px-5 md:pl-[10%] ">
        <h2 className="font-bold text-[40px] text-[blue]">The Brief</h2>
        <div className="flex">
          <p className="flex items-end text-left font-medium text-[16px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, velit
            dolores? Fuga omnis odit eligendi quaerat repellat ex architecto
            nobis facilis, veniam ullam dolores quo necessitatibus quas deleniti
            distinctio ab minima sapiente! Iusto odit, molestias reprehenderit
            harum debitis cum
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
        {urlsHO.map((url2, f) => {
          return (
            <div key={f} className="border rounded-2xl ">
              <ReactPlayer
                url={url2.urlH}
                playing={currentVideo === url2.urlH}
                onPause={handleVideoPause}
                onPlay={() => handleVideoPlay(url2.urlH)}
                className="rounded-3xl w-fit md:w-[100vw]"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[13px] mt-5 items-center flex rounded-full font-medium h-[3rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] hover:border-[blue]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
      <Related />
    </div>
  );
};

export default BriefHO;
