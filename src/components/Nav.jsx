import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.webp";
import logoWhite from "../assets/Jaga Visuals logo-white.webp";
import '../css/main.css'
const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setNavbar(!navbar);
   };
  


  return (
    <nav
      className={`top-0 flex flex-row justify-between overflow-hidden
    ${
      navbar
        ? "pl-10 mx-0 bg-[blue] bg-slide-in transition-opacity duration-300 ease-in top-0 left-0 p-4 z-20 h-[100vh] absolute transform w-full duration-400 flex flex-col justify-start items-start text-[#1f1f61] "
        : "transform items-center flex flex-row text-[black]  gap-[1.5rem] justify-between"
    }`}
    >
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <LazyLoadImage
            className={`flex
          ${
            navbar
              ? "hidden"
              : "flex pl-5 pt-10 w-[7rem] h-[8rem] md:pl-10 md:w-[8rem] md:h-[8rem] "
          }`}
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="flex flex-row gap-1 md:gap-10">
        <div className="flex justify-between flex-col pb-5">
          <NavLink to="/">
            <LazyLoadImage
              className={` w-[6rem] absolute top-[.5rem] left-3 h-[6rem] mt-10
          ${navbar ? "flex" : "hidden pl-10 "}`}
              src={logoWhite}
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
            ? "flex text-[80px] hover:text-[white] "
            : "hidden text-[20px]"
        }`}
              >
                <a href="https://www.instagram.com/jaga.visuals/">
                  {" "}
                  <BiLogoInstagram className="cursor-pointer text-[white] text-[25px]" />
                </a>
              </li>
              <li
                onClick={handleToggle}
                className={` rounded-full hover:text-[white]  w-[40px] h-[40px] border flex items-center text-center justify-center
        ${
          navbar
            ? "flex  text-[80px] hover:text-[white]"
            : "hidden text-[20px]"
        }`}
              >
                <a href="https://www.linkedin.com/company/jaga-visuals/">
                  {" "}
                  <LiaLinkedinIn className="cursor-pointer  text-[white] text-[25px]" />
                </a>
              </li>
              <li
                onClick={handleToggle}
                className={`flex w-[40px] rounded-full border h-[40px] items-center text-center justify-center
        ${
          navbar
            ? "flex text-[80px] hover:text-[white] "
            : "hidden"
        }`}
              >
                <a href="https://www.youtube.com/@jagavisuals/">
                  {" "}
                  <AiOutlineYoutube className="cursor-pointer text-white  text-[25px]" />
                </a>
              </li>
            </div>
          </div>
        </div>

        <ul
          className={`flex flex-row right-0    ${
            navbar
              ? "flex-col fixed top-[2rem] left-10 lg:top-[5rem] lg:left-[10rem] pl-0 lg:pl-[7rem] xl:pl-[15rem] h-full md:h-[100vh]"
              : "items-center  gap-10 "
          }`}
        >
          <li
            onClick={handleToggle}
            className={`mt-[5rem] py-0 md:mt-0 font-bold hover:text-[blue]
            ${
              navbar
                ? "hover:text-[white] xl:pb-[.5rem]   list-item transform transition duration-300 ease-in-out hover:translate-x-2 delay-100 pt-[3rem] md:pt-[5rem] pb-[0] opacity-1  translate-y-0 leading- text-[50px] md:text-[80px] text-[white]"
                : "hidden md:flex text-[20px] "
            }`}
            
          >
            <NavLink to="/works">Work</NavLink>
          </li>
          <li
            onClick={handleToggle}
            className={`text-[40px] font-bold group relative flex w-0 md:w-full flex-row
        ${
          navbar
            ? " list-item xl:pb-[.5rem]  transform transition duration-300 ease-in-out hover:translate-x-2 text-[40px] md:text-[80px] gap-5 hover:text-[white] opacity-1 translate-y-0 delay-150 leading-[3rem]"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink
              to="/services"
              className="text-[50px] md:text-[80px] leading-[1rem] md:leading-0"
            >
              Services
            </NavLink>
            <div className="hidden md:block w-full md:invisible relative md:absolute md:text-[30px] md:bottom-[-15rem] left-0 md:left-[25rem] md:group-hover:visible">
              <p>
                <NavLink to="/services">Creative Design</NavLink>
              </p>
              <p>
                <NavLink to="/services">Branding</NavLink>
              </p>
              <p>
                <NavLink to="/services">Motion Graphics</NavLink>
              </p>
              <p>
                <NavLink to="/services">Web Development</NavLink>
              </p>
              <p>
                <NavLink to="/services">Social Media Management</NavLink>
              </p>
              <p>
                <NavLink to="/services">Digital Marketing</NavLink>
              </p>
            </div>
          </li>
          <li
            onClick={handleToggle}
            className={`  font-bold  
        ${
          navbar
            ? " list-item transform xl:pb-[.5rem]  transition duration-300 ease-in-out hover:translate-x-2 text-[50px] md:text-[80px] hover:text-[white] opacity-1 translate-y-0 delay-200 leading-[3.5rem]  md:leading-[7rem]"
            : "hidden text-[20px] pt-0"
        }`}
          >
            <NavLink to="/agency">Agency</NavLink>
          </li>
          <li
            onClick={handleToggle}
            className={` font-bold hover:text-[blue]
            ${
              navbar
                ? "text-[50px]  xl:pb-[2.3rem]   md:text-[80px]  list-item transform transition duration-300 ease-in-out hover:translate-x-2 hover:text-[white] opacity-1  translate-y-0 delay-200 leading-[3rem]"
                : "hidden md:flex text-[20px]"
            }`}
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li
            onClick={handleToggle}
            className={`  font-bold 
        ${
          navbar
            ? " text-[50px] pt-[.7rem] md:pt-[2rem] xl:pt-[.7rem]  xl:pb-[.5rem]  md:text-[80px]  list-item transform transition duration-300 ease-in-out hover:translate-x-2 hover:text-[white] opacity-1  translate-y-0 delay-200 leading-[3rem]"
            : "hidden text-[20px]"
        }`}
          >
            <NavLink to="/career">Careers</NavLink>
          </li>

          <div className="flex flex-row justify-around gap-[30rem] w-full items-center"></div>
        </ul>

        <div className="flex justify-between items-end flex-col">
          <div
            className="flex flex-row justify-between text-[black] text-[40px] cursor-pointer "
          >
            {navbar ? (
              <MdClose onClick={handleToggle}  className='absolute top-14  right-2 md:right-6 transition-all duration-1000 ease-out text-[white] text-[55px]'/>
            ) : (
              <BiMenuAltRight
              onClick={handleToggle}
                className={`absolute pl-5 md:relative flex text-[40px] top-12 md:top-0 right-5 md:right-10 text-[black] ${
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
                  <button className=" text-center h-[3rem] py-3 px-5 md:py-7 md:px-10  text-[12px] items-center flex rounded-full font-medium text-[white] hover:text-[blue] border-[black] bg-[black] opacity-[0.5] hover:opacity-100 hover:bg-[white] border-[0]">
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
