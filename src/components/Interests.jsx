import React from "react";
import hero from "../assets/bg.webp";
import { NavLink } from "react-router-dom";
const Interests = () => {
  
  return (
    <div style={{ backgroundImage: `url(${hero})` }} className="flex pt-[5rem] md:pt-[10rem] bg-cover h-[100%] md:h-[100vh] mt-20 flex-col px-5 lg:px-0 lg:flex-row pb-[10rem] lg:pb-0 justify-center items-start md:items-start gap-[10%]">
      <div className="flex-1 ml-0  md:ml-[10%] " >
        <h2 className="text-white text-[30px] md:text-[40px] lg:text-[30px] xl:text-[40px]  font-bold mb-5">
          If you’ve got some cool stuff you’d like to show us, shoot us a mail hello@jagavisuals.com with your portfolio and we'll be in touch.
        </h2>
        <NavLink to="/contact" className="w-[10rem] my-5 md:my-0 md:w-[15rem] hover:bg-white text-[white] hover:text-black text-center items-center flex justify-center rounded-full h-[3rem] border-[white] border-[2px] ">
          {" "}
          <button className=" font-medium   ">
            GET IN TOUCH
          </button>
        </NavLink>
      </div>
      <ul className="list-disc  ml-0  md:ml-[10%] leading-[3rem] px-5 md:px-0 text-[30px] md:text-[40px] lg:text-[30px] xl:text-[40px]   font-bold " style={{ flex: 1 }}>
        <p className="text-white ">We are hiring</p>
        <li className="text-[white] ">UI & UX Designer</li>
        <li className="text-[white] ">2D & 3D Animator</li>
        <li className="text-[white] ">Photography</li>
        <li className="text-[white] ">Illustrator</li>
        <li className="text-[white] ">Creative Strategy</li>
        <li className="text-[white] ">Copywriting</li>
      </ul>
    </div>
  );
};

export default Interests;
