import React from "react";
import { imagesL } from "../assets/data";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BriefL = () => {
  return (
    <div className="px-5 md:px-20 ">
      <div className="flex flex-col justify-around gap-5 w-full p-20 md:px-20 ">
      <h2 className="font-bold text-[75px] text-[blue]">The Brief</h2>
      <div className="flex items-end justify-end">
        <p className="flex items-end text-left font-medium text-[30px] w-[50rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, velit
          dolores? Fuga omnis odit eligendi quaerat repellat ex architecto nobis
          facilis, veniam ullam dolores quo necessitatibus quas deleniti
          distinctio ab minima sapiente! Iusto odit, molestias reprehenderit
          harum debitis cum
        </p>
      </div>
      </div>
      
      <div className="flex flex-col gap-5 md:gap-10 px-5 md:px-20 py-20 items-center">
      
      {imagesL.map((imagesL1, g) => {
        return (
          <div key={g} className="flex flex-col md:flex-row gap-5 md:gap-10 ">
            <LazyLoadImage className="w-[20rem] h-[20rem]" src={imagesL1.one}/>
            <LazyLoadImage className="w-[20rem] h-[20rem]" src={imagesL1.two}/>

          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BriefL;
