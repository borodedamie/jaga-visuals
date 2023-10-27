import React from "react";
import { NavLink } from "react-router-dom";

const Artists = () => {
  return (
    <div className="my-[5%] px-5 md:px-[15%] py-20">
      <h2 className="text-[35px] md:text-[45px] font-bold text-[blue] leading-tight">
        Artists by nature.
      </h2>
      <h2 className="text-[35px] md:text-[45px] font-bold text-[blue] leading-tight">Rebels by choice.</h2>
      <div className="w-full md:w-[75%]">
        <p className="text-[20px] mt-[1.5rem]">
          We're a team of talented creatives who live and breathe great design.
          We're not just designers who take instructions, we're artists who take
          inspiration from the wider creative world of music, film and the arts.
        </p>
        <p className="text-[20px] mt-[1rem]">
          By soaking up culture, sharing new ideas and staying on theh
          pulse of the latest trends, we develop brands, design websites and deliver campaigns that
          break the mould, and fight back against boring.
        </p>
      </div>
      <div className="flex flex-row items-start justify-start mt-[1rem]">
        <button className="text-[12px] rounded-full text-center hover:text-[white] hover:bg-[blue]  mt-5 items-center flex font-medium h-[3rem] text-[blue] px-10 py-5 border-[blue] border-[2px] tracking-wide">
          <NavLink to="/services"> VIEW OUR SERVICES</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Artists;
