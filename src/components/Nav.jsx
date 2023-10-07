
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImCancelCircle } from "react-icons/im";
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
           src={logo} alt="Logo"/>
        </NavLink>
      </div>
      <ul
        className={`flex flex-row   ${navbar ? "flex-col pl-5 h-[100vh] pt-0 md:pt-5  " : "items-center gap-10 "}`}
      >
        <li onClick={handleToggle} className={`mt-[5rem] md:mt-0 md:pb-0 font-bold  ${navbar ? "flex transition-all delay-100 pt-[3rem] md:pt-[5rem] duration-200 ease-in-out text-[50px] hover:text-[white]" : "hidden md:flex text-[30px] "}`}>
          
          <NavLink to="/works">Work</NavLink>
        </li>
        <li
        onClick={handleToggle}
      
          className={`text-[40px] md:pb-0 font-bold 
        ${navbar ? "flex text-[50px] hover:text-[white] transition-all duration-300 ease-in-out delay-150" : "hidden text-[20px]"}`}
        >
          <NavLink to="/services">Services</NavLink>
        </li>

        <li onClick={handleToggle}
       
         className={` md:pb-0 font-bold 
        ${navbar ? "flex text-[50px] hover:text-[white] transition-all duration-500 ease-in-out delay-200" : "hidden text-[20px]"}`}>
          <NavLink to="/career">Career</NavLink>
        </li>
        <li onClick={handleToggle}
        
         className={` md:pb-0 font-bold  
        ${navbar ? "flex text-[50px] hover:text-[white] transition-all duration-500 ease-in-out delay-200" : "hidden text-[20px]"}`}>
          <NavLink to="/agency">Agency</NavLink>
        </li>
        <li className={` md:pb-0 font-bold ${navbar ? "flex hover:text-[white] transition-all delay-250 duration-700 ease-in-out text-[50px]" : "hidden md:flex text-[30px]"}`}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li
          onClick={handleToggle}
          className="flex flex-row justify-between text-[black] text-[40px] cursor-pointer "
          
        >
          {navbar ? (
            <ImCancelCircle className="absolute top-10 right-3 transition-all duration-1000 ease-out text-[white] text-[55px]" />
          ) : (
            <BiMenuAltRight className={`absolute pl-5 md:relative transition-all duration-1000 ease-in flex text-[40px] top-10 md:top-0 right-3 text-[black] ${navbar ? "hidden" : "flex w-[5rem] h-[5rem]"}`}/>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
