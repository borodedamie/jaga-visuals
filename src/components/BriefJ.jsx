import React, { useState } from "react";
import { urls1 } from "../assets/data";
import ReactPlayer from "react-player";
import Related from "./Related";
const BriefJ = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoPlay = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const handleVideoPause = () => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div className="px-5 md:px-20 ">
      <div className="flex flex-col justify-around gap-5 w-full px-5 md:px-20 ">
        <h2 className="font-bold text-[75px] text-[blue]">The Brief</h2>
        <div className="flex items-end justify-end">
          <p className="flex items-end text-left font-medium text-[30px] w-[50rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, velit
            dolores? Fuga omnis odit eligendi quaerat repellat ex architecto
            nobis facilis, veniam ullam dolores quo necessitatibus quas deleniti
            distinctio ab minima sapiente! Iusto odit, molestias reprehenderit
            harum debitis cum
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
        {urls1.map((urls2, index1) => {
          return (
            <div key={urls2.id} className="border rounded-2xl ">
              <ReactPlayer
                key={index1}
                playing={currentVideo === urls2.url22}
                onPause={handleVideoPause}
                onPlay={() => handleVideoPlay(urls2.url22)}
                url={urls2.url22}
                width="60vw"
                height="250px"
                className="rounded-3xl"
              />
            </div>
          );
        })}
      </div>

      <Related />
    </div>
  );
};

export default BriefJ;
