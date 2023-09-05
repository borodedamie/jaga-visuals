import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const Nav = () => {
  const [navbar, setNavbar] = useState();
  const handleToggle = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="flex mb-0 md:mb-10 flex-col md:flex-row items-left md:items-center mx-0 md:mx-20 justify-between pt-[2em] gap-20 relative">
      <div className="flex justify-between items-center mx-10">
        {/* <p className="text-[20px] pb-[1em] md:pb-0 font-bold leading-[19.36px]">Logo</p> */}
        <NavLink
            className={`${
              navbar
              ? " text-white "
              : "text-black text-[20px] pb-[1em] md:pb-0 font-bold leading-[19.36px]"
            }`}
            to="/"
          >
            Logo
          </NavLink>
        <div
          onClick={handleToggle}
          className="block md:hidden text-[2rem] cursor-pointer text-black "
        >
          {navbar ? <ImCancelCircle className="text-[55px]" /> : <BiMenuAltRight className="text-[55px]" />}
        </div>
      </div>
      <ul
        className={`${
          navbar
            ? "bg-[black] px-20 text-white md:bg-none top-[10rem] flex flex-col py-[2rem] md:py-0 w-[100%] space-y-8 md:space-y-0 justify-between items-left absolute"
            : "hidden md:flex items-center justify-between gap-20"
        }`}
      >
        <li className="text-[20px] pb-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink
            className={`${
              navbar
              ? " text-white"
              : "text-black"
            }`}
            to="/works"
          >
            Work
          </NavLink>
        </li>
        <li className="text-[20px] pb-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink
             className={`${
              navbar
              ? " text-white"
              : "text-black"
            }`}
            to="/services"
          >
            Services
          </NavLink>
        </li>

        <li className="text-[20px] pb-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink
             className={`${
              navbar
              ? " text-white"
              : "text-black"
            }`}
            to="/career"
          >
            Career
          </NavLink>
        </li>
        <li className="text-[20px] pb-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink
             className={`${
              navbar
              ? " text-white"
              : "text-black"
            }`}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
