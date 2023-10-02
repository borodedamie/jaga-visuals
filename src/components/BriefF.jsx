import React from "react";
import { imagesF } from "../assets/data";

const BriefF = () => {
  return (
    <div className="px-5 md:px-20 ">
      
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
      
      {imagesF.map((imagesF1, index) => {
        return (
          <div key={imagesF1.id} className="flex flex-col md:flex-row gap-5 md:gap-10 ">
            <img className="w-[20rem] h-[20rem]" key={index} src={imagesF1.one}/>
            <img className="w-[20rem] h-[20rem]" key={index} src={imagesF1.two}/>

          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BriefF;
