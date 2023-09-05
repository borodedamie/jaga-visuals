import React from "react";

const Work = () => {
  return (
    <div className="bg-[#1c1b1b] mt-20 py-[9rem]">
      <div className="mx-10 flex flex-col md:flex-row gap-[7rem] md:mx-60 items-center justify-center">
        <div className="text-[white] flex flex-col font-bold text-[120px]">
          <div className="flex gap-[5rem]">
            <span>W</span>
            <span>O</span>
          </div>
          <div className="flex gap-[9rem]">
            <span>R</span>
            <span>K</span>
          </div>
        </div>
        <div className="text-[#63bbca] w-[22rem] md:w-[20rem] flex flex-col font-black text-[50px] text-left">
          <h2>Shit-hot work for hot-shot brands</h2>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="my-20 md:my-0">
            <div className="border bg-[white] h-[25rem] w-full md:w-[22rem]"></div>
            <div className="text-[white]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">ART DIRECTION | BRANDING</h2>
              <h1 className="text-[24px] font-bold leading-10">Autoflex Logistics Inc</h1>
              <p className="text-[14px] w-[18rem]">We fully branded a pioneering healthcare concept in the US</p>
            </div>
          </div>
          <div>
            <div className="border bg-[white] h-[25rem] md:h-[20rem] w-full md:w-[22rem]"></div>
            <div className="text-[white]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">ART DIRECTION | MOTION GRAPHICS</h2>
              <h1 className="text-[24px] font-bold leading-10">DOF Dubai</h1>
              <p className="text-[14px] w-[18rem]">We fully branded a pioneering healthcare concept in the US</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row jjustify-center items-center gap-10 py-20">
          <div className="my-20 md:my-0">
            <div className="border bg-[white] h-[25rem] md:h-[20rem] w-full md:w-[22rem]"> </div>
            <div className="text-[white]">
              {" "}
              <h2 className="text-[#63bbca] text-[14px] leading-10">ART DIRECTION | MOTION GRAPHICS</h2>
              <h1 className="text-[24px] font-bold leading-10">Jumia Pay Ap</h1>
              <p className="text-[14px] w-[18rem]">We fully branded a pioneering healthcare concept in the US</p>
            </div>
          </div>
          <div>
            <div className="border bg-[white] h-[25rem] w-full md:w-[22rem]"></div>
            <div className="text-[white]">
              <h2 className="text-[#63bbca] text-[14px] leading-10">ART DIRECTION | SOCIAL MEDIA</h2>
              <h1 className="text-[24px] font-bold leading-10">Foret Dubai</h1>
              <p className="text-[14px] w-[18rem]">We fully branded a pioneering healthcare concept in the US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
