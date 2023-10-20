import React from "react";
import damage from "../assets/damage.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import director from "../assets/director.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import web from "../assets/web1.jpg";
import { carousel } from "../assets/data";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
const Team = () => {
  return (
    <div>
      <div className="bg-[#1c1b1b] mt-[10%] py-[9rem] ">
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

        <div className="pl-10 md:pl-[5rem] pt-[3rem]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            // slidesPerView={1.5}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            
            navigation
            pagination={{ cickable: true }}
            scrollbar={{ draggable: true }}
            speed={800}
            effect={"fade"}
          >
            {carousel.map((carousel1, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col h-[24rem] w-[20rem] ">
                    <div className="">
                      <img
                        className="w-[20rem] border-0 rounded-b-none rounded-t-2xl "
                        src={carousel1.one}
                      />
                    </div>
                    <div className="bg-[#34eaf7] pl-4 py-2 h-[4rem] border-0 rounded-t-none rounded-b-3xl">
                      <h2 className="text-[16px] text-[black]">
                        {carousel1.name}
                      </h2>
                      <p className="text-[16px] w-full md:w-[24.5rem] text-[black]">
                        <div className="flex flex-row items-center gap-3">
                          <hr className="w-[1rem] bg-black border-black border-[1.5px]" />
                          {carousel1.title}
                        </div>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
