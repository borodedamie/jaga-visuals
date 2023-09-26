import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeOut } from "./variants";
import jva from '../assets/damage.jpg'
import premium from '../assets/premium.jpg'
import client from '../assets/clients.jpg'
import fortune from '../assets/Fortune.png'
import Auto from '../assets/Autoflex.png'
import foret from '../assets/Foret.png'
import livevend from '../assets/Livevend.png'
import kitchen from '../assets/Kitchenji.png'
import jumia from '../assets/Jumia.png'
import wavy from '../assets/Wavy.png'
import nagaad from '../assets/Nagaad.png'
import one from '../assets/one.png'
import immerse from '../assets/immerse.png'

const Clients = () => {
  const scrollRef = useRef(null);

  return (
    <div className="px-5 mt-[13rem]  mb-20"> 
      <h1 className="text-left my-20 md:text-center font-extrabold text-[55px]">
        Our Clients
      </h1>
<motion.div
variants={fadeOut("bottom", 0.2)}
viewport={{ amount: 0.7 }}
initial="hidden"
whileInView={"show"}

className="grid w-full md:w-[70%] px-0 mb-[13rem] items-center justify-center mx-auto md:px-20 grid-cols-2 md:grid-cols-5 gap-8">
<img className="w-[7rem] h-[7rem]" src={wavy}></img>
<img className="w-[7rem] h-[7rem]" src={one}></img>
<img className="w-[7rem] h-[2rem]" src={immerse}></img>

<img className="w-[7rem] h-[7rem]" src={jumia}></img>
<img className="w-[7rem] h-[7rem]" src={foret}></img>
<img className="w-[7rem] h-[7rem]" src={kitchen}></img>
<img className="w-[7rem] h-[7rem]" src={Auto}></img>
<img className="w-[7rem] h-[7rem]" src={livevend}></img>
<img className="w-[7rem] h-[7rem]" src={nagaad}></img>
<img className="w-[7rem] h-[7rem]" src={fortune}></img>

</motion.div>
        <div className="flex flex-col pb-5 md:flex-row justify-center items-end gap-20">
          <div className="flex w-full md:w-[20rem] flex-col">
          <h2 className="font-bold text-[38px] pb-[1rem]">Latest Articles</h2>
          <div className="border bg-[black] h-fit">
            <img src={jva}></img>
          </div>
          </div>
          <div className="border bg-[black] h-fit w-full md:w-[20rem]">
          <img src={client}></img>
          </div>
          <div className="border bg-[black] h-fit w-full md:w-[20rem]">
          <img src={premium}></img>

          </div>
        </div>
        <button className="text-center mb-[13rem] items-center flex mx-auto rounded-2xl font-medium h-[2rem] text-[blue] p-5 border-[blue] border-[2px]">VIEW ALL BLOG POSTS</button>
      </div>
  );
};

export default Clients;
