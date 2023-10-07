import React from "react";
import { imagesL } from "../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BriefOne = () => {
  return (
    <div className="px-5 md:px-20 ">
      
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
      
      {imagesL.map((imagesL1, e) => {
        return (
          <div key={e} className="flex flex-col md:flex-row gap-5 md:gap-10 ">
            <LazyLoadImage className="w-[20rem] h-[20rem]" src={imagesL1.one}/>
            <LazyLoadImage className="w-[20rem] h-[20rem]" src={imagesL1.two}/>

          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BriefOne;
