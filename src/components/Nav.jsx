// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { BiMenuAltRight } from "react-icons/bi";
// import { ImCancelCircle } from "react-icons/im";
// import logo from '../assets/logo.jpg';
// const Nav = () => {
//   const [navbar, setNavbar] = useState(false);
//   const handleToggle = () => {
//     setNavbar(!navbar);
//   };

//   return (
//     <nav className="flex mb-0 w-full md:mb-[4rem] flex-col md:flex-row items-left md:items-center md:px-[4rem] justify-between pt-[2em] gap-20">
//       <div className="flex justify-between items-center mx-10">
//         <NavLink
//           to="/"
//         >
//           <img className="w-[5rem] h-[5rem]" src={logo} alt="Logo" ></img>
//         </NavLink>
//         <div
//           onClick={handleToggle}
//           className="block text-[2rem] cursor-pointer text-black "
//         >
//           {navbar ? (
//             <ImCancelCircle className="absolute top-6 right-10  text-[white] text-[55px] z-10" />
//           ) : (
//             <BiMenuAltRight className="absolute text-[55px] right-10" />
//           )}
//         </div>
//       </div>
//       <ul
//         className={`bg-[blue] md:bg-[white] h-[100vh] md:h-[10vh] pl-9 md:pl-0 text-[white] md:text-[black] justify-between items-center md:flex flex-col md:flex-row absolute w-full md:w-fit md:static transition-all duration-600 ease-in md:items-center gap-10
//         ${
//           navbar ? 'top-0' : 'top-[-1000px]'
//         }`}
//       >
//         <li className="text-[40px] sm:transition-all mt-[5rem] md:mt-0 md:text-[20px] py-[1em] md:pb-0 font-bold leading-[19.36px]">
//           <NavLink to="/works">Work</NavLink>
//         </li>
//         <li className="text-[40px] flex md:hidden md:text-[20px]  py-[1em] md:pb-0 font-bold leading-[19.36px]">
//           <NavLink to="/services">Services</NavLink>
//         </li>

//         <li className="text-[40px] flex md:hidden md:text-[20px] py-[1em] md:pb-0 font-bold leading-[19.36px]">
//           <NavLink to="/career">Career</NavLink>
//         </li>
//         <li className="text-[40px] md:text-[20px] py-[1em] md:pb-0 font-bold leading-[19.36px]">
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import logo from "../assets/logo.jpg";
const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setNavbar(!navbar);
  };

  return (
    <nav 
    // className={`flex mb-0 w-full md:mb-[4rem] flex-col md:flex-row items-left md:items-center justify-between gap-0 ${
      className={`top-0 z-10 flex flex-row justify-between 
        ${
          navbar
            ? "top-0 pl-10 mx-0 bg-[blue] absolute transform h-fit transition-safelist w-full duration-1000 ease-in-out flex flex-col justify-start items-start text-[white] "
            : "top-[-100%] items-center flex flex-row  text-[black] gap-[1.5rem] justify-center"
        }`}
    >
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img 
          className={`flex 
          ${navbar ? "hidden" : "flex  pl-10 pt-10 w-[8rem] h-[8rem] "}`}
           src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <ul
        className={`flex flex-row gap-10   ${navbar ? "flex-col pl-5 pt-0 md:pt-5" : "items-center"}`}
      >
        <li className={`mt-[5rem] md:mt-0 md:pb-0 font-bold  ${navbar ? "flex transition-all delay-100  duration-200 ease-in-out text-[50px] hover:text-[black]" : "hidden md:flex text-[30px] "}`}>
          
          <NavLink to="/works">Work</NavLink>
        </li>
        <li
          className={`text-[40px] md:pb-0 font-bold 
        ${navbar ? "flex text-[50px] hover:text-[black] transition-all duration-300 ease-in-out delay-150" : "hidden text-[20px]"}`}
        >
          <NavLink to="/services">Services</NavLink>
        </li>

        <li className={` md:pb-0 font-bold 
        ${navbar ? "flex text-[50px] hover:text-[black] transition-all duration-500 ease-in-out delay-200" : "hidden text-[20px]"}`}>
          <NavLink to="/career">Career</NavLink>
        </li>
        <li className={` md:pb-0 font-bold  
        ${navbar ? "flex text-[50px] hover:text-[black] transition-all duration-500 ease-in-out delay-200" : "hidden text-[20px]"}`}>
          <NavLink to="/agency">Agency</NavLink>
        </li>
        <li className={` md:pb-0 font-bold ${navbar ? "flex hover:text-[black] transition-all delay-250 duration-700 ease-in-out text-[50px]" : "hidden md:flex text-[30px]"}`}>
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
