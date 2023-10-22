import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImCancelCircle } from "react-icons/im";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import youtube from "../assets/youtube-01.png";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.jpg";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      className={`top-0  flex flex-row justify-between overflow-hidden
        ${
          navbar
            ? "top-0  pl-10 mx-0 bg-[blue] z-20 h-[100vh] absolute transform translate-y-0 transition-safelist w-full duration-1000 ease-in flex flex-col justify-start items-start text-[#1f1f61] "
            : "top-[-1000px] transform items-center flex flex-row  -translate-y-0 transition-safelist  text-[black] gap-[1.5rem] justify-center"
        }`}
    >
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <LazyLoadImage
            className={`flex 
          ${navbar ? "hidden" : "flex pl-10 pt-10 w-[8rem] h-[8rem] "}`}
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="flex flex-row gap-1 md:gap-10">
        <div className="flex justify-between flex-col pb-5">
          <NavLink to="/">
            <LazyLoadImage
              className={` w-[6rem] absolute top-[.5rem] h-[6rem] mt-10
          ${navbar ? "flex" : "hidden pl-10 "}`}
              src={logo}
              alt="Logo"
            />
          </NavLink>
          <div className=" flex  flex-row justify-between items-center ">
            <div className="flex flex-row gap-5 pb-10 pl-3">
              <li
                onClick={handleToggle}
                className={`rounded-full border w-[40px] h-[40px] flex items-center text-center justify-center
        ${
          navbar
            ? "flex text-[80px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden text-[20px]"
        }`}
              >
                <a href="https://www.instagram.com/jaga-visuals/">
                  {" "}
                  <BiLogoInstagram className="text-[white] text-[25px]" />
                </a>
              </li>
              <li
                onClick={handleToggle}
                className={` rounded-full  w-[40px] h-[40px] border flex items-center text-center justify-center
        ${
          navbar
            ? "flex  text-[80px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden text-[20px]"
        }`}
              >
                <a href="https://www.instagram.com/jaga-visuals/">
                  {" "}
                  <BiLogoWhatsapp className="text-[white] text-[25px]" />
                </a>
              </li>
              <li
                onClick={handleToggle}
                className={`flex w-[40px] rounded-full border h-[40px] items-center text-center justify-center
        ${
          navbar
            ? "flex text-[80px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden"
        }`}
              >
                <a href="https://www.youtube.com/@jagavisuals">
                  <AiOutlineYoutube className="text-white hover:text-[white] text-[25px]" />
                </a>
              </li>
            </div>
          </div>
        </div>

        <ul
          className={`flex flex-row   ${
            navbar
              ? "flex-col absolute top-[5rem] left-10 md:top-[0] md:left-[10rem] pl-0 md:pl-[9rem] h-full md:h-[100vh] pt-0 md:pt-[4rem] translate-y-0 transition-safelist transform"
              : "items-center gap-10 "
          }`}
        >
          <li
            onClick={handleToggle}
            className={`mt-[5rem] md:mt-0 md:pb-0 font-bold hover:text-[blue]
            ${
              navbar
                ? "hover:text-[white]  list-item transform transition duration-300 ease-in-out hover:translate-x-2 delay-100 pt-[3rem] md:pt-[5rem] opacity-1  translate-y-0 leading- text-[50px] md:text-[70px] text-[white]"
                : "hidden md:flex text-[20px] "
            }`}
          >
            <NavLink to="/works">Work</NavLink>
          </li>
          <li
            onClick={handleToggle}
            className={`text-[40px] md:pb-0 font-bold group relative flex w-0 md:w-full flex-row
        ${
          navbar
            ? " list-item transform transition duration-300 ease-in-out hover:translate-x-2 text-[40px] md:text-[70px] gap-5 hover:text-[white] opacity-1  translate-y-0  delay-150 leading-12"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/services">Services</NavLink>
            <div className="hidden md:block w-full md:invisible relative md:absolute md:text-[30px] md:bottom-[-15rem] left-0 md:left-[25rem] md:group-hover:visible">
              <p><NavLink to="/services">Creative Design</NavLink></p>
              <p><NavLink to="/services">Branding</NavLink></p>
              <p><NavLink to="/services">Motion Graphics</NavLink></p>
              <p><NavLink to="/services">Web Development</NavLink></p>
              <p><NavLink to="/services">Social Media Management</NavLink></p>
              <p><NavLink to="/services">Digital Marketing</NavLink></p>
            </div>
          </li>
          <li
            onClick={handleToggle}
            className={` md:pb-0 font-bold  
        ${
          navbar
            ? " list-item transform transition duration-300 ease-in-out hover:translate-x-2 text-[50px] md:text-[70px] hover:text-[white] opacity-1  translate-y-0 t delay-200 leading-12"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/agency">Agency</NavLink>
          </li>
          <li
            onClick={handleToggle}
            className={` md:pb-0 font-bold 
        ${
          navbar
            ? " text-[50px] md:text-[70px]  list-item transform transition duration-300 ease-in-out hover:translate-x-2 hover:text-[white] opacity-1  translate-y-0 delay-200 leading-12"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/career">Career</NavLink>
          </li>

          <li
            className={` md:pb-0 font-bold hover:text-[blue]
            ${
              navbar
                ? " hover:text-[white] list-item transform transition duration-300 ease-in-out hover:translate-x-2 opacity-1  translate-y-0 delay-250 text-[50px] md:text-[70px] leading-12"
                : "hidden md:flex text-[20px]"
            }`}
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <div className="flex flex-row justify-around gap-[30rem] w-full items-center"></div>
        </ul>

        <div className="flex justify-between items-end flex-col">
          <div
            onClick={handleToggle}
            className="flex flex-row justify-between text-[black] text-[40px] cursor-pointer "
          >
            {navbar ? (
              <MdClose className="absolute top-14 right-6 transition-all duration-1000 ease-out text-[white] text-[55px]" />
            ) : (
              <BiMenuAltRight
                className={`absolute pl-5 md:relative flex text-[40px] top-12 md:top-0 right-10 text-[black] ${
                  navbar ? "hidden" : "flex w-[5rem] h-[5rem]"
                }`}
                style={{ color: "#403e3e" }}
              />
            )}
          </div>
          <div
            className={`hidden flex-row justify-between items-center right-2 relative md:absolute bottom-0 md:bottom-10
            ${
              navbar
                ? "hidden md:flex text-[20px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
                : "hidden text-[20px]"
            }`}
          >
            <div className="flex flex-row items-center gap-10 justify-center">
              <h2 className="text-[white] my-0 mx-0 font-bold text-[25px]">
                Don't be Shy
              </h2>
              <hr className="border-3 h-[8rem] w-[1px] bg-[white] " />
              <div className="flex flex-row items-center justify-center">
                <NavLink to="/contact">
                  <button className=" text-center  text-[14px] mt-5 items-center flex rounded-full font-medium h-[3rem] text-[white] hover:text-[blue] py-7 px-10 border-[black] bg-[black] opacity-[0.5] hover:opacity-100 hover:bg-[white] border-[0]">
                    START YOUR PROJECT
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
