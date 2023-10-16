import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImCancelCircle } from "react-icons/im";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import youtube from "../assets/youtube-01.png";
import logo from "../assets/logo.jpg";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      className={`top-0 z-10 flex flex-row justify-between
        ${
          navbar
            ? "top-0  pl-10 mx-0 bg-[blue] absolute transform transition-safelist w-full duration-1000 ease-in-out flex flex-col justify-start items-start text-[#1f1f61] "
            : "top-[-1000px] items-center flex flex-row  text-[black] gap-[1.5rem] justify-center"
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
      <div className="flex flex-row gap-10">
        <div className="hidden md:flex justify-between flex-col pb-5">
          <NavLink to="/">
            <LazyLoadImage
              className={` w-[6rem] h-[6rem] mt-10
          ${navbar ? "flex" : "hidden pl-10 "}`}
              src={logo}
              alt="Logo"
            />
          </NavLink>
          <div className="hidden md:flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
              <li
                onClick={handleToggle}
                className={`bg-white rounded-full border flex items-center text-center justify-center
        ${
          navbar
            ? "hidden md:flex text-[50px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden text-[20px]"
        }`}
              >
                <a href="https://www.instagram.com/jaga-visuals/">
                  {" "}
                  <BiLogoInstagram className="text-[blue] text-[25px]" />
                </a>
              </li>
              <li
                onClick={handleToggle}
                className={`bg-white rounded-full border flex items-center text-center justify-center
        ${
          navbar
            ? "flex text-[50px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden text-[20px]"
        }`}
              >
                <a href="https://www.instagram.com/jaga-visuals/">
                  {" "}
                  <BiLogoWhatsapp className="text-[blue] text-[25px]" />
                </a>
              </li>
              <li
                onClick={handleToggle}
                className={`flex h-[1.7rem] w-[1.7rem] items-center text-center justify-center
        ${
          navbar
            ? "flex text-[50px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden"
        }`}
              >
                <a href="https://www.youtube.com/@jaga-visuals/">
                  {" "}
                  <img src={youtube} alt="you"></img>
                </a>
              </li>
            </div>
          </div>
        </div>

        <ul
          className={`flex flex-row   ${
            navbar
              ? "flex-col pl-5 h-[100vh] pt-0 md:pt-5  "
              : "items-center gap-10 "
          }`}
        >
          <li
            onClick={handleToggle}
            className={`text-[#403e3e] mt-[5rem] md:mt-0 md:pb-0 font-bold hover:text-[#0dfff6]
            ${
              navbar
                ? "flex transition-all delay-100 pt-[3rem] md:pt-[5rem] duration-200 ease-in-out text-[50px] hover:text-[white]"
                : "hidden md:flex text-[30px] "
            }`}
          >
            <NavLink to="/works">Work</NavLink>
          </li>
          <li
            onClick={handleToggle}
            className={`text-[40px] md:pb-0 font-bold group relative flex w-0 md:w-[40rem] flex-row
        ${
          navbar
            ? "flex text-[50px] gap-5 hover:text-[white] transition-all duration-300 ease-in-out delay-150"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/services">Services</NavLink>
            <div className="hidden md:block md:invisible relative md:absolute md:text-[40px] md:bottom-[-15rem] left-0 md:left-60 md:group-hover:visible ">
                <h2>Creative Design</h2>
                <h2>Branding</h2>
                <h2>Motion Graphics</h2>
                <h2>Web Development</h2>
                <h2>Social Media Management</h2>
                <h2>Digital Marketing</h2>
              </div>
          </li>

          <li
            onClick={handleToggle}
            className={` md:pb-0 font-bold 
        ${
          navbar
            ? "flex text-[50px] hover:text-[white] transition-all duration-500 ease-in-out delay-200"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/career">Career</NavLink>
          </li>
          <li
            onClick={handleToggle}
            className={` md:pb-0 font-bold  
        ${
          navbar
            ? "flex text-[50px] hover:text-[white] transition-all duration-500 ease-in-out delay-200"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/agency">Agency</NavLink>
          </li>
          <li
            className={`text-[#403e3e] md:pb-0 font-bold hover:text-[#0dfff6]
            ${
              navbar
                ? "flex hover:text-[white] transition-all delay-250 duration-700 ease-in-out text-[50px]"
                : "hidden md:flex text-[30px]"
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
              <ImCancelCircle className="absolute top-10 right-3 transition-all duration-1000 ease-out text-[white] text-[55px]" />
            ) : (
              <BiMenuAltRight
                className={`absolute pl-5 md:relative transition-all duration-1000 ease-in flex text-[40px] top-20 md:top-0 right-10 text-[black] ${
                  navbar ? "hidden" : "flex w-[5rem] h-[5rem]"
                }`}
                style={{ color: '#403e3e' }}
              />
            )}
          </div>
          <div
            className={`hidden flex-row justify-between items-center right-2 relative md:absolute bottom-0 md:bottom-2
            ${
              navbar
                ? "hidden md:flex text-[20px] hover:text-[white] transition-all duration-300 ease-in-out delay-150"
                : "hidden text-[20px]"
            }`}
          >
            <div className="flex flex-row items-center gap-3 justify-center">
              <h2 className="text-[white] font-bold text-[20px]">
                Don't be Shy
              </h2>
              <hr className="border-3 h-[4rem] w-1 bg-[white]" />
              <div className="flex flex-row items-center justify-center">
                <NavLink to="/contact">
                  <button className=" text-center  mt-5 items-center flex rounded-full font-medium h-[2rem] text-[white] py-7 px-10 border-[black] bg-[black] border-[0]">
                    SUBMIT
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
