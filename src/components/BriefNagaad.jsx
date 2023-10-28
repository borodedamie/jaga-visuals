import React from "react";
import organic from "../assets/organic.png";
import king from "../assets/Frankincese.png";
import secret from "../assets/ssecret.png";
import smile1 from "../assets/smile1.png";
import start from "../assets/start.png";
import perfume from "../assets/cream.png";
import vitamin from "../assets/vitamin.png";

const BriefNagaad = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-fit h-fit xl:w-[80vw] lg:h-[100vh]"
          src={organic}
          alt="NagaadThumbnail"
        />
        <div className="flex flex-col text-center items-center justify-center ">
          <h1 className="text-[30px] md:text-[70px] xl:text-[80px] px-5 xl:px-0 pt-[-5rem] text-[#464444] font-extrabold">
            Nagaad Harvesting Resins & Gums
          </h1>
          <p className="text-[25px] md:text-[50px] font-Roboto">Since 1940</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-[1rem] md:px-[4rem] justify-center items-center md:items-end lg:items-center xl:items-end max-w-[100%] w-[100%] gap-0 md:gap-[10rem] pt-[10rem]">
        <div className="flex flex-col max-w-fit w-fit lg:max-w-[65%] lg:w-[100%] ">
          <h2 className="text-[blue] text-[35px] md:text-[65px] font-bold">The Brief</h2>
          <p className="text-[22px] md:text-[50px] lg:text-[35px] text-[#797070]">
            Nagaad Resins and Gums (Nagaad Gums) started in the late 1940s as a
            family business in rural Somalia. Focused on sustainable resin and
            gum harvesting, it empowered communities, conserved the environment,
            and provided a stable income source.
          </p>
        </div>
        <img className="max-w-[100%] w-full lg:max-w-[30%] lg:w-fit pt-[3rem] lg:pt-0" src={king} alt="Logo" />
      </div>
      <div>
        <h2 className="text-[22px] md:text-[65px] pl-[2rem] pr-[2rem] md:pl-[7rem] md:pr-[10rem] font-semibold pt-[5rem] leading-normal md:leading-[4rem] text-[#524d4d]">
          Our focus is on fostering communities and safeguarding the environment
        </h2>
        <img src={secret} />
      </div>
      <img src={smile1} />

      <img src={start} />
      <img src={vitamin} />

      <img src={perfume} />
    </div>
  );
};

export default BriefNagaad;
