import React from "react";

const Shape2 = () => {
  return (
    <div className="mx-10 flex flex-col mt-[30rem] md:mt-[4rem] lg:mt-0">
      <h2 className="text-[blue] font-bold text-[36px] leading-11 md:mx-72 my-20">
        Our creative digital agency designs and develops bespoke websites with
        three things in mind
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div>
          <h2 className="text-[#403e3e] text-[30px] font-extrabold">Beauty</h2>
          <p className="text-[#464545] text-[18px] font-semibold w-[22rem] md:w-full">
            Developing stunning one-of-a-kind digital design that catches
            people’s eye and brings your brand to life online.
          </p>
        </div>
        <div>
          <h2 className="text-[#403e3e] text-[30px] font-extrabold">Thoughts</h2>
          <p className="text-[#464545] text-[18px] font-semibold w-[22rem] md:w-full">
            As a Design design agency, we love to deliver meaningful design that
            build trust with your target audience.
          </p>
        </div>
        <div >
          <h2 className="text-[#403e3e] text-[30px] font-extrabold">Impacts</h2>
          <p className="text-[#464545] text-[18px] font-semibold w-[22rem] md:w-full">
            Designing tailor made solutions that resonate with your customers
            and drives them to act.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shape2;
