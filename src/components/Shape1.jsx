import React, { useEffect, useRef } from "react";
import hero from "../assets/bg.webp";
import homevideo from "../assets/homevideo.mp4";

const Shape1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${hero})`, paddingTop: "5rem" }}
      className="px-[10rem] lg:h-screen md:py-0 mt-10 flex-none md:flex flex-col md:flex-row md:max-w-[100%] md:gap-20 justify-center text-left items-center bg-cover bg-center"
    >
      <div style={{ flex: 1 }}>
        <video
          ref={videoRef}
          className="md:w-[30rem] h-[25rem] md:h-[35rem] md:mx-0 md:mb-20"
          loop
          autoPlay
          muted
          style={{ 
            objectFit: 'cover', 
            width: '800px', 
            height: '700px' }}
        >
          <source src={homevideo} type="video/mp4" />
        </video>
      </div>
      <div className="md:w-[30rem] mx-auto md:mx-0 pt-[10rem] md:pt-0 flex flex-col justify-center" style={{ flex: 1 }}>
        <h1 className="text-[black] md:text-[white] font-bold text-[50px] leading-tight">
          Making brands a <br /> damn site better
        </h1>
        <p className="text-[18px] text-[grey] md:text-[white] font-medium pt-10">
          Let's face it, first impressions matter. Your website's an opportunity
          to wow your audience, so why waste it with bad design? Because brands
          win new fans when they're brave enough to go beyond their creative
          comfort zone.
        </p>
      </div>
    </div>
  );
};

export default Shape1;
