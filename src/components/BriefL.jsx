import React from "react";
import { imagesL } from "../assets/data";

const BriefL = () => {
  return (
    <div className="px-5 md:px-20 ">
      
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
      
      {imagesL.map((imagesL1, index) => {
        return (
          <div key={imagesL1.id} className="flex flex-col md:flex-row gap-5 md:gap-10 ">
            <img className="w-[20rem] h-[20rem]" key={index} src={imagesL1.one}/>
            <img className="w-[20rem] h-[20rem]" key={index} src={imagesL1.two}/>

          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BriefL;
