import React from "react";
import auto from "../assets/auto1.webp";
import right from "../assets/right.webp";
import cut from "../assets/cut.webp";
import deal from "../assets/deal.webp";
import { NavLink } from "react-router-dom";
import word from "../assets/word.webp";

const BriefL = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className=""
          src={auto}
          alt="NagaadThumbnail"
        />
          <h1 className="text-[30px] md:text-[70px] xl:text-[80px] px-5 xl:px-0 text-[#464444] font-extrabold">
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

      <img src={right} />
      <img src={cut} />

      <img src={deal} />
      <img src={word} />

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

export default BriefL;
