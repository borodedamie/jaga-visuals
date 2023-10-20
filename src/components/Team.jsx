import React, { useEffect } from "react";
import damage from "../assets/damage.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import director from "../assets/director.jpg";

import web from "../assets/web1.jpg";
import { carousel } from "../assets/data";

import Glide from '@glidejs/glide';
import '../css/glide.core.css';
import '../css/glide.theme.css';

const Team = () => {
  useEffect(() => {
    new Glide('.glide', {
      perView: 4.5,
      gap: 20
    }).mount();
  }, []);

  return (
    <div>
      <div className="bg-[#1c1b1b] mt-[10%] pt-[9rem] ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[3.5rem]">
          <div className="text-[white] font-[900] text-[150px] md:text-[225px]" style={{ flex: 1, marginLeft: '15%' }}>
            <div className="flex pl-3 gap-[7rem] text-[#0dfff6]">
              <span>T</span>
              <span>E</span>
            </div>
            <div className="flex gap-[3rem] text-[#0dfff6]">
              <span>A</span>
              <span>M</span>
            </div>
          </div>
          <div className=" font-medium text-[20px] text-center md:text-left" style={{ flex: 1, marginRight: '10%' }}>
            <h2 className="text-white md:w-[70%] tracking-tight">
              You will find our team working across Creative Web Designs, Web
              Development, Branding and Digital Marketing.
            </h2>
          </div>
        </div>

        <div className="glide" style={{ marginTop: '5%', marginBottom: '10%' }}>
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides" style={{ marginLeft: '10%' }}>
              {carousel.map((carousel1, index) => {
                return (
                  <div className="glide__slide" key={index}>
                    <div className="flex flex-col w-[18rem] ">
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
          <div className="glide__arrows text-[white]" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
          </div>
        </div>

        <LazyLoadImage
          className="w-full mt-[5rem]"
          src={damage}
          alt="Herosection"
        />
      </div>
    </div>
  );
};

export default Team;
