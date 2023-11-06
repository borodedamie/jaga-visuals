import React, { useState } from "react";
import { urlsHO } from "../assets/data";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import useWhiteBackground from '../hooks/useWhiteBackground';


const BriefHO = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const isWhiteBackground = useWhiteBackground();
  console.log(isWhiteBackground);

  const handleVideoPlay = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const handleVideoPause = () => {
    setCurrentVideo(videoUrl);
  };
  return (
    <div className="pt-[5%]">
      <div className="flex flex-col justify-around gap-5 w-full px-5 md:pl-[10%] ">
      <h2 className="text-[blue] text-[35px] md:text-[50px] font-bold">The Brief</h2>
        <div className="flex">
        <p className="flex items-end text-left text-[20px] text-[#797070] w-[100vw] xl:w-[60vw]">
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
                width="70vw"
                height="65vh"
                className="rounded-3xl"
              />
            </div>
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
    </div>
  );
};

export default BriefHO;
