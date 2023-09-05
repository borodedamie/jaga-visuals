import React from "react";

const Career1 = () => {
  return (
    <div>
      <div className="gap-[60px] flex flex-col pb-20 md:flex-row items-center justify-center">
        <div className="text-[blue] flex flex-col font-black text-[110px]">
          <div className="flex gap-[5rem]">
            <span>J</span>
            <span>O</span>
          </div>

          <div className="flex gap-[5rem]">
            <span>I</span>
            <span>N</span>
          </div>
        </div>
        <div className="text-left w-[22rem] md:w-[20rem] ">
          <h2 className="text-[#3b3b70] w-[22rem] md:w-[25rem] font-bold text-[30px] md:text-[35px] leading-11">
            Be part of a great team, but work from anywhere{" "}
          </h2>
          <p className="text-[20px] font-bold pt-10 w-[23rem] md:w-[30rem] text-[#201f1f]">
            JAGA VISUALS is made up of talented creatives that take business
            seriously.
          </p>
        </div>
      </div>
    
      <div className="flex flex-col w-[20rem] md:w-[40rem] mx-auto justify-start md:justify-center text-left">
        <h2 className="text-[blue] font-bold text-[42px]">
          Our Mission
        </h2>
        <p className="text-[35px] md:text-[42px] font-bold  text-[#201f1f]">
          To make the digital world more beautiful, thoughtful and impactful.
        </p>
      </div>
    </div>
  );
};

export default Career1;
