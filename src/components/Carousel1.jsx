import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carousel } from "../assets/data";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Glide from "@glidejs/glide";
import "../css/glide.core.css";
import "../css/glide.theme.css";
const Carousel1 = () => {
  useEffect(() => {
    new Glide(".glide", {
      perView: 5,
      breakpoints: {
        420: {
          perView: 1.5,
        },
        768: {
          perView: 2.5,
        },
        1024: {
          perView: 3.5,
        },
        1280: {
          perView: 5,
        },
      },
      gap: 20,
    }).mount();
  }, []);
  return (
    <div>
      <div className="glide" style={{ paddingTop: "5%", paddingBottom: "10%" }}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides" style={{ marginLeft: "6%" }}>
            {carousel.map((carousel1, index) => {
              return (
                <div className="glide__slide" key={index}>
                  <div className="flex flex-col w-[15rem] md:w-[18rem] ">
                    <div className="">
                      <img
                        className="w-[20rem] border-0 rounded-b-none rounded-t-2xl"
                        src={carousel1.one}
                      />
                    </div>
                    <div className="bg-[#34eaf7] pl-4 py-[2rem] h-[7rem] border-0 rounded-t-none rounded-b-3xl">
                      <h2 className="text-[16px] text-[black] tracking-tight">
                        {carousel1.name}
                      </h2>
                      <p className="text-[16px] text-[black] tracking-tight">
                        <div className="flex flex-row items-center gap-3">
                          <hr className="w-[1rem] bg-black border-black border-[1.5px]" />
                          {carousel1.title}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="glide__arrows text-[white] ml-[6%]"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow1 glide__arrow--left "
            data-glide-dir="<"
            style={{ borderColor: "#34eaf7" }}
          >
            <BsArrowLeft className=" text-[30px]" />
          </button>
          <button
            className="glide__arrow1 glide__arrow--right"
            data-glide-dir=">"
            style={{ borderColor: "#34eaf7" }}
          >
            <BsArrowRight className=" text-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
