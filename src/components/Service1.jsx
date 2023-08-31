import React from "react";
import { data } from "../assets/data";
import Button from "./Button";
const Service1 = () => {
  return (
    <>
    <div className="gap-[60px] flex flex-col pb-20 md:flex-row items-center md:items-center justify-center">
        <div className="text-[blue] flex flex-col font-black text-[80px]">
          <div className="flex gap-[2rem]">
            <span>S</span>
            <span>E</span>
            <span>R</span>
            <span>V</span>
          </div>

          <div className="flex gap-[2.5rem]">
            <span>I</span>
            <span>C</span>
            <span>E</span>
            <span>S</span>
          </div>
        </div>
        <div className="flex flex-col text-center items-start md:text-left w-[25rem] md:w-[30rem] " >
          <p className="text-[23px] font-bold pt-10 text-[grey]">
            Crafting{" "}
            <span className="text-[blue]">standout websites and branding</span>{" "}
            using sound strategic thinking and eye-catching digital, that
            creates instant impact and sparks emotion. To really see what we can
            do, take a look at our full range of digital creative agency
            services.
          </p>
          <div className="text-[16px] text-[grey] font-semibold flex flex-row gap-20 mx-5 md:mx-0 text-left pt-10">
            <div>
              <p>Creative Design</p>
              <p>Motion Graphics</p>
              <p>Web Development</p>
            </div>
            <div>
              <p>Branding</p>
              <p>Digital Marketing</p>
              <p>Social Media Management</p>
            </div>
          </div>
        </div>
      </div>
      {data.map((data1, index) => {
        return ( 
          <div className="flex flex-col md:flex-row mx-10 md:mx-20 justify-center gap-20 items-center my-20">
            <div className="" key={data1.id}>
              <h2 key={index} className="text-[35px] w-[20rem] font-bold text-[#26316c]">
                {data1.title}
              </h2>
              <p key={index} className="text-[18px] w-[20rem] md:w-[24.5rem] font-bold text-[grey] leading-10 py-5">{data1.paragraph}</p>
              <Button />
            </div>
            <div className="bg-[grey] w-[22rem] md:w-[25rem] h-[20rem] rounded-2xl"></div>
          </div>
        );
      })}
    </>
  );
};

export default Service1;
