import React from "react";
import { NavLink } from "react-router-dom";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube-01.png";

import { BiLogoFacebook } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="px-10 pt-10 pb-10 md:pb-0 md:pt-20 font-bold pb-50 flex flex-col md:flex-row justify-around text-[white] h-fit md:h-[37rem] bg-[#1c1b1b]">
      <div className="flex flex-row gap-[10rem] justify-center">
        <div className="text-[22px] flex flex-col leading-[3rem]">
          <NavLink className="text-[#0dfff6]" to="/">
            Home
          </NavLink>
          <NavLink className="text-[#0dfff6]" to="/works">
            Work
          </NavLink>
          <NavLink className="text-[#0dfff6]" to="/services">
            Services
          </NavLink>
          <NavLink className="text-[#0dfff6] " to="/agency">
            Agency
          </NavLink>
          <NavLink className="text-[#0dfff6] " to="/blog">
            Blog
          </NavLink>
          <NavLink className="text-[#0dfff6]" to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-[#0dfff6] " to="/faqs">
            FAQs
          </NavLink>
          <NavLink className="text-[#0dfff6] " to="/privacy_policy">
            Privacy Policy{" "}
          </NavLink>
        </div>
        <div className="text-[22px] leading-10">
          <h1 className="text-[#0dfff6] ">OFFICES</h1>
          <p>Nigeria</p>
          <p>Dubai</p>
        </div>
      </div>
      <div className="text-[22] order-first md:order-last flex flex-col text-center md:text-right leading-10">
        <h1 className="text-[22px]">Follow</h1>
        <div className="gap-3 pb-3 md:pb-16 pt-5 flex flex-row justify-center md:justify-end">
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
            <BiLogoFacebook className="text-black text-[25px]" />
          </div>
          <div className="flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
            <a href="https://www.instagram.com/jaga-visuals/">
              {" "}
              <img src={instagram} alt="insta"></img>
            </a>
          </div>
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
            <LiaLinkedinIn className="text-black text-[25px]" />
          </div>
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
            <BiLogoWhatsapp className="text-black text-[25px]" />
          </div>
          <div className="flex h-[1.7rem] w-[1.7rem] items-center text-center justify-center">
            <a href="https://www.youtube.com/@jaga-visuals/">
              {" "}
              <img src={youtube} alt="you"></img>
            </a>
          </div>
          
        </div>

        <p className="text-[22px] leading-10 pb-3">Sign up to our Newsletter</p>
        <p className="text-[#0dfff6]  text-[25px] lowercase md:normal-case">
          Hello@jagavisuals.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
