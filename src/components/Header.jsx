import React from "react";

const Header = () => {
  return (
    <div className="mx-10 md:mx-40 gap-[60px] flex flex-col pb-20 md:flex-row items-center justify-around">
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
        <span className="text-[blue] font-bold text-[44px] leading-11">
          Creativity never goes<br/>
          out of style
        </span>
        <p className="text-[22px] font-bold pt-10">
          We’re a creative design agency based in Dubai that crafts beautiful
          and original websites for brands who{" "}
          <span className="text-[blue]">refuse to blend in.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
