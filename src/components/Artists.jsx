import React from "react";
import { NavLink } from "react-router-dom";
const Artists = () => {
  return (
    <div className="p-10 md:px-40 py-20">
      <h2 className="text-[30px] font-bold text-[blue] ">
        Artists by nature.
      </h2>
      <h2 className="text-[30px] font-bold text-[blue]">Rebels by choice.</h2>
      <p className="text-[20px]">
        We're a team of talented creatives who live and breathe great design.
        We're not just designers who take instructions, we're artists who take
        inspiration from the wider creative world of music, film and the arts.
        <br /> By soaking up culture, sharing new ideas and staying on theh
        pulse of the latest trends, we develop brands, design websites and deliver campaigns that
        break the mould, and fight back against boring.
      </p>
      <div className="flex flex-row items-start justify-start">
        <button className="rounded-full text-center hover:text-[white] hover:bg-[blue]  mt-5 items-center flex font-medium h-[2rem] text-[blue] p-5 border-[blue] border-[2px]">
          <NavLink to="/services"> VIEW OUR SERVICES</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Artists;
