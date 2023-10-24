import React from "react";
import { imagesF } from "../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
const BriefF = () => {
  return (
    <div className="px-5 md:px-20 ">
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
        {imagesF.map((imagesF1, a) => {
          return (
            <div key={a} className="flex flex-col md:flex-row gap-5 md:gap-10 mb-[7%]">
              <LazyLoadImage
                src={imagesF1.one}
                className="w-[20rem] h-[20rem] md:w-[35vw] md:h-fit"
                alt="Images"
              />
               <LazyLoadImage
                src={imagesF1.two}
                className="w-[20rem] h-[20rem] md:w-[35vw] md:h-fit"
                alt="Images"
              />             
            </div>
          );
        })}
      </div>
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

export default BriefF;
