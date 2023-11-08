import React from "react";
import { motion } from "framer-motion";
import { sentence, letter } from "./variants";
import idea1 from "../assets/idea.webp";

const Header = () => {
  const line1 = "Elevate your brand's first impression";

  
  return (
    <div className="pt-10 pb-20 gap-[1rem] overflow-hidden flex flex-col md:flex-row items-center ">
      <div className="flex-1 max-w-none ml-0 md:ml-[15%]">
        <img src={idea1} alt="idea1" className="w-fit md:w-[35vw]" />
      </div>
      <div className="text-center  flex-1 md:text-left mr-0 md:mr-[10%]">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-[#282860] w-[70%] mx-auto md:mx-0 lg:w-[90%] font-[700] text-[40px] md:text-[50px] leading-tight "
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
         
        </motion.h1>
        <p className="text-[18px] md:text-[23px] px-5 md:px-0 text-[#403e3e] font-medium pt-[5%] md:w-[100%] tracking-tight ">
          We're an innovative web design agency nestled in the vibrant heart of
          Dubai. Our expertise lies in meticulously creating exquisite and
          distinctive websites that resonate with brands{" "}
          <span className="text-[blue]">refuse to blend in.</span><br/>
          <br/>
          If you're ready to break free from the ordinary, we're here to craft your extraordinary web presence.
        </p>
      </div>
    </div>
  );
};

export default Header;
