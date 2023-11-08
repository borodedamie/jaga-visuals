import React from "react";
import one from "../assets/01.webp";
import one1 from "../assets/Jaga---101-premium-properties (1).webp";
import forte from "../assets/Jaga---101-premium-properties-1 (2).webp";
import smart from "../assets/smart.webp";
import turky from "../assets/Jaga---101-premium-properties-5.webp";
import second from "../assets/Jaga---101-premium-properties-4.webp";

import { NavLink } from "react-router-dom";
import useWhiteBackground from "../hooks/useWhiteBackground";

const BriefOne = () => {
  const isWhiteBackground = useWhiteBackground();
  console.log(isWhiteBackground);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img className="py-[3rem]" src={one} alt="101Premium" />
        <h1 className="text-[30px] md:text-[70px] xl:text-[80px] px-5 xl:px-0 text-[black] font-bold">
          101 Premium Properties LLC
        </h1>
      </div>

      <div className="flex flex-col px-[1rem] md:px-[5rem] lg:px-[10.5rem] mt-[2rem] md:mt-[10rem]">
        <h2 className="text-[blue] text-[35px] md:text-[50px] font-bold">
          The Brief
        </h2>

        <p className="text-[20px] text-[#797070]">
          101 Premium Properties Live in #Turkiye
        </p>
        <br />
        <span className="text-[20px] text-[#797070]">
          Dubai Property Show providing Turks with the best Real Estate
          Investment options in Dubai.
          <br />
          <br />
          101 Premium Properties LLC, was established in the year 2018 , it
          comprises of Dynamic , Passionate and Seasoned Professionals who hold
          the talent and true passion for Real Estate Industry.
        </span>
      </div>
      <div className="pl-[3rem] md:pl-[5rem] lg:pl-[10rem] pr-[3rem] md:pr-[5rem] lg:pr-[10rem]">
        <img src={one1} />
        <img src={forte} />
      </div>
     
      <img className=" flex w-[100vw] px-[2rem] md:px-[5rem] lg:px-[10rem] " src={smart} />
      <div className="flex px-[3rem] md:px-[5rem] lg:px-[10rem]  flex-col  md:flex-row w-[100%] gap-4 mt-[2rem]">
        <img className="w-[100%] md:w-[50%]" src={turky} />
        <img className="w-[100%] md:w-[50%]" src={second} />
      </div>

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

export default BriefOne;
