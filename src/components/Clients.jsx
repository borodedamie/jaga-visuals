import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeOut } from "./variants";
import jva from "../assets/damage.jpg";
import premium from "../assets/premium.jpg";
import client from "../assets/clients.jpg";
import fortune from "../assets/Fortune.png";
import Auto from "../assets/Autoflex.png";
import foret from "../assets/Foret.png";
import livevend from "../assets/Livevend.png";
import kitchen from "../assets/Kitchenji.png";
import jumia from "../assets/Jumia.png";
import wavy from "../assets/Wavy.png";
import nagaad from "../assets/Nagaad.png";
import one from "../assets/one.png";
import immerse from "../assets/immerse.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Clients = () => {
  const scrollRef = useRef(null);

  return (
    <div className="px-5 mt-[13rem]  mb-20">
      <h1 className="text-[#403e3e] text-left my-20 md:text-center font-bold text-[60px]">
        Our Clients
      </h1>
      <motion.div
        variants={fadeOut("bottom", 0.5)}
        viewport={{ amount: 0.7 }}
        initial="hidden"
        whileInView={"show"}
        className="grid md:w-[70%] px-0 mb-[13rem] items-center justify-center mx-auto md:px-20 grid-cols-2 md:grid-cols-5 gap-8"
      >
        <LazyLoadImage className="w-[7rem] h-[7rem]" src={wavy} />
        <LazyLoadImage className="w-[7rem] h-[7rem]" src={one} />
        <LazyLoadImage className="w-[7rem] h-[1rem] mt-[2rem]" src={immerse} />

        <LazyLoadImage className="w-[7rem] h-[7rem] mt-[2rem]" src={jumia} />
        <LazyLoadImage className="w-[7rem] h-[7rem] " src={foret} />
        <LazyLoadImage
          className="w-[7rem] h-[7rem]  mt-[2rem] md:mt-0"
          src={kitchen}
        />
        <LazyLoadImage className="w-[7rem] h-[7rem]" src={Auto} />
        <LazyLoadImage className="w-[7rem] h-[7rem]" src={livevend} />
        <LazyLoadImage className="w-[7rem] h-[7rem]" src={nagaad} />
        <LazyLoadImage className="w-[7rem] h-[7rem]" src={fortune} />
      </motion.div>
      <div className="flex flex-col pb-5 md:flex-row justify-center items-end gap-20">
        <div className="flex w-full md:w-[25rem] flex-col">
          <h2 className="font-bold text-[38px] pb-[2rem] text-[#403e3e]">Latest Articles</h2>
          <div className="border bg-[black] h-fit">
            <LazyLoadImage src={jva} />
          </div>
        </div>
        <div className="border bg-[black] h-fit w-full md:w-[25rem]">
          <LazyLoadImage src={client} />
        </div>
        <div className="border bg-[black] h-fit w-full md:w-[25rem]">
          <LazyLoadImage src={premium} />
        </div>
      </div>
      <button className="mt-[2rem] text-center mb-[13rem] items-center flex mx-auto rounded-full font-medium h-[3rem] text-[blue] hover:bg-[blue] hover:text-[white] p-5 border-[blue] border-[2px]">
        VIEW ALL BLOG POSTS
      </button>
    </div>
  );
};

export default Clients;
