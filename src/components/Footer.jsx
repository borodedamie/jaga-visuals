import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="px-10 pt-10 pb-10 md:pb-0 md:pt-20 font-bold pb-50 flex flex-col md:flex-row justify-around text-[white] h-full md:h-screen bg-[#1c1b1b]">
     <div className="flex flex-row gap-[10rem]">
      <div className="text-[18px] leading-10">
        <p className="text-[#63bbca]">Home</p>
        <p className="text-[#63bbca]">Work</p>
        <p className="text-[#63bbca]">Services</p>
        <p className="text-[#63bbca]">Agency</p>
        <p className="text-[#63bbca]">Blog</p>
        <p className="text-[#63bbca]">Contact</p>
        <p className="text-[#63bbca]">FAQs</p>
        <p className="text-[#63bbca]">Privacy Policy</p>
      </div>
      <div className="text-[18px] leading-10">
        <h1 className="text-[#63bbca]">OFFICES</h1>
        <p>Nigeria</p>
        <p>Dubai</p>
      </div>
      </div>
      <div className="text-[18px] order-first md:order-last flex flex-col text-center md:text-right items-right leading-10">
        <h1>Follow</h1>
        <div className="gap-3 pb-3 md:pb-16 pt-5 flex flex-row justify-center md:justify-end">
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
            <BiLogoFacebook className="text-black text-[25px]"/>
          </div>
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
          <AiOutlineInstagram className="text-black text-[25px]"/>
          </div>
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
          <LiaLinkedinIn className="text-black text-[25px]"/>
          </div>
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
          <BiLogoWhatsapp className="text-black text-[25px]"/>
          </div>
          <div className="bg-white rounded-full border flex h-[1.5rem] w-[1.5rem] items-center text-center justify-center">
          <AiFillYoutube className="text-black text-[25px]"/>
          </div>
        </div>

        <p className="text-[20px] leading-10 pb-3">Sign up to our Newsletter</p>
        <p className="text-[#63bbca] text-[25px] lowercase md:normal-case">Hello@jagavisuals.com</p>
      </div>
    </div>
  );
};

export default Footer;
