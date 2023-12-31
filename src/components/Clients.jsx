import React, { useRef } from "react";
import jva from "../assets/damage.webp";
import premium from "../assets/premium.webp";
import client from "../assets/clients.webp";
import fortune from "../assets/Fortune.webp";
import Auto from "../assets/Autoflex.webp";
import foret from "../assets/Foret.webp";
import livevend from "../assets/Livevend.webp";
import kitchen from "../assets/Kitchenji.webp";
import jumia from "../assets/Jumia.webp";
import wavy from "../assets/Wavy.webp";
import nagaad from "../assets/Nagaad.webp";
import one from "../assets/one.webp";
import immerse from "../assets/immerse.webp";

const Clients = () => {
  const scrollRef = useRef(null);

  return (
    <div className="px-5 mt-[2rem] md:mt-[13rem]  mb-20">
      <h1 className="text-[#403e3e] text-left my-20 md:text-center font-bold text-[60px]">
        Our Clients
      </h1>
      <div
        className="grid md:w-[70%] px-0 mb-[2rem] md:mb-[13rem] items-center justify-center mx-auto md:px-20 grid-cols-2 md:grid-cols-5 gap-8"
      >
        <img className="w-[7rem] h-[7rem]" src={wavy} />
        <img className="w-[7rem] h-[7rem]" src={one} />
        <img className="w-[7rem] h-[1rem] mt-[2rem]" src={immerse} />

        <img className="w-[7rem] h-[7rem] mt-[2rem]" src={jumia} />
        <img className="w-[7rem] h-[7rem] " src={foret} />
        <img
          className="w-[7rem] h-[7rem]  mt-[2rem] md:mt-0"
          src={kitchen}
        />
        <img className="w-[7rem] h-[7rem]" src={Auto} />
        <img className="w-[7rem] h-[7rem]" src={livevend} />
        <img className="w-[7rem] h-[7rem]" src={nagaad} />
        <img className="w-[7rem] h-[7rem]" src={fortune} />
      </div>
      <div className="flex flex-col pb-5 md:flex-row justify-center items-end gap-[1.5rem]">
        <div className="flex w-full md:w-[25rem] flex-col">
          <h2 className="font-bold text-[38px] pb-[2rem] text-[#403e3e]">Latest Articles</h2>
          <div className="border bg-[black] h-fit">
            <img src={jva} />
          </div>
        </div>
        <div className="border bg-[black] h-fit w-full md:w-[25rem]">
          <img src={client} />
        </div>
        <div className="border bg-[black] h-fit w-full md:w-[25rem]">
          <img src={premium} />
        </div>
      </div>
      <button className="mt-[2rem] text-center mb-[2rem] md:mb-[13rem] items-center flex mx-auto rounded-full font-medium h-[3rem] text-[blue] hover:bg-[blue] hover:text-[white] p-5 border-[blue] border-[2px]">
        VIEW ALL BLOG POSTS
      </button>
    </div>

  );
};

export default Clients;
