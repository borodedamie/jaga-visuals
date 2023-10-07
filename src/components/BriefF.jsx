import React from "react";
import { imagesF } from "../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
const BriefF = () => {
  return (
    <div className="px-5 md:px-20 ">
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
        {imagesF.map((imagesF1, a) => {
          return (
            <div key={a} className="flex flex-col md:flex-row gap-5 md:gap-10 ">
              <LazyLoadImage
                src={imagesF1.one}
                className="w-[20rem] h-[20rem]"
                alt="Images"
              />
               <LazyLoadImage
                src={imagesF1.two}
                className="w-[20rem] h-[20rem]"
                alt="Images"
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BriefF;
