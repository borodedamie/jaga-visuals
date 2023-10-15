import React from "react";
import { urlsDOF } from "../assets/data";
import Related from "./Related";
import ReactPlayer from "react-player";

const BriefDOF = () => {
  return (
    <div className="px-5 md:px-20 ">
    <div className="flex flex-col justify-around gap-5 w-full px-5 md:px-20 ">
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
      
      {urlsDOF.map((urlD, b) => {
        return (
          <div key={b}>
           
            <iframe className="rounded-3xl h-[20rem] w-[20rem] md:w-[47rem] md:h-[28rem] border" src={urlD.urlH}   />
          </div>
        );
      })}
    </div>

    <Related/>

    </div>

  );
};

export default BriefDOF;
