import React from "react";
import one from "../assets/01.png";
import days from "../assets/2days.png";
import forte from "../assets/forte.png";
import smart from "../assets/smart.png";
import show from "../assets/show.png";
import { NavLink } from "react-router-dom";
const BriefOne = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="py-[3rem]"
          src={one}
          alt="101Premium"
        />
        <h1 className="text-[30px] md:text-[70px] xl:text-[80px] px-5 xl:px-0 text-[#464444] font-extrabold">
          101 Premium Properties LLC
        </h1>
      </div>

      <div className="flex flex-col px-[1rem] md:px-[10.5rem] mt-[2rem] md:mt-[10rem]">
        <h2 className="text-[blue] text-[35px] md:text-[75px] font-bold">
          The Brief
        </h2>
        <p className="text-[22px] md:text-[50px] lg:text-[35px] text-[#797070]">
          101 Premium Properties Live in #Turkiye
        </p>
        <br />
        <span className="text-[22px] md:text-[50px] lg:text-[35px] text-[#797070]">
          Dubai Property Show providing Turks with the best Real Estate
          Investment options in Dubai.
          <br />
          <br />
          101 Premium Properties LLC, was established in the year 2018 , it
          comprises of Dynamic , Passionate and Seasoned Professionals who hold
          the talent and true passion for Real Estate Industry.
        </span>
      </div>

      <img src={days} className="w-[100vw]"/>
      <img src={forte} />

      <img src={smart} />
      <img src={show} />
      <div className="flex flex-row z-10 items-center justify-center fixed bottom-2 right-0 md:bottom-6 md:right-5">
        <NavLink to="/contact">
          <button className=" text-center text-[13px] mt-5 items-center flex rounded-full font-medium h-[3rem] text-[white] hover:text-[blue] py-3 px-5 md:py-7 md:px-10 border-[blue] bg-[blue]  hover:bg-[white] hover:border-[blue]">
            START YOUR PROJECT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BriefOne;
