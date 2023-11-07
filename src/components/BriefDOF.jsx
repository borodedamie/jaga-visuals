import React from "react";
import { urlsDOF } from "../assets/data";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import useWhiteBackground from '../hooks/useWhiteBackground';

const BriefDOF = () => {

  const isWhiteBackground = useWhiteBackground();
  console.log(isWhiteBackground);

  return (
    <div className="px-5 md:px-20 ">
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
        {urlsDOF.map((urlD, b) => {
          return (
            <div key={b}>
              <video
                loop
                autoPlay
                muted
                mutedcontrols
                className="rounded-3xl h-[20rem] w-[20rem] md:w-[47rem] md:h-[28rem] border"
              >
                <source src={urlD.urlH} />
              </video>
              
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-around gap-5 w-full px-5 md:pl-[10%] ">
      <h2 className="text-[blue] text-[35px] md:text-[50px] font-bold">The Brief</h2>
        <div className="flex">
          <p className="text-[20px] text-[#797070] flex items-end text-left w-[100vw] xl:w-[60vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, velit
            dolores? Fuga omnis odit eligendi quaerat repellat ex architecto
            nobis facilis, veniam ullam dolores quo necessitatibus quas deleniti
            distinctio ab minima sapiente! Iusto odit, molestias reprehenderit
            harum debitis cum
          </p>
        </div>
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

export default BriefDOF;
