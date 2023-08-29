import React from "react";

const Work1 = () => {
  return (
    <div className="gap-[60px] flex flex-col pb-20 md:flex-row items-center justify-center">
      <div className="text-[blue] flex flex-col font-black text-[138px]">
        <div className="flex gap-[5rem]">
          <span>W</span>
          <span>O</span>
        </div>

        <div className="flex gap-[8rem]">
          <span>R</span>
          <span>K</span>
        </div>
      </div>
      <div className="text-center md:text-left w-[22rem] md:w-[26.5rem] ">
        <h2 className="text-[#3b3b70] font-bold text-[30px] md:text-[35px] leading-11">
          We are experts in bringing brands to life digitally. 
        </h2>
        <p className="text-[18px] font-bold pt-10 text-[#201f1f]">
          JAGA VISUALS is a progressive and insightful design agency,
          technically and creatively skilled to translate your brand into its
          best digital self. Our design and development approach creates
          impactful, engaging brands and immersive digital experiences that
          bring you a return on creativity.
        </p>
      </div>
    </div>
  );
};

export default Work1;
