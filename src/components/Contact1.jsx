import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

const Contact1 = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('hello@jagavisuals.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000)
  };

  return (
    <div className="flex mx-5 md:mx-0 pt-[2rem] md:pt-0 flex-col lg:flex-row justify-center items-center gap-[2rem] lg:gap-[5rem] xl:gap-[10rem] h-fit lg:h-[90vh]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[blue] text-[35px] md:text-[40px]  font-bold mb-[1rem]">
            Let's create magic
          </h1>{" "}
          <p className="text-[25px] font-bold">
            Let us help you get your <br /> project started.
          </p>
        </div>
        <div>
          <h2 className="text-[25px] font-bold pt-[1rem]">Contact us</h2>
          <p
            onClick={copyToClipboard}
            className={`text-[blue] text-[30px] font-bold cursor-pointer ${isEmailHovered ? 'ishovered' : ''}`}
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => {
              setIsEmailHovered(false);
              setIsCopied(false);
            }}>
            hello@jagavisuals.com
          </p>
          <div style={{ height: '10px' }}>
            {isEmailHovered && isCopied && <p className="text-[blue] font-bold text-[18px]">Copied!</p>}
            {isEmailHovered && !isCopied && (
              <p
                onClick={copyToClipboard}
                className="text-[blue] font-bold text-[18px] cursor-pointer"
              >
                Copy to clipboard...
              </p>
            )}
          </div>
          <div className="mt-[1rem] gap-3 lg:pb-16 pt-5 flex flex-row">
            <div className="cursor-pointer bg-[#5b5959] rounded-full border flex h-[3rem] w-[3rem] items-center text-center justify-center">
              <BiLogoFacebook className="text-white text-[25px]"/>
            </div>
            <div className="cursor-pointer bg-[#5b5959] rounded-full border flex h-[3rem] w-[3rem] items-center text-center justify-center">
              <AiOutlineInstagram className="text-white text-[25px]" />
            </div>

            <div className="cursor-pointer bg-[#5b5959] rounded-full border flex h-[3rem] w-[3rem] items-center text-center justify-center">
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
              className="border-[2px] hover:text-[white] hover:bg-[blue] items-center cursor-pointer font-bold tracking-widest w-[12rem] h-[3.5rem] flex text-[14px] text-center justify-center rounded-[2rem] border-[blue]"
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
