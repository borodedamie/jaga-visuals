import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
const Contact1 = () => {
  return (
    <div className="flex lg:pt-0 flex-col lg:flex-row justify-center items-center my-[2rem] lg:items-start gap-[2rem] lg:gap-[10rem]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[blue] text-[35px] font-bold ">
            Let's create magic
          </h1>{" "}
          <p className="text-[25px] font-bold">
            Let us help you get your <br /> project started.
          </p>
        </div>
        <div>
          <h2 className="text-[25px] font-bold pt-10">Contact us</h2>
          <p className="text-[blue] text-[25px] font-bold">
            hello@jagavisuals.com
          </p>
          <div className="gap-3 pb-3 lg:pb-16 pt-5 flex flex-row">
            <div className="bg-[#5b5959] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
              <BiLogoFacebook className="text-white text-[25px]" />
            </div>
            <div className="bg-[#5b5959] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
              <AiOutlineInstagram className="text-white text-[25px]" />
            </div>

            <div className="bg-[#5b5959] rounded-full border flex h-[2rem] w-[2rem] items-center text-center justify-center">
              <AiFillYoutube className="text-white text-[25px]" />
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:flex h-[24rem] bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <div className="flex flex-col">
        <h1 className="text-[blue] text-[35px] font-bold pb-7">
          Start your project
        </h1>
        <form className="flex flex-col ">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[1rem] mb-3">
            <input
              className="border-b-2 font-medium border-[#5b5959] leading-10"
              placeholder="First Name"
            ></input>
            <input
              className="border-b-2  font-medium border-[#5b5959] leading-10"
              placeholder="Last Name"
            ></input>
          </div>

          <input
            className="border-b-2 font-medium mb-5 border-[#5b5959] leading-10"
            placeholder="Email"
          ></input>
          <input
            className="border-b-2 font-medium mb-5 border-[#5b5959] leading-10"
            placeholder="Upload File [pdf,jpeg,docx,ppt]"
          ></input>
          <input
            className="border-2 font-medium mt-3 mb-5 border-[#5b5959] leading-10"
            type="text"
            placeholder="Message"
          ></input>
          <div className="flex flex-row justify-end">
            <button
              type="submit"
              className="border-[2px] items-center cursor-pointer font-bold w-[10rem] h-[2.5rem] flex text-[14px] text-center justify-center rounded-[2rem] border-[blue]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
