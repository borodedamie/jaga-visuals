import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
const Contact1 = () => {
  return (
    <div>
      <div>
      <div>
        <h1 className="text-[blue] text-[25px] font-bold">Don't be Shy</h1>
        <p className="text-[25px] font-bold">Let us help you get your project started.</p>
      </div>
      <div>
        <h2 className="text-[25px] font-bold pt-10">Contact us</h2>
        <p className="text-[blue] text-[25px] font-bold">hello@jagavisuals.com</p>
      <div className="gap-3 pb-3 md:pb-16 pt-5 flex flex-row">
          <div className="bg-[grey] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
            <BiLogoFacebook className="text-white text-[25px]" />
          </div>
          <div className="bg-[grey] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
            <AiOutlineInstagram className="text-white text-[25px]" />
          </div>
          <div className="bg-[grey] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
            <LiaLinkedinIn className="text-white text-[25px]" />
          </div>
          <div className="bg-[grey] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
            <BiLogoWhatsapp className="text-white text-[25px]" />
          </div>
          <div className="bg-[grey] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
            <AiFillYoutube className="text-white text-[25px]" />
          </div>
        </div>

      </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact1;
