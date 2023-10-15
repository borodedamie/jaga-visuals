import React from "react";
import hero from "../assets/bg.webp";
import { NavLink } from "react-router-dom";
const Interests = () => {
  return (
    <div style={{backgroundImage: `url(${hero})`}} className="flex mt-20 px-5 flex-col md:flex-row max-w-[100%] w-[100%] py-20 h-fit md:h-[40rem] justify-center items-center md:items-start gap-[10rem] ">
      <div className="max-w-[100%] w-full md:max-w-[50%] md:w-[19rem]">
      <h2 className="text-white text-[32px] font-bold mb-5">
        If you’ve got some cool stuff you’d like to share we’d love to see it
        even if there isn’t a fit right now
      </h2>
      <NavLink to="/contact" className="w-[15rem] hover:bg-white text-[white] hover:text-black text-center items-center flex justify-center rounded-full h-[3rem] border-[white] border-[2px] ">
          {" "}
          <button className=" font-medium   ">
            GET IN TOUCH
          </button>
        </NavLink>
        </div>
      <ul className="list-disc leading-[3rem] max-w-[100%] md:max-w-[50%] text-white text-[32px] font-bold ">
        <p>We are interested</p>
        <li>UI & UX Designer</li>
        <li>2D & 3D Animator</li>
        <li>Photography</li>
        <li>Illustrator</li>
        <li>Creative Strategy</li>
        <li>Copywriting</li>
      
      </ul>
    </div>
  );
};

export default Interests;
