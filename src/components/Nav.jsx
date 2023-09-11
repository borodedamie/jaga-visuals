import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="flex mb-0 md:mb-10 flex-col md:flex-row items-left md:items-center mx-0 md:mx-20 justify-between pt-[2em] gap-20">
      <div className="flex justify-between items-center mx-10">
        <NavLink  
          to="/"
        >
          Logo
        </NavLink>
        <div
          onClick={handleToggle}
          className="block md:hidden text-[2rem] cursor-pointer text-black "
        >
          {navbar ? (
            <ImCancelCircle className="absolute top-6 right-10  text-[white] text-[55px] z-10" />
          ) : (
            <BiMenuAltRight className="text-[55px]" />
          )}
        </div>
      </div>
      <ul
        className={`bg-[blue] md:bg-[white] pl-9 md:pl-0 text-[white] md:text-[black] justify-between items-center md:flex flex-col md:flex-row absolute w-full md:w-[60%] md:static transition-all duration-600 ease-in md:items-center gap-10 ${
          navbar ? 'top-0' : 'top-[-490px]'
        }`}
      >
        <li className="text-[40px] sm:transition-all md:text-[20px] py-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink to="/works">Work</NavLink>
        </li>
        <li className="text-[40px] md:text-[20px]  py-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink to="/services">Services</NavLink>
        </li>

        <li className="text-[40px] md:text-[20px] py-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink to="/career">Career</NavLink>
        </li>
        <li className="text-[40px] md:text-[20px] py-[1em] md:pb-0 font-bold leading-[19.36px]">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
