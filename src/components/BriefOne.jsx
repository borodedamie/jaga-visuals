import React from "react";
import one from "../assets/01.webp";
import one1 from "../assets/Jaga-Visuals---101-premium-properties3.webp";
import forte from "../assets/Jaga-Visuals---101-premium-propertiesa.webp";
import smart from "../assets/smart.webp";
import turky from "../assets/Jaga-Visuals---101-premium-properties1a.webp";
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
      <div className="pl-0 xl:pl-[2rem] lg:pl-[4rem] pr-0 xl:pr-[2rem]  lg:pr-[4rem]">
        <img src={one1} />
      </div>
      <div className="pl-[2rem] md:pl-[5rem] lg:pl-[10rem] pr-[2rem] md:pr-[5rem] lg:pr-[10rem]">
        <img src={forte} />
      </div>
     
      <img className=" flex w-[100vw] px-[2rem] md:px-[5rem] lg:px-[10rem] " src={smart} />
        <img className="pl-[2rem] md:pl-[5rem] lg:pl-[10rem] pr-[2rem] md:pr-[5rem] lg:pr-[10rem]" src={turky} />

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
