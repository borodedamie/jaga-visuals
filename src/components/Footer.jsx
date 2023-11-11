import React from "react";
import { NavLink } from "react-router-dom";

import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {

  
  return (
    <div className="py-10 px-10 md:px-[5%] md:pb-0 md:pt-20 font-bold flex flex-col md:flex-row justify-between text-[white] h-fit md:h-[37rem] bg-[#1c1b1b]">
      <div className="flex flex-row gap-[10rem] justify-center">
        <div className="text-[18px] flex flex-col leading-[3rem]">
          <NavLink className="text-[white] hover:text-[#0dfff6]" to="/">
            Home
          </NavLink>
          <NavLink className="text-[white] hover:text-[#0dfff6]" to="/works">
            Work
          </NavLink>
          <NavLink className="text-[white] hover:text-[#0dfff6]" to="/services">
            Services
          </NavLink>
          <NavLink className="text-[white] hover:text-[#0dfff6]" to="/agency">
            Agency
          </NavLink>
          <NavLink className="text-[white] hover:text-[#0dfff6]" to="/career">
            Careers
          </NavLink>
          <NavLink className="text-[white] hover:text-[#0dfff6]" to="/contact">
            Contact
          </NavLink>
          
        </div>
        <div className="text-[18px] leading-10">
          <h1 className="text-[#0dfff6] tracking-widest font-semibold">
            OFFICES
          </h1>
          <p
            className="text-[white] hover:text-[#0dfff6]"
            style={{ cursor: "pointer" }}
          >
            Nigeria
          </p>
          <p
            className="text-[white] hover:text-[#0dfff6]"
            style={{ cursor: "pointer" }}
          >
            Dubai
          </p>
        </div>
      </div>
      <div className="text-[18px] order-first md:order-last flex flex-col text-center md:text-right leading-10">
        <h1 className="text-[18px] text-[#0dfff6] font-semibold">FOLLOW</h1>
        <div className="gap-3 pb-3 md:pb-16 pt-5 flex flex-row justify-center md:justify-end">
          
          <div className="hover:border-[#0dfff6] p-2 md:p-0  rounded-full border flex h-[2.5rem] w-[2.5rem] items-center text-center justify-center cursor-pointer">
            <a href="https://www.instagram.com/jaga-visuals/">
              <BiLogoInstagram className="text-white hover:text-[#0dfff6] text-[25px]" />
            </a>
          </div>

          <div className="hover:border-[#0dfff6] p-2 md:p-0 rounded-full border flex h-[2.5rem] w-[2.5rem] items-center text-center justify-center cursor-pointer">
            <LiaLinkedinIn className="text-white hover:text-[#0dfff6] text-[25px]" />
          </div>
          
          <div className="hover:border-[#0dfff6] p-2 md:p-0 rounded-full border flex  h-[2.5rem] w-[2.5rem] items-center text-center justify-center cursor-pointer">
            <a href="https://www.youtube.com/@jagavisuals/videos">
              <AiOutlineYoutube className="text-white hover:text-[#0dfff6] text-[25px]" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-[16px] leading-10 pb-5">
            Subscribe to our newsletter
          </p>
          <p className="text-[18px] leading-10 pb-5">
            Follow us on social media
          </p>
          <p className="text-[white]  hover:text-[#0dfff6] text-[25px] lowercase md:normal-case cursor-pointer">
            hello@jagavisuals.com
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
