import React from "react";

const Header = () => {
  return (
    <div className=" gap-[60px] flex flex-col pb-20 md:flex-row items-center justify-center">
      <div className="text-[blue] flex flex-col font-black text-[138px]">
        <div className="flex gap-[5rem]">
          <span>I</span>
          <span>D</span>
        </div>

        <div className="flex gap-[4rem]">
          <span>E</span>
          <span>A</span>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-[blue] w-[19rem] md:w-[30rem] font-bold text-[36px] md:text-[44px] leading-11">
          Creativity never goes out of style
        </h2>
        <p className="text-[22px] font-bold pt-10 w-[19rem] md:w-[30rem]">
          We’re a creative design agency based in Dubai that crafts beautiful
          and original websites for brands who{" "}
          <span className="text-[blue]">refuse to blend in.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
