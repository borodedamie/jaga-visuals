import React from "react";
import auto from "../assets/Autoflex-Logistics-Inc--Jaga-Visuals.webp";
import right from "../assets/Image-2.webp";
import cut from "../assets/cut.webp";
import deal from "../assets/deal.webp";
import { NavLink } from "react-router-dom";
import word from "../assets/word.webp";
import useWhiteBackground from '../hooks/useWhiteBackground';

const BriefL = () => {
  const isWhiteBackground = useWhiteBackground();
  console.log(isWhiteBackground);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="mt-[3rem]"
          src={auto}
          alt="AutoThumbnail"
        />
          <h1 className="text-[30px] md:text-[70px] px-5 xl:px-0 text-[black] font-bold">
            Autoflex Logistics Inc
          </h1>
      </div>

      <div className="flex flex-col px-[1rem] md:px-[10.5rem] mt-[2rem] md:mt-[10rem]">
      <h2 className="text-[blue] text-[35px] md:text-[50px] font-bold">The Brief</h2>

        <p className="text-[22px] md:text-[20px] text-[#797070]">
          Shipping & Transport
        </p>
        <br />
        <span className="text-[20px] text-[#797070]">
          AutoFlex Logistics is an American multimodal transportation services
          and logistic specilist on truckloads and less than truckloads. We are
          here to make a change and meet your transportation requirements
          through our dedication, determination and work ethic, to build ever
          lasting relationships, deliver the service we promised, and always be
          fair and honest.
          <br />
          <br />
          Good sound business principles are placed as the foundation of the
          company to make it grow and become successful.
        </span>
      </div>
<div className="px-[2rem] md:px-[10rem]">
      <img className="py-[1rem]" src={right} />
      <img  src={cut} />

      <img src={deal} />
      <img  src={word} />
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

export default BriefL;
