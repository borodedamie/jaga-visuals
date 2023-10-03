import React from "react";
import damage from '../assets/damage.jpg'
const Team = () => {
  return (
    <div>
      <div className="bg-[#1c1b1b] mt-20 py-[9rem]">
        <div className="flex flex-col md:flex-row gap-[5rem] md:mx-44 items-center justify-center">
          <div className="text-[white] flex flex-col font-[900] text-[120px]">
            <div className="flex gap-[5rem] text-[#0dfff6]">
              <span>T</span>
              <span>E</span>
            </div>
            <div className="flex gap-[3rem] text-[#0dfff6]">
              <span>A</span>
              <span>M</span>
            </div>
          </div>
          <div className="w-[22rem] md:w-[70rem] flex flex-col font-medium text-[30px] text-left">
            <h2 className="text-white ">
              You will find our team working across Creative Web Designs, Web
              Development, Branding and Digital Marketing.
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 px-20 pt-20 pb-40 justify-center items-center">
          <div className="border rounded-2xl h-[20rem] w-[18rem] bg-[white]"></div>
          <div className="border rounded-2xl h-[20rem] w-[18rem] bg-[white]"></div>
          <div className="border rounded-2xl h-[20rem] w-[18rem] bg-[white]"></div>
        </div>

        <img className="w-full" src={damage}/>
      </div>
    </div>
  );
};

export default Team;
